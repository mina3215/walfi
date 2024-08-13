package com.shinhan.walfi.dto;

import com.shinhan.walfi.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class UserSignUpDto {

    private String userId;

    private String password;

    private String name;

    private LocalDateTime birtDate;

    public User UserDtoToEntity() {
        User user = new User();
        user.setUserId(this.userId);
        user.setName(this.name);
        user.setPassword(this.password);
        user.setBirthDate(this.birtDate);
        return user;
    }
}
