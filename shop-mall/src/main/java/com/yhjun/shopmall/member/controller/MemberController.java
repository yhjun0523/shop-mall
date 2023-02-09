package com.yhjun.shopmall.member.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.member.entity.MemberEntity;
import com.yhjun.shopmall.member.service.MemberService;

@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/member/login.do")
    public ResponseEntity<MemberEntity> login(String id, String pw) {
        Optional<MemberEntity> member = memberService.findByIdAndPw(id, pw);
        return new ResponseEntity<MemberEntity>(member.get(), HttpStatus.OK);
    }
    
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
