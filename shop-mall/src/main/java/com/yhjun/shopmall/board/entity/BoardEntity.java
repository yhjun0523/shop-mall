package com.yhjun.shopmall.board.entity;

import java.time.LocalDate;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "board")
@EntityListeners(AuditingEntityListener.class)
@DynamicUpdate
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    private String title;

    private String writer;

    private String content;
    
    @CreatedDate
    private LocalDate regdate;
    
    @ColumnDefault("0")
    private int cnt;

    @Builder
    public BoardEntity(String title, String writer, String content, LocalDate regdate, int cnt) {
        this.title = title;
        this.writer = writer;
        this.content = content;
        this.regdate = regdate;
        this.cnt = cnt;
    }
}
