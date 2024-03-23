import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function ImageSlider({ images }) {
  return (
    <Swiper
      id="swiper-1"
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView="auto"
      centeredSlides={true}
      loop={true}
      // navigation={true}
      breakpoints={{
        // when window width is >= 320px
        320: {
          spaceBetween: -32,
        },
        // when window width is >= 1000px
        1000: {
          spaceBetween: 18,
          slidesPerView: 4,
          coverflowEffect: { modifier: 0 },
        },
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index}`}
            width="100%"
            display="block"
            height="100%"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
