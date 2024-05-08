import React, { useEffect, useState } from 'react';
import Image1 from './images/img_mountains_wide.jpg';
import Image2 from './images/img_nature_wide.jpg';
import Image3 from './images/img_snow_wide.jpg';
import './App.css';



const Slider = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);


useEffect(() =>{
  const interval = setInterval(()=>{
    setCurrentSlide((prevSlide) => (prevSlide +1) % slides.length);
  }, 2000);
  return () => clearInterval(interval);
}, [slides.length]);


const handleDotClick = (index) => {

  setCurrentSlide(index);
};

return(
  <div className='slider'>
    {slides.map((slide, index) =>(
    <div key = {index} className={index === currentSlide ? 'slide active' : 'slide'}>
      <img src = {slide} alt = {`Slide $ {index +1}`}/>

    </div>))}

    <div className='dots'>
      {slides.map((_, index) =>(
        <button key={index} className={index === currentSlide ? 'dot active' : 'dot'}
        onClick={() => handleDotClick(index)}></button>
      ))}

    </div>

  </div>
);

};

const Home =() => {
  const slides = [Image1, Image2, Image3];

  return(
    <div className='container'>
      <div className = 'row'>
      <div className = 'col'>
        <Slider slides={slides}/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
    </div>
    </div>
  );
}



export default Home;
