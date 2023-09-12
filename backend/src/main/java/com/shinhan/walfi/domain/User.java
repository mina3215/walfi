package com.shinhan.walfi.domain;

import com.shinhan.walfi.domain.banking.Account;
import com.shinhan.walfi.domain.game.UserGameInfo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class User {

    @Id
    private String userId;

    private String email;

    private String password;

    private String name;

    private LocalDateTime birthDate;

    private String phoneNumber;

    private String 대표계좌;

    @OneToMany(mappedBy = "user")
    private List<Account> accounts = new ArrayList<>();

}
