package com.yhjun.shopmall.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.member.entity.MemberLoginRequestVO;
import com.yhjun.shopmall.member.entity.TokenInfoVO;
import com.yhjun.shopmall.member.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/login.do")
    public TokenInfoVO login(@RequestBody MemberLoginRequestVO memberLoginRequestVO) {
        String id = memberLoginRequestVO.getId();
        String pw = memberLoginRequestVO.getPw();
        TokenInfoVO tokenInfo = memberService.login(id, pw);
        return tokenInfo;
    }
}
