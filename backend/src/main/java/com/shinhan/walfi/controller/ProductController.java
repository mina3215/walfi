package com.shinhan.walfi.controller;

import com.shinhan.walfi.domain.HttpResult;
import com.shinhan.walfi.domain.User;
import com.shinhan.walfi.dto.UserDto;
import com.shinhan.walfi.dto.banking.AccountReqDto;
import com.shinhan.walfi.dto.banking.AccountResDto;
import com.shinhan.walfi.dto.banking.ProductReqDto;
import com.shinhan.walfi.dto.product.ProductDto;
import com.shinhan.walfi.dto.product.ProductResDto;
import com.shinhan.walfi.service.banking.AccountService;
import com.shinhan.walfi.service.banking.ProductService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.math.BigDecimal;
import java.util.List;
import java.util.SimpleTimeZone;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    @ApiOperation(value = "금융 상품 목록 조회")
    public ResponseEntity<HttpResult> getUserList(){
        List<ProductDto> productList = productService.getProductList();

        HttpResult res;
        res = HttpResult.getSuccess();
        res.setData(productList);
        return ResponseEntity.status(res.getStatus()).body(res);
    }

    @PostMapping("/create")
    @ApiOperation(value = "정기예금 생성")
    public ResponseEntity<HttpResult> createTimeDeposit(@ApiIgnore @AuthenticationPrincipal User user, @RequestBody ProductReqDto productReqDto){

        String userId = user.getUserId();
        String mainAccountNum = productReqDto.getMainAccountNum();
        long 입금금액 = productReqDto.get입금금액();
        String 통화코드 = productReqDto.get통화코드();
        String 상품명 = productReqDto.get상품명();
        BigDecimal 금리 = productReqDto.get금리();

        System.out.println("금리 = " + 금리);
        productService.createLevelUpTimeDeposit(userId, mainAccountNum, 통화코드, 상품명, 금리, 입금금액);

        HttpResult res;
        res = HttpResult.getSuccess();

        return ResponseEntity.status(res.getStatus()).body(res);
    }
}
