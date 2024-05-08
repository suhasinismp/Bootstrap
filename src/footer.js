import React from 'react';
import './App.css';


const Footer= () =>{
  return(
    <footer className="footer">
        <div className="footer-content">
            <p> &copy; 2024 Acme Corporation</p>
            <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="./About">About Us</a></li>
                <li><a href="./Contact">Contact Us</a></li>
                <li><a href="./Gallery">Gallery</a></li>

            </ul>

        </div>

    </footer>
  );
}

export default Footer