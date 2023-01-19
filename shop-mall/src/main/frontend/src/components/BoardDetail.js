import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail() {
  const { seq } = useParams();

  const [board, setBoard] = useState({
    writer: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    async function getBoardDetail() {
      await axios({
        method: "post",
        url: `/board/readDetail.do/${seq}`,
      }).then((res) => {
        console.log(res);
        console.log(seq);
        setBoard(res.data);
      });
    }
    getBoardDetail();
  }, [seq]);

  const listPage = useNavigate();

  function movePage() {
    listPage("/board/list");
  }

  const deletePage = async () => {
    await axios({
      method: "delete",
      url: `/board/delete.do/${seq}`,
    }).then((res) => {
      console.log(res);
    });
  };

  const modifyPage = async () => {
    const formData = new FormData();
    formData.append("seq", seq);
    formData.append("title", board.title);
    formData.append("writer", board.writer);
    formData.append("content", board.content);

    await axios({
      method: "put",
      url: "/board/update.do/",
      data: formData,
    }).then((res) => {
      console.log(res);
    });
  };

  const onChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Write
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="writer"
              name="writer"
              label="Writer"
              multiline
              defaultValue={board.writer}
              // InputProps={{
              //   readOnly: true,
              // }}
              variant="filled"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              multiline
              defaultValue={board.title}
              // InputProps={{
              //   readOnly: true,
              // }}
              variant="filled"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              name="content"
              label="Content"
              multiline
              defaultValue={board.content}
              // InputProps={{
              //   readOnly: true,
              // }}
              variant="filled"
              rows={4}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={deletePage}>
              Delete
            </Button>
            <Button variant="contained" onClick={modifyPage}>
              Modify
            </Button>
            <Button variant="contained" onClick={movePage}>
              Return
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default BoardDetail;
