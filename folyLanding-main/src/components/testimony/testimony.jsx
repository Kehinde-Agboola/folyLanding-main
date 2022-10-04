import React from "react";
import "./testimony.css";

import { profile1, profile2, profile3 } from "./import";
import "./MobileTest.css";

const Testimony = () => {
  return (
    <section class="fylo__testimony">
      <div class="container">
        <div class="fylo__testimony-cards grid">
          <div
            class="fylo__testimony-card card"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div class="user">
              <img src={profile1} alt="patel" />
              <div class="user-info">
                <h4 class="name">Satish Patel</h4>
                <p class="title">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div
            class="fylo__testimony-card card"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div class="user">
              <img src={profile2} alt="bruce" />
              <div class="user-info">
                <h4 class="name">Bruce McKenzie</h4>
                <p class="title">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div
            class="fylo__testimony-card card"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div class="user">
              <img src={profile3} alt="iva" />
              <div class="user-info">
                <h4 class="name">Iva Boyd</h4>
                <p class="title">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
