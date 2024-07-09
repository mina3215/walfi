package com.shinhan.walfi.repository.banking;

import com.shinhan.walfi.domain.banking.ProductInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInfo extends JpaRepository<ProductInfo, String> {
}
