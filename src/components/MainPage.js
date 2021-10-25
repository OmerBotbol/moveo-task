import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../styles/mainPage.css';

function MainPage({ setUser }) {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?page=${pageNumber + 1}&results=10&seed=abc`
      )
      .then((result) => {
        setUsers(result.data.results);
      });
  }, [pageNumber]);

  const handleClick = (userToSet) => {
    setUsername(userToSet.login.username);
    setUser(userToSet);
  };

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#123c69',
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: "'Comfortaa', cursive;",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily: "'Comfortaa', cursive;",
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    cursor: 'pointer',
    backgroundColor: '#eee2dc',
    '&:hover': {
      backgroundColor: '#bab2b5',
    },
  }));

  if (username) {
    return <Redirect to={`/${username}`} />;
  }

  return (
    <div id="main-page">
      <h1 id="main-page-header">All Users</h1>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Picture</StyledTableCell>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, key) => {
              return (
                <StyledTableRow key={key} onClick={() => handleClick(user)}>
                  <StyledTableCell>
                    <img
                      className="profile-image"
                      src={user.picture.thumbnail}
                      alt="profile"
                    ></img>
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.name.first[0]}. {user.name.last}
                  </StyledTableCell>
                  <StyledTableCell>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
                  </StyledTableCell>
                  <StyledTableCell>{user.gender}</StyledTableCell>
                  <StyledTableCell>{user.dob.age}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        rowsPerPage={10}
        page={pageNumber}
        count={100}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MainPage;
