package com.yhjun.shopmall.board.service;

import java.util.List;

import com.yhjun.shopmall.board.vo.BoardVO;

public interface BoardService {
    public List<BoardVO> getBoardList();
    
    public void setBoard(BoardVO vo);
    
    public BoardVO getBoardDetail(BoardVO vo);
    
    public void deleteBoard(BoardVO vo);
    
    public void updateBoard(BoardVO vo);
}
