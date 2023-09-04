package com.shinhan.walfi.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter
public class Account {

    @Id
    private String accountNumber;

    @NotNull
    private Long balance;

    @NotNull
    @CreationTimestamp
    private LocalDateTime createdTime;

    @NotNull
    private Integer accountPassword;

    @NotNull
    private String currency;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "account")
    private List<AccountTransaction> accountTransactions = new ArrayList<>();
}
