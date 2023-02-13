package com.yhjun.shopmall.member.entity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> findById(String username);
}
