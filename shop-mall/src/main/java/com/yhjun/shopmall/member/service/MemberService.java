package com.yhjun.shopmall.member.service;

import java.util.Optional;

import com.yhjun.shopmall.member.entity.MemberEntity;

public interface MemberService {
    public Optional<MemberEntity> findByIdAndPw(String id, String pw);
}
