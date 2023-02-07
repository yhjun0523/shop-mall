package com.yhjun.shopmall.board.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.yhjun.shopmall.board.entity.BoardEntity;

@Repository
public interface BoardMapper {

    List<BoardEntity> getBoardList();

    void setBoard(BoardEntity vo);

    BoardEntity getBoardDetail(BoardEntity vo);

    void deleteBoard(BoardEntity vo);

    void updateBoard(BoardEntity vo);
}
