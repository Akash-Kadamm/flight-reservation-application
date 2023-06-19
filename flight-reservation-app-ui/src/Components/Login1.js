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
import ArchiveIcon from '@mui/icons-material/Archive';
import { pink } from '@mui/material/colors';
import { useForm } from "react-hook-form";
import LoginIcon from '@mui/icons-material/Login';
import SendIcon from '@mui/icons-material/Send';
import 'bootstrap/dist/css/bootstrap.min.css';


const theme = createTheme();

export const Login1 = () => {



    const { register, handleSubmit,formState: { errors } } = useForm();
     
    const onSubmit = (data) => {
        alert(`${data.email}, ${data.password}`);
      console.log(data);
      
      axios.post("http://localhost:8082/user/loginCheckByPassword",data,{               
        headers: {
       "Content-Type": "application/json",
   },
   })
   .then(res=>{console.log(res.data)})


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
                        <LoginIcon sx={{ m: 1, bgcolor:'azure',width: 56, height: 56, color: pink[500]  }}>
                        <LockOutlinedIcon />
                        </LoginIcon>
                       
                        <Typography component="h1" variant="h5" >
                           LOGIN
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                 <label>Email :</label>
                                    <input
                                        type="text"
                                        name="email"
                                    {...register('email',{
                                        required: true,
                                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                        })}
                                    />
                                    {errors.email && errors.email.type === "required" && (
                                        <p className="text-danger errorMsg" >Email is required.</p>
                                    )}
                                    {errors.email && errors.email.type === "pattern" && (
                                        <p className="text-danger errorMsg">Email is not valid.</p>
                                    )}
                                 </Grid>
                                 <Grid item xs={12}>
                                  <label>Password :</label>
                                    <input
                                        type="password"
                                        name="password"
                                        {...register('password',{ required: true, minLength: 6 })}
                                    />
                                    {errors.password && errors.password.type === "required" && (
                                        <p className="text-danger errorMsg">Password is required.</p>
                                    )}
                                    {errors.password && errors.password.type === "minLength" && (
                                        <p className="text-danger errorMsg">
                                        Password should be at-least 6 characters.
                                        </p>
                                    )}
                                 </Grid>
                              
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                endIcon={<SendIcon />}
                            >
                              LOGIN
                            </Button>
                           
                        </Box>
                    </Box>
                </Container>
     
            </ThemeProvider>

        </div>
    
    
    
    </>
  )
}
