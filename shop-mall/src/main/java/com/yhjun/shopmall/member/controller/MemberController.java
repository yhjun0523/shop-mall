package com.yhjun.shopmall.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.member.service.MemberService;
import com.yhjun.shopmall.member.vo.MemberVO;

import jakarta.servlet.http.HttpSession;

@RestController
public class MemberController {

//    @Autowired
//    MemberService memberService;
//
//    @PostMapping("/member/login.do")
//    public MemberVO login(@RequestParam("id") String id, @RequestParam("pw") String pw, MemberVO vo,
//            HttpSession session) {
//
//        MemberVO member = memberService.login(vo);
//
//        if (member != null) {
//            if (id.equals(member.getId()) && pw.equals(member.getPw())) {
//                session.setAttribute("id", member.getId());
//                session.setAttribute("name", member.getName());
//            }
//            System.out.println("로그인 성공.");
//            return member;
//        } else {
//            System.out.println("로그인 실패..");
//            return null;
//        }
//    }
//
//    @PostMapping("/member/logout.do")
//    public String logout(HttpSession session) {
//        session.invalidate();
//        return null;
//    }

}
