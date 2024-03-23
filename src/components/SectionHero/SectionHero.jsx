import { Box, Heading, Icon, List, Show, Text, VStack } from "@chakra-ui/react";

import { GiShutRose } from "react-icons/gi";
import { PiMapPinLine } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";

import heroMobBgImg from "assets/images/hero-mobile.png";
import heroDeskBgImg from "assets/images/hero-desk.png";
import circleImg from "assets/images/circle.png";

export function SectionHero() {
  return (
    <Box
      as="section"
      pt={{ base: "374px", lg: "70px" }}
      pb={{ base: "96px", lg: "50px" }}
      // background: bg-color bg-image bg-position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit|unset;
      bg={{
        base: `url(${heroMobBgImg}) 24px top no-repeat`,
        lg: `url(${heroDeskBgImg}) 100% 100px / 768px 640px no-repeat , url(${circleImg}) calc(100% - 328px) 272px / 486px 482px no-repeat`,
      }}
    >
      <VStack
        px={{ base: "15px", lg: "64px" }}
        py={{ base: "40px", lg: "unset" }}
        bgColor={{ base: "whiteAlpha.600", lg: "unset" }}
        spacing={[4, 4, 0]}
        align="flex-start"
      >
        <Text
          fontFamily={"playfair"}
          fontWeight={500}
          lineHeight={{ base: 1.33, lg: 1.25 }}
          fontStyle="italic"
          fontSize={{ base: "24px", lg: "48px" }}
          color="buttonAndTextColor"
          mb={{ lg: 3 }}
        >
          Неймовірні
        </Text>
        <Box display={"flex"} alignItems="baseline">
          <Heading
            as="h1"
            fontFamily="playfair"
            fontWeight={400}
            fontSize={{ base: "40px", lg: "86px" }}
            fontStyle="normal"
            lineHeight={{ base: "1", lg: "0.7" }}
            ml={{ base: "8px", lg: "110px" }}
            mr={{ base: "4px", lg: "23px" }}
            color="mainText"
          >
            БУКЕТИ
          </Heading>
          <Text
            fontFamily="playfair"
            fontWeight={500}
            lineHeight={{ base: 1.33, lg: 1.25 }}
            letterSpacing={0}
            fontStyle="italic"
            fontSize={{ base: "24px", lg: "48px" }}
            color="buttonAndTextColor"
          >
            зі свіжих квітів
          </Text>
        </Box>

        <Show above="lg">
          <Text
            textTransform="capitalize"
            lineHeight="shorter"
            fontSize="24px"
            mt={6}
            ml={{ lg: "110px" }}
          >
            З доставкою по Києву протягом 1 години
          </Text>
        </Show>

        <Box
          as="button"
          type="button"
          fontFamily="body"
          fontWeight={400}
          fontSize={{ base: "1.125em", lg: "1.5em" }}
          lineHeight={1.25}
          py={4}
          w={{ base: "100%", md: "unset" }}
          px={{ md: "110px", lg: "126px" }}
          mx={{ base: "auto", lg: "110px" }}
          mt={{ base: "16px", lg: "42px" }}
          borderRadius="15px"
          color="mainText"
          bgColor="buttonAndTextColor"
          textTransform={"uppercase"}
          _hover={{ bgColor: "pink.700" }}
        >
          Замовити квіти
        </Box>
      </VStack>

      <List
        display="flex"
        gap={{ base: 10, lg: "124px" }}
        px={{ base: "33px", lg: "72px" }}
        mt={{ base: "40px", lg: "437px" }}
        mx={{ lg: "auto" }}
        justifyContent="center"
        alignItems="center"
      >
        <Info
          icon={GiShutRose}
          desktopText="Щоденне оновлення свіжих квітів"
          mobileText="Щоденне оновлення"
        />
        <Info
          icon={PiMapPinLine}
          desktopText="Безкоштовна доставка в будь яку точку міста"
          mobileText="Безкоштовна доставка"
        />
        <Info
          icon={IoEarthOutline}
          desktopText="Більше 1000 сортів квітів з усього світу"
          mobileText="Більше 1000 сортів квітів"
        />
      </List>
    </Box>
  );
}

function Info({ icon, desktopText, mobileText }) {
  return (
    <VStack as="li" spacing="2px" w={{ lg: "215px" }}>
      <Icon as={icon} boxSize={{ base: 6, lg: 10 }} />
      <Text
        fontSize="12px"
        lineHeight={1.25}
        color="white"
        textAlign="center"
        display={{ base: "block", lg: "none" }}
      >
        {mobileText}
      </Text>
      <Text
        fontSize="16px"
        lineHeight={1.25}
        color="white"
        textAlign="center"
        display={{ base: "none", lg: "block" }}
      >
        {desktopText}
      </Text>
    </VStack>
  );
}
