import React from 'react';
import './Cards.css';
import CardItem from './Carditems';

function Cards() {
  return (
    <div className='cards'>
      <h1>------START PREPARING FOR YOUR ENTRY TESTS NOW!------</h1>
      <h2>----ACE YOUR RESULTS JUST ON A CLICK----</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/etea.jpg'
              text='"PREPARE FOR YOUR NATIONAL TEST ETEA NOW!"'
              label='ETEA'
              path='/entrytest'
            />
            <CardItem
              src='images/mdcat.jpg'
              text='"PREPARE FOR YOUR NATIONAL TEST MDCAT NOW!"'
              label='MDCAT'
              path='/entrytest'
            />
            <CardItem
              src='images/ielet.jpg'
              text='"PREPARE FOR YOUR INTERNATIONAL TEST TOFEL NOW!"'
              label='TOFEL'
              path='/entrytest'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ielet.jpg'
              text='"PREPARE FOR YOUR INTERNATIONAL TEST IELET NOW!"'
              label='IELET'
              path='/entrytest'
            />
            <CardItem
              src='images/sat.jpg'
              text='"PREPARE FOR YOUR INTERNATIONAL TEST SAT NOW!"'
              label='SAT'
              path='/entrytest'
            />
            <CardItem
              src='images/signup.jpg'
              text='"SIGN UP NOW!!"'
              label='REGISTER'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;