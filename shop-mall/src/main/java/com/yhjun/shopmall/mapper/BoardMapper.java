package com.yhjun.shopmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.yhjun.shopmall.vo.BoardVO;

@Repository
@Mapper
public interface BoardMapper {

    List<BoardVO> getBoardList();

    void setBoard(BoardVO vo);
}
