package com.yhjun.shopmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yhjun.shopmall.service.BoardService;
import com.yhjun.shopmall.vo.BoardVO;

@RestController
public class BoardController {

    @Autowired
    private BoardService boardSevice;

    @GetMapping("/board")
    public List<BoardVO> getBoard() {
        return boardSevice.getBoardList();
        
    }
}
