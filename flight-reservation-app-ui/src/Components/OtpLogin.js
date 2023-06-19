import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from 'axios'
import LoginIcon from '@mui/icons-material/Login';
import { green } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';



const theme = createTheme();
export const OtpLogin = () => {

    let [otp,setOtp] = useState({
        otp:"",
        email:""
    });
    const handlesubmit=(event)=>{
        console.log(otp);
        alert(`${otp.otp}`);
        event.preventDefault();
      
        axios.post("http://localhost:8082/user/validateotp",otp,{               
             headers: {
            "Content-Type": "application/json",
        },
        })
        .then(res=>{console.log(res.data)})
        
    }
    const handleChange = name => e => {
        setOtp({ ...otp, [name]: e.target.value });
    };

  return (
  <>
   <div id='div_reg'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md" >
                    <CssBaseline />
                    <Box id="card"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <PrivacyTipIcon sx={{ m: 1, bgcolor:'azure',width: 56, height: 56, color: green[500] } }>
                        <LockOutlinedIcon />
                        </PrivacyTipIcon>
                        <Typography component="h1" variant="h5" >
                           Enter OTP
                        </Typography>
                        <Box component="form" noValidate onSubmit={handlesubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange("otp")}
                                        autoComplete="given-otp here"
                                        name="otp"
                                        required
                                        fullWidth
                                        
                                       
                                        id="otp"
                                        label="OTP"
                                        value={otp.otp}
                                        autoFocus
                                        color="warning"
                                    />
                                </Grid>
                              
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                endIcon={<SendIcon />}
                            >
                              Varify OTP
                            </Button>
                           
                        </Box>
                    </Box>
                </Container>
     
            </ThemeProvider>

        </div>
  
  
  </>
  )
}
