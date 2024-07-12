package com.shinhan.walfi.domain.banking;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
public class ProductInfo {
    @Id
    private String 상품명;

    private float 기본금리;

    @Column(name="우대금리")
    private float 추가금리;

    private int 가입최대기간;

    private String 상품설명;
}
