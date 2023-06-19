

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { useState } from "react";




function Feedback() {
  

    let [feedbackvalue,setFeedbackValue] = useState({
        description :"",
        rating:""
    });
    const handlesubmit=(event)=>{
        console.log(feedbackvalue);
        alert(`${feedbackvalue.description}, ${feedbackvalue.rating}`);
        event.preventDefault();
      
       
        axios.post("http://localhost:8080/feedback/addFeedback",feedbackvalue,{               
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
    
        <form onSubmit={handlesubmit} >
     <div>
         <label>description :</label>
         <input name='description' value={feedbackvalue.description} onChange={handleChange('description')} ></input>
     </div>
     <div>
        <Stack spacing={1} >Rating :
        <Rating value={feedbackvalue.rating} name="rating"  defaultValue={2.5} precision={0.5} onChange={handleChange('rating')} />
        </Stack>
    </div>
     <div>
        <button type='submit'>Submit</button>
     </div>
    </form>

    
    </>
  )
}

export default Feedback 