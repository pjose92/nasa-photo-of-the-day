import React from "react";
import "./space.css";


export const TheCards = props => {
    console.log(props.spaceData);
    // console.log(props.date);
    

  return (
    <div className="main-container">
      <div className="title-box">

          {/*this displays the title of the photo of the day  */}
        <h1 className="main-title">{props.spaceData.title}</h1>
        
      </div>
      {/* this is the imgae  */}
      <div className="image-box">
        <img
          className="img"
          alt={props.spaceData.title}
          src={props.spaceData.url}
        />
      </div>
      {/* the bottom iinfo of the photo.  */}
      <div className="info-box">
        <h2>{props.spaceData.copyright ? `This Picture Was Taken by: ${props.spaceData.copyright}` : null }</h2>

        <p>{props.spaceData.explanation}</p>

        {/* today's date will show on the bottom */}
        <div>Today's Date Is: {props.spaceData.date}</div>
      </div>
    </div>
  );
};