package com.shinhan.walfi.service;

import com.shinhan.walfi.domain.User;
import com.shinhan.walfi.dto.banking.SignupReqDto;

public interface UserService {

    void signup(User user);

    int login(String userId, String password);
}
