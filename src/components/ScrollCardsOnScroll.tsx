import React from 'react'
import classNames from 'classnames'
const ScrollCardsOnScroll = () => {
  return (
    // <div className=" container my-0 mx-auto w-[90%]">
      
    //   <ul id="cards " className='pl-0 list-none grid grid-cols-1 grid-rows-4 h-[87vh] gap-[4vw] pb-[4.5em] mb-[4vw]'>
    //     <li className="card sticky top-0" id="card1">
    //       <div className="card-body bg-[#52b2cf]">
    //         <h2> Card 1</h2>
    //       </div>
    //     </li>
    //     <li className="card" id="card2">
    //       <div className="card-body bg-[#7EC4Cf]">
    //         <h2>Card 2</h2>
    //       </div>
    //     </li>
    //     <li className="card" id="card3">
    //       <div className="card-body bg-[#9cadce]">
    //         <h2>Card 3</h2>
    //       </div>
    //     </li>
    //     <li className="card" id="card4">
    //       <div className="card-body bg-[#d4afb9]">
    //         <h2>Card 4</h2>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    // className={classNames(
    //   "block w-full text-text-light outline-none text-xs px-2 3xl:h-14 3xl:text-xl 3xl:px-4",
    //   className,
    //   {
    //     ["bg-ghost-white !rounded-sm"]: variant === "primary",
    //   },
    // )}
    <>
        <div className='my-0 mx-auto w-[90%]'>
           {colors.map((color, index) => (
            <div key={index} className={`bg-[${color}] h-[87vh] w-full rounded-[50px] sticky top-4`}></div>
             ))}
    </div>

    </>
  )
}

export default ScrollCardsOnScroll

const colors = ['#52b2cf', '#7EC4Cf', '#9cadce', '#d4afb9'];