import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';




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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  


  

export const BlockedList = () => {

    let [blockUsers,setBlockUsers]=useState([]);
    let[errorMsg,setErrorMsg]=useState('');

    useEffect(()=>
    {
        getAllBlockUsers()
    }, []);


 const getAllBlockUsers=()=> {
        axios
        .get("http://localhost:8082/user/blockUsers")
        .then(response => setBlockUsers(response.data)).catch((error=>setErrorMsg("error ")));
    }
   

    const Unblock=(event)=>{
        console.log(event);
        const obj={
            email:event
        }
        axios.post("http://localhost:8082/user/unblockUser",obj,{               
             headers: {
            "Content-Type": "application/json",
        },
        })
        .then(res=>{console.log(res.data);
            getAllBlockUsers();
        })
    }

  return (
    <>
     <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Offer Id</StyledTableCell> */}
            <StyledTableCell align='center' >User ID</StyledTableCell>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align='center'>Email</StyledTableCell>
            <StyledTableCell align='center'>Action</StyledTableCell>
            
      
          </TableRow>
        </TableHead>
        <TableBody>
          {blockUsers.map((blockUsers) => (
            <StyledTableRow >
            <StyledTableCell align='center'>{blockUsers.userId}</StyledTableCell>
              <StyledTableCell align='center'>{blockUsers.userName}</StyledTableCell>
              <StyledTableCell align='center'>{blockUsers.userEmail}</StyledTableCell>
              <StyledTableCell align='center'>
                  <Button  variant="contained" color="success" onClick={()=>Unblock(blockUsers.userEmail)}>
                    UNBLOCK
                  </Button>
              </StyledTableCell> 
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
    </>
  )
}
