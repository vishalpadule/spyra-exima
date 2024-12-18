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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="count-down-wrapper">
              <div class="row">
                <div class="col-6 col-md-3">
                  <div class="single-counter">
                    <span class="counter">15</span>
                    <span>+</span>
                  </div>
                  <h3>Products</h3>
                  <p>
                    Continuously brainstorming to discover products that set new
                    benchmarks in the market.
                  </p>
                </div>

                <div class="col-6 col-md-3">
                  <div class="single-counter">
                    <span class="counter">50</span>
                    <span>+</span>
                  </div>
                  <h3>Awards</h3>
                  <p>
                    Prestigiously recognized for our humble efforts by various
                    platforms.
                  </p>
                </div>

                <div class="col-6 col-md-3">
                  <div class="single-counter">
                    <span class="counter">25</span>
                    <span>k +</span>
                  </div>
                  <h3>Happy Clients</h3>
                  <p>
                    Thankful to our every patron who choose us from the tight
                    competition.
                  </p>
                </div>

                <div class="col-6 col-md-3">
                  <div class="single-counter">
                    <span class="counter">300</span>
                    <span>+</span>
                  </div>
                  <h3>Dealers</h3>
                  <p>
                    Expanding our services and availability in different
                    locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="vision-section">
        <div class="image-side">
          <img src="src/assets/vision_image.jpg" alt="Vision Image" />
        </div>
        <div class="text-side">
          <h1>Our Vision</h1>
          <p>
            our vision is to become a global leader in the import and export
            industry, connecting markets across borders and bringing products
            that enrich lives. We are driven by a commitment to fostering
            international trade relationships and ensuring seamless and
            efficient supply chains.
          </p>
          <p>
            Our goal is to facilitate the exchange of goods, services, and ideas
            between countries, empowering businesses to expand their reach and
            access new opportunities. Through our extensive network and
            expertise in logistics, we aim to provide solutions that are not
            only reliable but also sustainable, ensuring that we contribute to
            the growth of the global economy.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
