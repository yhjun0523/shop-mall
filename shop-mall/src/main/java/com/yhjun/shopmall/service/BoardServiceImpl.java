package com.yhjun.shopmall.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yhjun.shopmall.mapper.BoardMapper;
import com.yhjun.shopmall.vo.BoardVO;

@Service
public class BoardServiceImpl implements BoardService {
    private final BoardMapper boardMapper = null;
    
    public List<BoardVO> getBoardList() {
        return boardMapper.getBoardList();
    }
}
