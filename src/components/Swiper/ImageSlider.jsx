import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
import "swiper/css/bundle";

export function ImageSlider({ images }) {
  return (
    <Swiper
      id="swiper-1"
      slidesPerView={"3"}
      spaceBetween="-32px"
      centeredSlides={true}
      loop={true}
      style={{ width: "516px", height: "264px" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
