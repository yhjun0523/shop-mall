package com.yhjun.shopmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.service.BoardService;
import com.yhjun.shopmall.vo.BoardVO;

@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/board/read.do")
    public List<BoardVO> getBoard() {
        return boardService.getBoardList();
    }

    @PostMapping("board/write.do")
    public void setBoard(BoardVO vo) {
        boardService.setBoard(vo);
    }
}
