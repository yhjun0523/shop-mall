package com.yhjun.shopmall.member.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yhjun.shopmall.member.entity.MemberEntity;
import com.yhjun.shopmall.member.entity.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Optional<MemberEntity> findByIdAndPw(String id, String pw) {
        Optional<MemberEntity> member = memberRepository.findByIdAndPw(id, pw);
        return member;
    }
    
}
