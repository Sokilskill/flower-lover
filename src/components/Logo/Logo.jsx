import { Box, Image, Text } from "@chakra-ui/react";
import logo from "assets/images/logo.svg";

export function Logo({ ...rest }) {
  return (
    <Box
      as="a"
      href="/"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mb="1px"
      {...rest}
    >
      <Image
        src={logo}
        fallbackSrc="https://via.placeholder.com/150"
        alt="logo"
        width={42}
        height={39}
      />
      <Text fontFamily={"spline"} lineHeight={1.19} textTransform={"uppercase"}>
        FlowerLover
      </Text>
    </Box>
  );
}
