import Image from "next/image";
import React from "react";

const ScrollingCard = () => {
  return( <>

    <div className="bg-black-pearl text-white h-[70px] flex justify-around gap-28 items-center ">
      <div >
        <Image src="/logo.png" alt="" height={100} width={100}/>
      </div>
      <ul className="flex gap-5 text-lg">
        <li>builds</li>
        <li>n&w</li>
        <li>join </li>
      </ul>
      <button className="bg-white rounded-full py-3 px-5 text-base font-bold outline-none text-black">Start</button>
    </div>
   <div>
   <section className=" w-full h-[100vh] bg-[url('/jocke-wulcan-KLOW1bD616Y-unsplash.jpg')] bg-cover bg-center bg-no-repeat  text-white flex justify-center items-center sticky top-0">
        <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl mb-5 ">Dare to Dream</h2>
          <p className="w-[700px] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laudantium, aliquam deleniti consectetur dicta id vitae unde rerum architecto repellat dolores quam obcaecati non magni nemo voluptatibus soluta vel tempore!</p>
        </div>
   </section>
    <section  className=" w-full h-[100vh] bg-[url('/jahanzeb-ahsan-UziXisDkH_s-unsplash.jpg')] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center sticky top-0">  
        <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl mb-5 ">Card2</h2>
        <p className="w-[700px] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laudantium, aliquam deleniti consectetur dicta id vitae unde rerum architecto repellat dolores quam obcaecati non magni nemo voluptatibus soluta vel tempore!</p>
        </div>
    </section>
    <section  className=" w-full h-[100vh] bg-[url('/fons-heijnsbroek-B-PxcH2sx5w-unsplash.jpg')] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center sticky top-0">   
        <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
        Card3
        </div>
    </section>
    <section className="w-full h-[100vh] bg-[url('/jon-tyson-AMXJL_MvW4I-unsplash.jpg')] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center sticky top-0" >
        <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
        Card4
        </div>
    </section>
    <section  className=" w-full h-[100vh] bg-[url('/fons-heijnsbroek-B-PxcH2sx5w-unsplash.jpg')] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center sticky top-0">
        <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
        Card5
        </div>
    </section>
   </div>
    <div className=" bg-black-pearl text-white h-[70px] flex justify-center items-center">Footer</div>

  </>)
};

export default ScrollingCard;
