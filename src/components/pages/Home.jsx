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
              <h1 className="Homeheading">Get an edge in Trading & </h1>
              <h1 className="Homeheading">Investing</h1>
              <ul>
                <li>
                  <p>
                    <FaCheckCircle /> Free account opening & Zero AMC
                  </p>
                </li>
                <li>
                  <p>
                    <FaCheckCircle /> Zero brokerage on equity delivery
                  </p>
                </li>
                <li>
                  <p>
                    <FaCheckCircle /> All-in-One Account (Stocks/F&O/IPO/Mutual Funds)
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
