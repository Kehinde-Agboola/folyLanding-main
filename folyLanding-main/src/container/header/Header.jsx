import "./Header.css";
import illustration from "../../assets/illustration-intro.png";
import "./headerMobile.css";

const Header = () => {
  return (
    <div className="fylo__header">
      <div class="fylo">
        <div
          class="fylo-img"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={illustration} alt="fylo image" class="fylo-img" />
        </div>
        <div class="fylo__content">
          <h1
            class="text-light md"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            All your files in one secure location, accessible anywhere.
          </h1>
          <p data-aos="fade-up" data-aos-delay="120">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button
            class="btn"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
