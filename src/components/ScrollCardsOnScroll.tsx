import React from 'react'

const ScrollCardsOnScroll = () => {
  return (
    <div className="container">
      <ul id="cards">
        <li className="card" id="card1">
          <div className="card-body">
            <h2> Card 1</h2>
          </div>
        </li>
        <li className="card" id="card2">
          <div className="card-body">
            <h2>Card 2</h2>
          </div>
        </li>
        <li className="card" id="card3">
          <div className="card-body">
            <h2>Card 3</h2>
          </div>
        </li>
        <li className="card" id="card4">
          <div className="card-body">
            <h2>Card 4</h2>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ScrollCardsOnScroll