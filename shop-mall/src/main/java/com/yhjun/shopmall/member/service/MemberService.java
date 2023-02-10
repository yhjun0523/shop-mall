package com.yhjun.shopmall.member.service;

import java.util.Optional;

import com.yhjun.shopmall.member.entity.Member;
import com.yhjun.shopmall.member.entity.TokenInfoVO;

public interface MemberService {
    public Optional<Member> findByIdAndPw(String id, String pw);
    
    public TokenInfoVO login(String id, String pw);
}
