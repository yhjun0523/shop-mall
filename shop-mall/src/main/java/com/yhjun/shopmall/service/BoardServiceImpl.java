package com.yhjun.shopmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yhjun.shopmall.mapper.BoardMapper;
import com.yhjun.shopmall.vo.BoardVO;

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
}
