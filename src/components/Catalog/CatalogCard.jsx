import { Box, HStack, Icon, Image, ListItem, Text } from "@chakra-ui/react";
import img1 from "assets/images/catalog/image.jpg";
export function CatalogCard() {
  return (
    <ListItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      w={{ base: "240px", lg: "320px" }}
      // h={{ base: "355px", lg: "413px" }}
      borderRadius="10px "
      p={{ base: "16px", lg: "15px" }}
      pb={{ base: "6px", lg: "20px" }}
      bgColor="#fff"
      color="black"
    >
      <Box
        position="relative"
        w={{ base: "208px", lg: "290px" }}
        h={{ base: "268px", lg: "290px" }}
        pt={{ base: "28px", lg: "0" }}
        mb={{ base: "6px", lg: "15px" }}
      >
        <Image src={img1} />
        <Icon
          position="absolute"
          top="0"
          right="0"
          w="28px"
          h="28px"
          viewBox="0 0 36 32"
          color={"#fff"}
          stroke="#B02E51"
        >
          <path
            fill="currentColor"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2"
            d="M31.26 4.915c-0.766-0.766-1.676-1.375-2.677-1.789s-2.074-0.628-3.158-0.628c-1.084 0-2.157 0.214-3.158 0.628s-1.911 1.023-2.677 1.789l-1.59 1.59-1.59-1.59c-1.548-1.548-3.646-2.417-5.835-2.417s-4.287 0.869-5.835 2.417c-1.548 1.548-2.417 3.646-2.417 5.835s0.869 4.287 2.417 5.835l13.26 13.26 13.26-13.26c0.766-0.766 1.374-1.676 1.789-2.677s0.628-2.074 0.628-3.158-0.213-2.157-0.628-3.158c-0.415-1.001-1.023-1.911-1.789-2.677z"
          />
        </Icon>
        <Box
          position={{ base: "static", lg: "absolute" }}
          bottom="46px"
          left="102px"
          borderRadius={{ base: "22px", lg: "10px" }}
          borderColor="white"
          bgColor="buttonAndTextColor"
          border="1px solid white"
          py={{ base: "12px", lg: "6px" }}
          px="20px"
        >
          <Text
            fontWeight={{ base: 600, lg: 400 }}
            lineHeight={1.25}
            fontSize={{ base: "12px", lg: "15px" }}
            color="white"
            textAlign="center"
          >
            Акція
          </Text>
        </Box>
      </Box>

      <HStack spacing="10px" mb="10px">
        <Text
          fontWeight={{ base: 300, lg: 400 }}
          fontSize={{ base: "24px", lg: "34px" }}
        >
          500 ₴
        </Text>
        <Box
          as="span"
          fontSize={{ base: "14px", lg: "20px" }}
          textDecorationLine={"line-through"}
        >
          700 ₴
        </Box>
      </HStack>

      <Text fontWeight={300} fontSize={{ base: "14px", lg: "16px" }}>
        Мінібукет 1400-2
      </Text>
    </ListItem>
  );
}
