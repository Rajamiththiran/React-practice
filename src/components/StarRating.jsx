
//? this is explain how useState hook works

// import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected= false,  }) => (
   <FaStar color={selected ? "red" : "grey"} />
  );
  

const CreateArray = length => [...Array(length)];

function StarRating({ totalStars = 5, selectedStars= 0}  ){
   return(
      <>
      {CreateArray(totalStars).map((n, i) => (
         <Star key={i} selected = {selectedStars > i}/>
         ))}

      <p>
      {selectedStars} of {totalStars} stars
      </p>
         
      </>
      )
}

  

export default StarRating;