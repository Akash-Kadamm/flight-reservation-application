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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SendIcon from '@mui/icons-material/Send';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios"
//import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Signup(classes) {

   
   const [user,setUser]=useState({
    name:"",
    contact:"",
    email:"",
    password:""


})

const handleChange = name => e => {
    setUser({ ...user, [name]: e.target.value });
};



    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(user)
       
      
    };

    return (
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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange('name')}
                                        autoComplete="given-name"
                                         name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="name"
                                        value={user.name}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleChange('contact')}
                                        required
                                        fullWidth
                                        name="Contact"
                                        label="Contact"
                                        type="Contact"
                                        id="Contact"
                                        autoFocus
                                        value={user.contact}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField  
                                    onChange={handleChange('email')}
                                        required    
                                        fullWidth   
                                        id="email"  
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={user.email}
                                        
                                    />
                                </Grid>

                                  

                            

                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleChange('password')}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={user.password}
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
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Link href="http://localhost:3000/sign-in" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
     
            </ThemeProvider>

        </div>
    )
}

export default Signup;
