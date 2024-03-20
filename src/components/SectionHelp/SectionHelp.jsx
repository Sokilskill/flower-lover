import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function SectionHelp() {
  return (
    <Box as="section" id="how-to-order" pb="80px">
      <SectionHeading
        psevdoElemAfter={{
          ml: { base: "-16px", lg: "-70px" },
          w: { lg: "823px" },
        }}
        textAlign="start"
        ml={{ base: "16px", lg: "70px" }}
        w={{ base: "278px", lg: "unset" }}
      >
        Не можете визначитись з вибором букету?
      </SectionHeading>

      <Flex
        direction="column"
        gap={6}
        p={4}
        bgColor="#b96a7fa8"
        lineHeight={1.25}
      >
        <Box fontSize="24px" w="261px">
          <Text fontWeight={600}>Відправте заявку </Text>
          <Text fontWeight={400} color="whiteAlpha.700">
            і Вам зателефонують протягом однієї хвилини
          </Text>
        </Box>

        <form>
          <Input py="23px" pl="16px" mb={1} placeholder="Ім’я" />
          <Input py="23px" pl="16px" mb={6} placeholder="Телефон" />
          <Button w="100%" py="16px" color="white" bgColor="buttonAndTextColor">
            Залишити заявку
          </Button>
        </form>

        <Text fontSize="24px" textAlign="end">
          Наш менеджер по телефону:
        </Text>

        <VStack as="ul" gap={4} align="flex-start">
          <Item headText="Відповість" subText="на будь які запитання" />

          <Item
            headText="Підбере рішення"
            subText="відповідно до ваших запитів та бажань"
          />
          <Item
            headText="Підготує унікальну пропозицію"
            subText="та детально розповість Вам про наші
            букети"
          />
          <Item headText="Оформить" subText="для Вас подарунок-сюрприз" />
        </VStack>
      </Flex>
    </Box>
  );
}

export function Item({ headText, subText }) {
  return (
    <HStack gap={8}>
      <Icon viewBox="0 0 40 40" w="40px" h="40px">
        <path
          d="M16.4332 29.9998C16.2047 29.9991 15.9788 29.9514 15.7695 29.8596C15.5602 29.7679 15.372 29.6341 15.2166 29.4665L7.11657 20.8498C6.81378 20.5272 6.65157 20.0974 6.66564 19.6552C6.6797 19.2129 6.86889 18.7943 7.19157 18.4915C7.51425 18.1887 7.94399 18.0265 8.38627 18.0406C8.82854 18.0547 9.24711 18.2438 9.5499 18.5665L16.4166 25.8832L30.4332 10.5499C30.5755 10.3727 30.7524 10.2265 30.9532 10.1203C31.154 10.014 31.3744 9.94996 31.6009 9.93198C31.8273 9.91401 32.0551 9.94252 32.2701 10.0158C32.4852 10.089 32.683 10.2055 32.8514 10.3579C33.0198 10.5104 33.1552 10.6957 33.2494 10.9024C33.3436 11.1092 33.3945 11.333 33.3991 11.5601C33.4036 11.7872 33.3617 12.0129 33.2758 12.2232C33.19 12.4335 33.0621 12.6241 32.8999 12.7832L17.6666 29.4498C17.5126 29.6204 17.3251 29.7574 17.1157 29.852C16.9063 29.9467 16.6797 29.997 16.4499 29.9998H16.4332Z"
          fill="#822740"
        />
      </Icon>
      <Text fontWeight={500} fontSize="14px" color="white">
        {headText}{" "}
        <Text as="span" fontWeight={400} fontSize="12px" color="whiteAlpha.700">
          {subText}
        </Text>
      </Text>
    </HStack>
  );
}
