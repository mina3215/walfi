package com.shinhan.walfi.service;

import com.shinhan.walfi.domain.User;
import com.shinhan.walfi.dto.TokenDto;
import com.shinhan.walfi.dto.UserDto;
import com.shinhan.walfi.exception.UserException;
import com.shinhan.walfi.repository.UserRepository;
import com.shinhan.walfi.util.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.shinhan.walfi.exception.UserErrorCode.NO_MATCHING_USER;


@Slf4j
@Service
//@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final JWTUtil jwtUtil;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Override
    public List<UserDto> getUserList() {
        List<User> userList = userRepository.findAll();

        List<UserDto> dto = userList.stream().map(user -> getUserDto(user)).collect(Collectors.toList());
        log.info("=== 사용자 리스트 조회 ===");
        return dto;
    }

    /**
     * 로그인 기능
     *
     * @param userId
     * @param password
     * @return
     * @throws 'NO_MATCHING_USER' - 비밀번호가 틀리거나 존재하지 않는 사용자의 경우 예외 발생
     */
    @Override
    public TokenDto login(String userId, String password) {

        boolean isLoginSuccessful = true;
        Authentication authenticatedUser = null;
        TokenDto tokenDto = new TokenDto();
        log.info("{}, {}", userId, password);
        try {
            authenticatedUser = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userId, password)
            );
        } catch (Exception e) {
            log.error(e.toString());
            isLoginSuccessful = false;
            tokenDto.setLoginSuccessful(isLoginSuccessful);
            log.error("아이디 혹은 비밀번호가 틀립니다.");
            throw new UserException(NO_MATCHING_USER);
        }

        if (isLoginSuccessful) {

            User loginUser = (User) authenticatedUser.getPrincipal();
            String name = loginUser.getName();

            String accessToken = jwtUtil.createAccessToken(userId, name);
            String refreshToken = jwtUtil.createRefreshToken(userId, name);

            log.debug("로그인 성공");
            log.debug("user: {}", loginUser);
            log.debug("Access-Token: {}", accessToken);
            log.debug("Refresh-Token: {}", refreshToken);

            tokenDto.setLoginSuccessful(true);
            tokenDto.setACCESS_TOKEN(accessToken);
            tokenDto.setREFRESH_TOKEN(refreshToken);
            tokenDto.setName(loginUser.getName());

            // redis에 RefreshToken 저장
            jwtUtil.saveUserRefreshToken(userId, refreshToken);
        }

        return tokenDto;
    }


    @Override
    public void signup(User user) {
        String encodedPW = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPW);
        User userResult = userRepository.save(user);
        log.debug("회원 가입 계정 : "+userResult.toString());
        // Todo : user_gameinfo 생성, 계좌 6개 생성

    }

    /**
     * user 정보를 UserDto로 변환하는 기능
     *
     * @param user
     * @return UserDto
     */
    private UserDto getUserDto(User user) {
        return UserDto.builder()
                .userId(user.getUserId())
                .email(user.getEmail())
                .name(user.getName())
                .birthDate(user.getBirthDate())
                .phoneNumber(user.getPhoneNumber())
                .userMainAccount(user.get대표계좌())
                .build();
    }

    public UserDto findUserById(String userId){
        User user = userRepository.findById(userId).get();
        UserDto userDto = getUserDto(user);
        return userDto;
    }
}

