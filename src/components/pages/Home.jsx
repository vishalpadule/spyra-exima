// import React from 'react'
import './Home.css';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { CiMobile3 } from 'react-icons/ci';

const Home = () => {
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-6">
              <img src="src/assets/Group 146697.svg" className="Group-img" alt="Trading Illustration" />
              <h1 className="Homeheading">Get an edge in <span className='spanh1'>Trading </span> &</h1>
              <h1 className="Homeheading"><span className='spanh1'>Investing</span></h1>
              <ul className='list-style'>
                <li>
                  <p>
                    <FaCheckCircle />&nbsp;<span>Free</span> account opening & <span>Zero</span> AMC
                  </p>
                </li>
                <li>
                  <p>
                    <FaCheckCircle />&nbsp;<span>Zero brokerage</span> on equity delivery
                  </p>
                </li>
                <li>
                  <p>
                    <FaCheckCircle /> &nbsp;<span>All-in-One Account</span>  (Stocks/F&O/IPO/Mutual Funds)
                  </p>
                </li>
              </ul>
              {/* Input Field and Button Side by Side */}
              <div className="input-button-container">
                <div className="input-container">
                  <CiMobile3 className="icon" />
                  <input
                    id="numberInput"
                    type="number"
                    value={number}
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                    className="input-field"
                  />
                </div>
                <button className="demat-button">Open Demat Account</button>
              </div>
              <div className="slider-container mt-4">
                <div className="slider">
                  <div className="slide">
                    <img src="\src\assets\frame_14584017.webp" alt="" className="imgstar" />
                    <span className='font'>20 Years of trust</span>
                  </div>
                  <div className="slide">
                    <img src="src/assets/star.webp" alt="" className="imgstar" />
                    <span className='font'>4.3+ app rating</span>
                  </div>
                  <div className="slide">
                    <img src="src/assets/frame_14584012.webp" alt="" className="imgstar" />
                    <span className='font'>2 Lakhs+ happy customers</span>
                  </div>
                </div>
              </div>






            </div>

            {/* Right Column */}
            <div className="col-6 d-flex justify-content-end align-items-center illustration-img">
              <img src="src/assets/illustrations.webp" className="img-fluid" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
