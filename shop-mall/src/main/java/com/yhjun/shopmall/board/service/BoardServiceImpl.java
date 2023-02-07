package com.yhjun.shopmall.board.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.yhjun.shopmall.board.entity.BoardEntity;
import com.yhjun.shopmall.board.entity.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public List<BoardEntity> findAll() {
        List<BoardEntity> boardList = new ArrayList<>();
        boardRepository.findAll(Sort.by(Sort.Direction.DESC, "seq")).forEach(e -> boardList.add(e));
        return boardList;
    }
    
    @Override
    public Optional<BoardEntity> findById(int seq) {
        Optional<BoardEntity> board = boardRepository.findById(seq);
        return board;
    }
    
    @Override
    public BoardEntity save(BoardEntity entity) {
        boardRepository.save(entity);
        return entity;
    }
//
//    @Override
//    public void deleteBoard(BoardEntity vo) {
//        boardMapper.deleteBoard(vo);
//    }
//
//    @Override
//    public void updateBoard(BoardEntity vo) {
//        boardMapper.updateBoard(vo);
//    }
}
