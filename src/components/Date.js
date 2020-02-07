import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DateSelector = styled.div`
    border: 3px solid grey;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px 10px 10px 5px;
    
    h2 {
        font-size: 15px;
    }
    background: rgba(42, 42, 44, 0.856);
    box-shadow: 0 0.8px 1.2px rgba(145, 145, 145, 0.034)
  ;
`;

export default function DateForm(props){
    function handleChange(date) {
       function convertDate(date = new Date()) {
           let year = date.getFullYear();
           let month = date.getMonth() + 1;
           let day = date.getDate(); 
        
           if(month < 10) month = "0" + month;
           if(day < 10) day = "0" + day;
        
           return `${year}-${month}-${day}`;
        }
        props.setDate(convertDate(date))
    }
    return(
        <DateSelector>
        <h2>Select date of picture: <DatePicker 
        selected = {new Date(props.date)}
        onChange = {handleChange}
        /></h2>
        </DateSelector>
    )
};