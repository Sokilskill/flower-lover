import { Box, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import img1Mob from "assets/images/quality/img1Mob.jpg";
import img2Mob from "assets/images/quality/img2Mob.jpg";
import img3Mob from "assets/images/quality/img3Mob.jpg";
import img1Desk from "assets/images/quality/img1Desk.jpg";
import img2Desk from "assets/images/quality/img2Desk.jpg";
import img3Desk from "assets/images/quality/img3Desk.jpg";

export function SectionExploringQuality() {
  return (
    <Box as="section" pb={{ base: "80px", lg: "132px" }}>
      <SectionHeading positionRight={false} mb="140px">
        Якість в деталях
      </SectionHeading>
      <List
        display="flex"
        flexDirection="column"
        gap={{ base: 4, lg: 0 }}
        mx={{ base: "16px", lg: "64px" }}
      >
        {qualityCards.map((card, index) => (
          <CardQuality key={index} {...card} />
        ))}
      </List>
    </Box>
  );
}

const qualityCards = [
  {
    imgMob: img1Mob,
    imgDesk: img1Desk,
    heading: "Контроль свіжості квітів",
    children: (
      <>
        <Text>
          Ми співпрацюємо з кращими постачальниками квітів і готові
          запропонувати Вам{" "}
          <Text as="span" color="white">
            широкий асортимент квітів
          </Text>
          , починаючи від місцевих сортів і закінчуючи рідкісними імпортованими
          варіантами.
        </Text>
        <Text>
          Ваша близька людина отримає найкращий подарунок, адже ми ретельно
          підбираємо кожну квітку для вашого букету.
        </Text>
      </>
    ),
  },
  {
    imgMob: img2Mob,
    imgDesk: img2Desk,
    heading: "Оформлення букетів",
    children: (
      <Text>
        Ми готові зібрати{" "}
        <Text as="span" color="white">
          унікальний букет по індивідуальному замовленню
        </Text>
        . Наші флористи втілять в життя будь яку Вашу ідею!
      </Text>
    ),
  },
  {
    imgMob: img3Mob,
    imgDesk: img3Desk,
    heading: "Швидка доставка",
    children: (
      <Text>
        Ми робимо доставки по Україні протягом{" "}
        <Text as="span" color="white">
          3-х годин
        </Text>{" "}
        з моменту оплати замовлення.
      </Text>
    ),
  },
];

export function CardQuality({ imgMob, imgDesk, heading, children }) {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <ListItem
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 2, lg: "100px" }}
      w={{ base: "342px", lg: "100%" }}
      lineHeight={1.25}
      _even={{
        ml: { base: "auto", lg: "unset" },
        flexDirection: { lg: "row-reverse" },
      }}
    >
      <Image
        src={isMobile ? imgMob : imgDesk}
        borderRadius="15px"
        width={{ lg: "660px" }}
        height={{ base: "200px", lg: "467px" }}
      />
      <Box
        mt={{ lg: "120px" }}
        maxW={{ lg: "535px" }}
        textTransform={isMobile ? "capitalize" : "none"}
        fontSize={{ base: "12px", lg: "20px" }}
        fontWeight={300}
        color="whiteAlpha.700"
      >
        <Heading
          as="h3"
          fontSize={{ base: "24px", lg: "32px" }}
          mb={{ lg: "16px" }}
          color="white"
        >
          {heading}
        </Heading>
        {children}
      </Box>
    </ListItem>
  );
}
