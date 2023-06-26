import React from "react";
import Color from "./color";

function Colorlist({colors = [], onRemoveColor = f => f}){
   if(!colors.length) return <div>no colors listed (add any color)</div>;
   return(
      <div>
         {
            colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor}/>)
         }
      </div>
      )

}



export default Colorlist;