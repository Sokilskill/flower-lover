import { Flex, Heading } from "@chakra-ui/react";

export function SectionHeading({
  positionRight = true,
  children,
  psevdoElemAfter,
  ...rest
}) {
  return (
    <Flex justifyContent={positionRight ? "flex-start" : "flex-end"}>
      <Heading
        fontFamily="playfair"
        fontWeight={600}
        lineHeight={1.25}
        fontSize={{ base: "32px", lg: "36px" }}
        mb={6}
        textAlign={positionRight ? "end" : "start"}
        color="buttonAndTextColor"
        _after={{
          content: "''",
          display: "block",
          borderBottom: "1px solid ",
          borderColor: "buttonAndTextColor",
          height: "1px",
          w: { base: "350px", lg: "460px" },
          ...psevdoElemAfter,
        }}
        {...rest}
      >
        {children}
      </Heading>
    </Flex>
  );
}
