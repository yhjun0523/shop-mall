package com.yhjun.shopmall.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.member.service.MemberService;
import com.yhjun.shopmall.member.vo.MemberVO;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/member/login.do")
    public MemberVO getMember(MemberVO vo) {
        return memberService.getMember(vo);
    }

}
