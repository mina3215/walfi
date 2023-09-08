package com.shinhan.walfi.controller;

import com.shinhan.walfi.domain.HttpResult;

import com.shinhan.walfi.dto.banking.ExchangeResDto;
import com.shinhan.walfi.dto.game.CharacterReqDto;
import com.shinhan.walfi.service.CharacterService;
import lombok.RequiredArgsConstructor;

import org.json.simple.parser.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/character")
@RequiredArgsConstructor
public class CharacterController {

    private final CharacterService characterService;

    @PostMapping("/create")
    public ResponseEntity<HttpResult> createRandomCharacter(@RequestBody CharacterReqDto characterReqDto) {
        String userId = characterReqDto.getUserId();
        characterService.create(userId);

        HttpResult res;

        res = HttpResult.getSuccess();
        
        return ResponseEntity.status(res.getStatus()).body(res);
    }
}
