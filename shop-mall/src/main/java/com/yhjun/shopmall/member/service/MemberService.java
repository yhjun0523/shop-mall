package com.yhjun.shopmall.member.service;

import com.yhjun.shopmall.member.entity.TokenInfoVO;

public interface MemberService {
    public TokenInfoVO login(String id, String pw);
}
