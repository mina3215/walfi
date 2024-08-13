package com.shinhan.walfi.dto.product;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;

@Getter
@Builder
public class ProductDto {

    private String name;

    private float baseRate ;

    private float addRate;
    
    private int period ;

    private String info;
}
