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
import { orange } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme();
export const EmailLogin = () => {


    let [email,setEmail] = useState({
        email:""
    });
    const handlesubmit=(event)=>{
        console.log(email);
        alert(`${email.email}`);
        event.preventDefault();
      
       
        axios.post("http://localhost:8082/user/loginCheckByEmail",email,{               
             headers: {
            "Content-Type": "application/json",
        },
        })
        .then(res=>{console.log(res.data)})
        
    }
    const handleChange = name => e => {
        setEmail({ ...email, [name]: e.target.value });
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
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <LoginIcon sx={{ m: 1, bgcolor:'azure',width: 56, height: 56, color: orange[500]  }}>
                        <LockOutlinedIcon />
                        </LoginIcon>
                        <Typography component="h1" variant="h5" >
                           LOGIN
                        </Typography>
                        <Box component="form" noValidate onSubmit={handlesubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange("email")}
                                        autoComplete="given-email here"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        value={email.email}
                                        autoFocus
                                        color="warning"
                                        aria-errormessage='please feild it...'
                                        required
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
                              Login
                            </Button>
                           
                        </Box>
                    </Box>
                </Container>
     
            </ThemeProvider>

        </div>
    
    </>
  )
}






