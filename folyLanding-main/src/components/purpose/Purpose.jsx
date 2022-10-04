import React from "react";
import "./purpose.css";
import {
  iconAccess,
  iconSecurity,
  iconCollaboration,
  iconFile,
} from "./import.js";

import "./purposeMobile.css";

const Purpose = () => {
  return (
    <section class="foyl ">
      <div class="foyl-items">
        <div
          class="foyl__single"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img
            src={iconAccess}
            alt="icon-access-anywhere"
            class="feature-img"
          />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div
          class="foyl__single"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img
            src={iconSecurity}
            alt="icon-access-anywhere"
            class="feature-img"
          />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security foyl we allow to help secure your files.
          </p>
        </div>

        <div
          class="foyl__single"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img
            src={iconCollaboration}
            alt="icon-access-anywhere"
            class="feature-img"
          />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div
          class="foyl__single"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={iconFile} alt="icon-access-anywhere" class="feature-img" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
