import Image from "next/image";
import React from "react";

const ScrollingCard = () => {
  return (
     <>
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
      {sectionsData.map((section, index) => (
        <section key={index} className="w-full h-[100vh]  bg-cover bg-center bg-no-repeat text-white flex justify-center items-center sticky top-0">
          <Image src={section.imageUrl} height={1000} width={1000} alt="" className="h-[100vh] w-[100%] object-cover " />
          <div className="absolute h-[100%] w-[100%] left-0 top-0 z-20 flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl mb-5 ">{section.title}</h2>
            <p className="w-[700px] text-center">{section.content}</p>
          </div>
        </section>
      ))}
    </div>
    <div className=" bg-black-pearl text-white h-[70px] flex justify-center items-center">Footer</div>

  </>
  )
};

export default ScrollingCard;

const sectionsData = [
  {
    title: 'Dare to Dream. Dare to Build.',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    imageUrl: "/jocke-wulcan-KLOW1bD616Y-unsplash.jpg",
  },
  {
    title: 'Card2',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    imageUrl: "/jahanzeb-ahsan-UziXisDkH_s-unsplash.jpg",
  },
  {
    title: 'See how far you can get in just one weekend',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    imageUrl: "/fons-heijnsbroek-B-PxcH2sx5w-unsplash.jpg",
  },
  {
    title: 'Card4',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    imageUrl: "/jon-tyson-AMXJL_MvW4I-unsplash.jpg",
  },
  {
    title: 'Card5',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    imageUrl: "/client.jpg",
  },
];
