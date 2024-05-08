import React from 'react';
import './App.css';

function AboutUs({text, image})
 {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-6'>
        <h2> About the Company</h2>
        <p>{text}</p>
      </div>
      <div className='col-md-6'>
        <img src = {image} alt = "Right Section" className='img-fluid'/>
      </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
