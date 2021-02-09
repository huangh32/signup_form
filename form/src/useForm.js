import {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom'

import FormSuccess from './FormSuccess';


const useForm = (validate) =>{
    const [values, setValues] = useState({
        email:'',
        selection:'',
        isSubmitting:false
    })

    const [errors, setErrors] = useState({});
    //const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('click Submit, values are: ', values);
        setErrors(validate(values));
        console.log('errors is:', Object.keys(errors).length === 0 );
        if(Object.keys(errors).length === 0 ){
            console.log('Success');
            return <Redirect to="/success"/>
        }
        

        
    };




    return {handleChange, values, handleSubmit, errors };
}

export default useForm;