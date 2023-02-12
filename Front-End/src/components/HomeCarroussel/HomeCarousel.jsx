import Carousel from "react-bootstrap/Carousel";
import HC from "../HomeCarrousel/HomeCarousel.module.css";


function HomeCarousel() {
  return (
    <div>
      <Carousel interval={2000} pause={false} controls={false} fade indicators={false} >
        <Carousel.Item>
          <div className={HC.imageCont}>
            <img
              className={HC.image}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={HC.imageCont}>
            <img
              className={HC.image}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg"
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={HC.imageCont}>
            <img
              className={HC.image}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg"
              alt=""
            />
          </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
