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
  
  


  
export const ComplaintList = () => {
    let [complaint,setComplaint]=useState([]);
    let[errorMsg,setErrorMsg]=useState('');

    useEffect(()=>
    {
        getAllComplaint()
    }, []);


 const getAllComplaint=()=> {
        axios
        .get("http://localhost:8082/complaint/getAllComplaints")
        .then(response => setComplaint(response.data)).catch((error=>setErrorMsg("error occered ")));
    }
   

  return (
    <>
     <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Offer Id</StyledTableCell> */}
            <StyledTableCell align='center' >Complaint ID</StyledTableCell>
            <StyledTableCell align='center'>Description</StyledTableCell>
            <StyledTableCell align='center'>Booking ID</StyledTableCell>
            <StyledTableCell align='center'>Action</StyledTableCell>
            
      
          </TableRow>
        </TableHead>
        <TableBody>
          {complaint.map((complaint) => (
            <StyledTableRow >
            <StyledTableCell align='center'>{complaint.complaintId}</StyledTableCell>
              <StyledTableCell align='center'>{complaint.description}</StyledTableCell>
              <StyledTableCell align='center'>{complaint.bookingId}</StyledTableCell>
              
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
    </>
  )
}
