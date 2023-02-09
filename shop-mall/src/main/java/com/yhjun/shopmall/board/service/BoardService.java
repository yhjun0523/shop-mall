package com.yhjun.shopmall.board.service;

import java.util.List;
import java.util.Optional;

import com.yhjun.shopmall.board.entity.BoardEntity;

public interface BoardService {

    public List<BoardEntity> findAll();

    public Optional<BoardEntity> findById(int seq);

    public BoardEntity save(BoardEntity entity);

    public void deleteById(int seq);

    public void updateById(int seq, BoardEntity entity);

}
