package com.yhjun.shopmall.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yhjun.shopmall.board.mapper.BoardMapper;
import com.yhjun.shopmall.board.vo.BoardVO;

@Service
public class BoardServiceImpl implements BoardService {
    
    @Autowired
    private BoardMapper boardMapper;
    
    @Override
    public List<BoardVO> getBoardList() {
        return boardMapper.getBoardList();
    }
    
    @Override
    public void setBoard(BoardVO vo) {
        boardMapper.setBoard(vo);
    }
    
    @Override
    public BoardVO getBoardDetail(BoardVO vo) {
        return boardMapper.getBoardDetail(vo);
    }
}
