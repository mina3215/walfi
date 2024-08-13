package com.shinhan.walfi.repository.banking;

import java.util.List;

import com.shinhan.walfi.domain.banking.ProductInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepostiory extends JpaRepository<ProductInfo, String> {
    @Query(value = "select * from product_info", nativeQuery = true)
    List<ProductInfo> findAllProduct();
}
