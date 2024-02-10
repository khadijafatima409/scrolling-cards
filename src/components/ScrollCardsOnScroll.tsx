import React from 'react'
import classNames from 'classnames'
const ScrollCardsOnScroll = () => {
  return (

    <div className="container mx-auto w-[90%]">
      <ul className="list-none grid grid-cols-1 grid-rows-4 gap-4vw pb-4">
        {cardsData.map((card, index) => (
          <li key={index} className="sticky top-0" style={{ paddingTop: `${card.padding}px` }}>
            <div
              className={`bg-[${card.bgColor}] p-7 h-[85vh] flex justify-center items-center rounded-[50px]`}
            >
              <h2 className="text-5xl font-bold">{card.text}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScrollCardsOnScroll

const cardsData = [
  { bgColor: '#52b2cf', padding: 10, text: 'Card 1' },
  { bgColor: '#7EC4Cf', padding: 40, text: 'Card 2' },
  { bgColor: '#9cadce', padding: 80, text: 'Card 3' },
  { bgColor: '#d4afb9', padding: 120, text: 'Card 4' },
];