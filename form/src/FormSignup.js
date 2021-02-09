import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useForm from './useForm';
import validate from './validateInfo';

const FormSignup =({submitForm})=>{
    const {handleChange, values, handleSubmit, errors } = useForm(validate,submitForm);
    return(
        <div className='form-content'>
            <form className='form' >
                <p className='Paragraph' style={{ "font-family": 'Merriweather',
                    "font-style":"normal", "font-size": "20px"}}>
                    Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.
                </p>
                <Grid container spacing = {2}>
                    <Grid item xs={12} sm={6} className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            <input 
                            type='text'
                            id = 'email'
                            name='email'
                            className = 'inputfield'
                            placeholder='Your Email Address*'
                            style={{ "font-family":"Merriweather",
                            "font-style": "italic",
                            "font-size": "16px",
                            width : "60%"}}
                            value = {values.email}
                            onChange = {handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={6} className='form-inputs'>
                        <select  name='selection' style={{ "font-family":"Merriweather",
                            "font-style": "italic",
                            "font-size": "16px",
                            width : "60%",
                            
                            }}
                        value = {values.selection}
                        onChange = {handleChange}>
                        <option value = "" selected disabled hidden>Your Interests</option>
                        <option value="Development">Development</option>
                        <option value="Management">Management</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        </select>
                    </Grid>
                    <Grid item xs = {12}>
                        <Button onClick = {handleSubmit} id = 'button' style={{"background-color": '#D02035', "color":'white', "height":'70%', "width":'70%'}}>Sign Up Now</Button>

                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default FormSignup;