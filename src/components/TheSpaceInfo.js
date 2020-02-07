import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TheCards } from './TheCards';
import Date from './Date';


export default function TheSpaceInfo() {

    const [ spaceData, setSpaceData ] = useState([]);
    const [ date, setDate ] = useState("2020-02-06");


    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=3Jv7l9CiWLsS9GcVpqXRf0LlhKmT8PwlEJVofXDB&date=${date}`)
        .then(response => {
            const spaceData = response.data;
            console.log(`The Photos: ${spaceData}`);
            setSpaceData(spaceData);
        })
        .catch(error => console.log(error));
        }, [date]);
        console.log(spaceData);
        console.log(date)

        return (
            <div>
                <Date date={date} setDate={setDate}/>
               <TheCards 
            spaceData={spaceData}
            />
            </div>
        )
};






