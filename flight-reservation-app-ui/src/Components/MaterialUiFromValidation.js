import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';

export const MaterialUiFromValidation = () => {
    const[email,setEmail]=useState("");
    const handleSubmit=(event)=>{
        console.log(event);
    }

    const handleChange=(e)=>{
        setEmail(e.target.value);
    }
  return (
    <>
    <ValidatorForm
               
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
    
    
    </>
)}
