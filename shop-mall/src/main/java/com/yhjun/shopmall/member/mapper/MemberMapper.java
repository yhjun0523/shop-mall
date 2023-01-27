package com.yhjun.shopmall.member.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.yhjun.shopmall.member.vo.MemberVO;

@Repository
@Mapper
public interface MemberMapper {
    MemberVO login(MemberVO vo);
}
