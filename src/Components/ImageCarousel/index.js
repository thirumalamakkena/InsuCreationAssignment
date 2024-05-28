import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="zoom">
          <img
            src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716800765/t6isyzfvroryei6f6ptp.png"
            alt="screenshot"
          />
        </div>
        <div className="zoom">
          <img
            src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716800765/gfsdzhf0wnikywjac0n5.png"
            alt="screenshot"
          />
        </div>
        <div className="zoom">
          <img
            src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716800766/nokgso21coqdiyhxqcex.png"
            alt="screenshot"
          />
        </div>
        <div className="zoom">
          <img
            src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716800767/gtntmbnnsf2qv4prvd24.png"
            alt="screenshot"
          />
        </div>
        <div className="zoom">
          <img
            src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716800864/is9tr6qsx6ibv7lncvjc.png"
            alt="screenshot"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
