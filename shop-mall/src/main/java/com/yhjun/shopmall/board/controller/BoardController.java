package com.yhjun.shopmall.board.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.board.entity.BoardEntity;
import com.yhjun.shopmall.board.service.BoardService;

@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/board/read.do")
    public ResponseEntity<List<BoardEntity>> getBoardList() {
        List<BoardEntity> board = boardService.findAll();
        return new ResponseEntity<List<BoardEntity>>(board, HttpStatus.OK);
    }

    @GetMapping("/board/readDetail.do/{seq}")
    public ResponseEntity<BoardEntity> getBoardDetail(@PathVariable("seq") int seq) {
        Optional<BoardEntity> board = boardService.findById(seq);
        return new ResponseEntity<BoardEntity>(board.get(), HttpStatus.OK);
    }

    @PostMapping("/board/write.do")
    public ResponseEntity<BoardEntity> setBoard(BoardEntity entity) {
        return new ResponseEntity<BoardEntity>(boardService.save(entity), HttpStatus.OK);
    }

    @DeleteMapping("/board/delete.do/{seq}")
    public ResponseEntity<Void> deleteBoard(@PathVariable("seq") int seq) {
        boardService.deleteById(seq);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/board/update.do/{seq}")
    public ResponseEntity<BoardEntity> updateBoard(@PathVariable("seq") int seq, BoardEntity entity) {
        boardService.updateById(seq, entity);
        return new ResponseEntity<BoardEntity>(entity, HttpStatus.OK);
    }
}
