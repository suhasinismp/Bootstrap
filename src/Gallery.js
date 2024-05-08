import React from 'react';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image1.jpg';
import Image5 from './images/image2.jpg';
import Image6 from './images/image3.jpg';
import Image7 from './images/image1.jpg';
import Image8 from './images/image2.jpg';
import Image9 from './images/image3.jpg';
import Image10 from './images/image1.jpg';
import Image11 from './images/image2.jpg';
import Image12 from './images/image3.jpg';

function Gallery(){
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12];
  return (
    <div className='container'>
     <div className='row'>
{images.map((imageUrl, index) => (
  <div key={index} className='col-md-3 mb-3'>
    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={'Image ${index+1}'} className='img-fluid'/>
      </a>
      </div>
      ))}  
    </div>
    </div>
  );
}

export default Gallery;
