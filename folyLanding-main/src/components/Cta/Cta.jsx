import React from "react";
import "./cta.css";
import "./ctaMobile.css";

const Cta = () => {
  return (
    <div class="cta">
      <div
        class="cta-container"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h2 data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
          Get early access today
        </h2>
        <p data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            id="email"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          />
          <input
            type="submit"
            class="btn"
            value="Get Started For Free"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          />
        </form>
      </div>
    </div>
  );
};

export default Cta;
