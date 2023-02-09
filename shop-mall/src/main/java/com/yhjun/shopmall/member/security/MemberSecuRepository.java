package com.yhjun.shopmall.member.security;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberSecuRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByMemberId(String username);
}
