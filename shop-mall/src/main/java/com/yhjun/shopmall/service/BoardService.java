package com.yhjun.shopmall.service;

import java.util.List;

import com.yhjun.shopmall.vo.BoardVO;

public interface BoardService {
    public List<BoardVO> getBoardList();
    
    public void setBoard(BoardVO vo);
}
