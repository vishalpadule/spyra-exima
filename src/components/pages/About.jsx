import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="wrapper">
        <div className="testimonials">
          <article>
            <h1>About Us</h1>
            <img
              src="src/assets/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
              alt=""
            />
            <blockquote>
              At Spyra Exim, we are dedicated to bridging the global market by
              facilitating seamless import and export services. With years of
              expertise in international trade, we specialize in delivering
              high-quality products to clients worldwide.
            </blockquote>
            <h5>Connecting Global Markets, Delivering Seamless Trade</h5>
            <p>
              Our commitment is to ensure that every transaction is smooth,
              efficient, and tailored to meet the unique needs of our customers.
              Whether you're sourcing goods from abroad or expanding your market
              reach, Spyra Exim offers reliable, timely solutions backed by a
              strong network of partners and a deep understanding of global
              logistics. We strive to connect businesses across borders,
              fostering growth and success in the international marketplace.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;
