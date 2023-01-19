package com.yhjun.shopmall.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.yhjun.shopmall.board.vo.BoardVO;

@Repository
@Mapper
public interface BoardMapper {

    List<BoardVO> getBoardList();

    void setBoard(BoardVO vo);

    BoardVO getBoardDetail(BoardVO vo);

    void deleteBoard(BoardVO vo);

    void updateBoard(BoardVO vo);
}
