package com.shinhan.walfi.service.banking;

import com.shinhan.walfi.dto.product.ProductDto;

import java.math.BigDecimal;
import java.util.List;

public interface ProductService {
     List<ProductDto> getProductList();
     void createLevelUpTimeDeposit(String userId,
                            String mainAccountNum,
                            String 통화코드,
                            String 상품명,
                            BigDecimal 금리,
                            long 입금금액);

}
