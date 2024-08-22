import React from "react";

export const ColorBox = ({color}) => {
   return ( 
    <span
      style={{
        backgroundColor: color,
        borderRadius: '9px',
        width: '6rem',
        height: '2rem',
        display: "inline-block",
      }}>
    </span>
    );
}