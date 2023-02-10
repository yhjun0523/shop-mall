package com.yhjun.shopmall.member.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.member.entity.Member;
import com.yhjun.shopmall.member.entity.MemberLoginVO;
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
    public ResponseEntity<Member> login(String id, String pw) {
        Optional<Member> member = memberService.findByIdAndPw(id, pw);
        return new ResponseEntity<Member>(member.get(), HttpStatus.OK);
    }

    @PostMapping("/login")
    public TokenInfoVO login(@RequestBody MemberLoginVO memberLoginVO) {
        String id = memberLoginVO.getId();
        String pw = memberLoginVO.getPw();
        TokenInfoVO tokenInfo = memberService.login(id, pw);
        return tokenInfo;
    }
}
