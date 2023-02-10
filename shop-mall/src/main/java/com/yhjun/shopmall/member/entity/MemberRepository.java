package com.yhjun.shopmall.member.entity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> findByIdAndPw(String id, String pw);
    
    Optional<Member> findById(String username);
}
