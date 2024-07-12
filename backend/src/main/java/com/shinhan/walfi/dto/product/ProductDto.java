package com.shinhan.walfi.dto.product;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;

@Getter
@Builder
public class ProductDto {

    private String productName;

    private float baseInterestRate ;

    private float plusInterestRate;
    
    private int maxSubscriptionPeriod ;

    private String info;
}
