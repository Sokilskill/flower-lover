import { Box } from "@chakra-ui/react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ImageSlider } from "../Swiper/ImageSlider";

import bgImage from "assets/images/clients/bg-clients-mob.png";
import img1Mob from "assets/images/clients/img1mob.jpg";
import img2Mob from "assets/images/clients/img2mob.jpg";
import img3Mob from "assets/images/clients/img3mob.jpg";
import img4Mob from "assets/images/clients/img4mob.jpg";

const images = [img1Mob, img2Mob, img3Mob, img4Mob];
export function SectionClients() {
  return (
    <Box
      as="section"
      id="reviews"
      pb={{ base: "240px" }}
      bgImg={bgImage}
      bgRepeat="no-repeat"
      bgPosition={{ base: "center 130px " }}
      bgSize="560px 320px"
    >
      <SectionHeading positionRight={false}>Наші Клієнти</SectionHeading>

      <ImageSlider images={images} />
    </Box>
  );
}
