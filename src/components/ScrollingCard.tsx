import React from "react";

const ScrollingCard = () => {
  return( <>

    <div className="header">Header</div>
   <div>
   <div  className="card">
   <img src="/jon-tyson-AMXJL_MvW4I-unsplash.jpg" alt=""  />
        <div className="card-content">
        Card1
        </div>
   </div>
    <div  className="card">
      <img src="/jahanzeb-ahsan-UziXisDkH_s-unsplash.jpg" alt=""  />
        <div className="card-content ">
        <h2 className="font-bold text-3xl mb-5 ">Card2</h2>
        <p className="w-[700px] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laudantium, aliquam deleniti consectetur dicta id vitae unde rerum architecto repellat dolores quam obcaecati non magni nemo voluptatibus soluta vel tempore!</p>
        </div>
    </div>
    <div  className="card">
       <img src="/averie-woodard-5d20kdvFCfA-unsplash (1).jpg" alt=""  />
        <div className="card-content">
        Card3
        </div>
    </div>
    <div className="card" >
    <img src="/jon-tyson-AMXJL_MvW4I-unsplash.jpg" alt=""  />
        <div className="card-content">
        Card4
        </div>
    </div>
    <div  className="card">
    <img src="/fons-heijnsbroek-B-PxcH2sx5w-unsplash.jpg" alt=""  />
        <div className="card-content">
        Card5
        </div>
    </div>
   </div>
    <div className="footer">Footer</div>

  </>)
};

export default ScrollingCard;
