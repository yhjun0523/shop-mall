package com.yhjun.shopmall.member.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.yhjun.shopmall.member.mapper.MemberMapper;
import com.yhjun.shopmall.member.vo.MemberVO;

public class MemberServiceImpl implements MemberService {
    
    @Autowired
    private MemberMapper memberMapper;
    
    @Override
    public MemberVO getMember(MemberVO vo) {
        return memberMapper.getMember(vo);
    }

}
