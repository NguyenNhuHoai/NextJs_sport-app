import React from "react";
import { Star } from "lucide-react";
const Rating = ({ numberStar }) => {
  const star = [];

  for (let i = 0; i < 5; i++) {
    if (i< numberStar) {
        star.push(<Star color="yellow" key={i} />);
      
    }else{
        star.push(  <Star color="black" key={i}/>)
    }
  }
  return (
    <div className="flex justify-start items-center my-2">
     {star}
    </div>
  );
};

export default Rating;
