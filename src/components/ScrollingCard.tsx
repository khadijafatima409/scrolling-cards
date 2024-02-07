import React from "react";

const ScrollingCard = () => {
  return( <>

    <div className="header">Header</div>
   <div>
   <div  className="card">Card1</div>
    <div  className="card">
      <img src="https://source.unsplash.com/random/1000x1000" alt=""  />
        <div className="card-content">
        Card2
        </div>
    </div>
    <div  className="card">Card3</div>
    <div className="card" >Card4</div>
    <div  className="card">Card5</div>
   </div>
    <div className="footer">Footer</div>

  </>)
};

export default ScrollingCard;
