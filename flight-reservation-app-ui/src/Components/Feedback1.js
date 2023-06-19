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
import Stack from '@mui/material/Stack';
import axios from 'axios'
import Rating from '@mui/material/Rating';
import ThumbsUpDownRoundedIcon from '@mui/icons-material/ThumbsUpDownRounded';
import SendIcon from '@mui/icons-material/Send';



const theme = createTheme();

export const Feedback1 = () => {

    let [feedbackvalue,setFeedbackValue] = useState({
        description :"",
        rating:"",
        booking_id:"1"
    });
    const handlesubmit=(event)=>{
        console.log(feedbackvalue);
       
        alert(`${feedbackvalue.description}, ${feedbackvalue.rating}, ${feedbackvalue.booking_id}`);
        event.preventDefault();
      
       
        axios.post("http://localhost:8082/feedback/addFeedback",feedbackvalue,{               
             headers: {
            "Content-Type": "application/json",
        },
        })
        .then(res=>{console.log(res.data)})
        
    }
    const handleChange = name => e => {
        setFeedbackValue({ ...feedbackvalue, [name]: e.target.value });
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
                        <ThumbsUpDownRoundedIcon sx={{ m: 1, bgcolor:'azure',width: 56, height: 56  }} color="success" >
                        <LockOutlinedIcon />
                        </ThumbsUpDownRoundedIcon>
                        <Typography component="h1" variant="h5" >
                            Feedback
                        </Typography>
                        <Box component="form" noValidate onSubmit={handlesubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleChange('description')}
                                        autoComplete="given-feedback here"
                                        name="description"
                                        required
                                        rows={10}
                                        multiline
                                        fullWidth
                                        width={300}
                                        id="description"
                                        label="Feedback Description"
                                        value={feedbackvalue.description}
                                        autoFocus
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                            <Stack spacing={1} >
                                                            <Rating value={feedbackvalue.rating}
                                                             label="Rating"
                                                             id="rating"
                                                             fullWidth
                                                             required
                                                             autoComplete="give-rating"
                                                             autoFocus
                                                             name="rating" 
                                                             defaultValue={2.5} 
                                                             precision={0.5} 
                                                             size="large" 
                                                             onChange={handleChange('rating')} />
                                            </Stack>
                                 </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                endIcon={<SendIcon />}
                            >
                              Feedback
                            </Button>
                           
                        </Box>
                    </Box>
                </Container>
     
            </ThemeProvider>

        </div>
   </>
  )
}
