import React from 'react';
import cake from '../media/hmc.jpg';
import bd from '../media/hhmc.jfif';
import wed from '../media/hhm.jpg';
import rainbow from '../media/rainb.jpg';

import {Link} from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' >
      <div className='head' style={ {backgroundImage: `url(${cake})`} }>
        <h1> Odidafinebakery.org </h1>
        <p>Fine Cake baked with love </p>
        
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>

      <div className='cakes'>
        <div className='cake'>
          <img src={bd} />
          <p>Birthday cakes</p>
        </div>
        <div className='cake'>
          <img src={wed} />
          <p>Wedding cake</p>
          
        </div>
        <div className='cake'>
          <img src={rainbow} />
          <p>All types</p>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Home;
