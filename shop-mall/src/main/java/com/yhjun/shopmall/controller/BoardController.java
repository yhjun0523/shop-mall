package com.yhjun.shopmall.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.service.BoardService;
import com.yhjun.shopmall.vo.BoardVO;

@RestController
public class BoardController {

    private final BoardService boardSevice = null;

    @GetMapping("/board")
    public List<BoardVO> getBoard() {

        return boardSevice.getBoardList();
    }
}
