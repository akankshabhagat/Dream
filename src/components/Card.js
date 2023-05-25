import React from 'react'
import Carditem from './Carditem'
import '../components/card.css';
function Card() {
  return (
    <div className='cards'>

      <h1>  Dream's await  </h1>
      <div className="cards__container">
        <div className="cars__wrapper">
          <ul className="cards__items">
            <Carditem
              src='images/car.jpg'
              text=' long ride in car on a unknown empty road'
              label='long ride'
              path='/'
            />
            <Carditem
              src='images/tibet_kailash.jpg'
              text='religion is a positive beam rather '
              label='religion'
              path='/'
            />
           <Carditem
              src='images/grass.jpg'
              text='smell of grass after rain tops everything'
              label='senses'
              path='/'
            />

          </ul>
          <ul className='cards__items'>
          <Carditem
              src='images/waterfall.jpg'
              text='no better element than water to calm you'
              label='water'
              path='/'
            />
          <Carditem
              src='images/friends.jpg'
              text='hanging out with loved ones'
              label='love'
              path='/'
            />
            <Carditem
              src='images/pasta.jpg'
              text=' food therapy'
              label='food'
              path='/'
            />

          </ul>
        </div>
      </div>

    </div>
  )
}

export default Card