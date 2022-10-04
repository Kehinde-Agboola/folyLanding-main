import React from "react";
import "./product.css";
import productImage from "../../assets/illustration-stay-productive.png";
import "./productMobile.css";

const Product = () => {
  return (
    <div className="test">
      <div class="product__section ">
        <div
          class="fylo__product-img"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={productImage} />
        </div>
        <div
          class="fylo__product-content"
          alt="fylo__product"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 class="lg">Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#">
            See how Fylo works <i class="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
