package com.yhjun.shopmall.member.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "member")
@IdClass(MemberEntityId.class)
public class MemberEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;
    
    @Id
    private String id;

    private String pw;

    private String name;

    private String address;

    private String phone;
    
    @Builder
    public MemberEntity(String id, String pw, String name, String address, String phone) {
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}
