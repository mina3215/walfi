package com.shinhan.walfi.domain;

import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
public class Branch {

    @Id
    private String branchCode;

    private String address;

    private String branchName;

    private String branchType;

    private Float latitude;

    private Float longitude;

    private Integer managerLevel;

    private Integer managerExp;

    private Integer managerHp;

    private Integer managerAtk;

    private Integer managerDef;

    @CreationTimestamp
    private LocalDateTime startTime;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_code")
    private UserGameInfo userGameInfo;

    @OneToMany(mappedBy = "branch")
    private List<BattleHistory> battleHistories = new ArrayList<>();

}
