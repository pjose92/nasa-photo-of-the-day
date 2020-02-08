import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DateSelector = styled.div`
    border: 3px solid grey;
    width: 50%;
    margin: 30px auto;
    border-radius: 10px;
    padding: 10px;
    
    h2 {
        font-size: 25px;
    }
    background: white;
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
        <h2>Select A Date For a New Picture: <DatePicker 
        selected = {new Date(props.date)}
        onChange = {handleChange}
        /></h2>
        </DateSelector>
    )
};