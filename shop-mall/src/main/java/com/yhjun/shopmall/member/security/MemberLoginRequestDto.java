package com.yhjun.shopmall.member.security;

import lombok.Data;

@Data
public class MemberLoginRequestDto {

    private String memberId;

    private String password;
}
