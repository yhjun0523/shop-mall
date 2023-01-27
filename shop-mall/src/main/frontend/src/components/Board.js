import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import "./Style.css";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Board() {
  const [board, setBoard] = useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios.get("/board/read.do").then((response) => {
      setBoard(response.data);
    });
  }, []);

  const writePage = useNavigate();

  function movePage() {
    writePage("/board/write");
  }

  if (board) {
    return (
      <div className="board">
        <Container component={Paper} sx={{ paddingTop: 3 }}>
          <React.Fragment>
            {/* <Title>Recent Orders</Title> */}
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" style={{ width: "10%" }}>
                    Seq
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: "10%" }}>
                    Writer
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: "50%" }}>
                    Title
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: "20%" }}>
                    RegDate
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: "10%" }}>
                    Count
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? board.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : board
                ).map((boardList) => (
                  <StyledTableRow key={boardList.seq}>
                    <TableCell align="center">{boardList.seq}</TableCell>
                    <TableCell align="center">{boardList.writer}</TableCell>
                    <TableCell align="center">
                      <Link to={`/board/boardDetail/${boardList.seq}`}>
                        {boardList.title}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{boardList.regDate}</TableCell>
                    <TableCell align="center">{boardList.cnt}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    // colSpan={3}
                    count={board.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
            <Box>
              <Button variant="contained" onClick={movePage} sx={{ my: 2 }}>
                Write
              </Button>
            </Box>
          </React.Fragment>
          {console.log(board)}
        </Container>
      </div>
    );
  } else {
    return null;
  }
}

export default Board;
