import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  List,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CatalogCard } from "../Catalog/CatalogCard";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import bgImgDesk from "assets/images/catalog/bgImgDesk.png";
const filter = [
  {
    nameSelect: "Ціна",
    options: [
      { name: "<200", value: "200" },
      { name: "200-500", value: "500" },
      { name: ">1000", value: "1000" },
    ],
  },
  {
    nameSelect: "Квіти",
    options: [
      { name: "Троянда", value: "rose" },
      { name: "Еустома", value: "eustoma" },
      { name: "Хризантема", value: "chrysanthemum" },
      { name: "Лілія", value: "lily" },
      { name: "Тюльпан", value: "tulip" },
      { name: "Гортензія", value: "hydrangea" },
      { name: "Альстромерія", value: "alstroemeria" },
    ],
  },
  {
    nameSelect: "Кому",
    options: [
      { name: "Жінці", value: "women" },
      { name: "Чоловіку", value: "men" },
    ],
  },
  {
    nameSelect: "Привід",
    options: [
      { name: "День народження", value: "happyBirthday" },
      { name: "Весілля", value: "marries" },
      { name: "Кохання", value: "love" },
      { name: "Співчуваю", value: "sorry" },
    ],
  },
  {
    nameSelect: "Стиль",
    options: [
      { name: "Вільний", value: "free" },
      { name: "Каркасний", value: "skeletal" },
      { name: "В коробці", value: "boxed" },
      { name: "В кошику", value: "basket" },
      { name: "Каскадний", value: "cascading" },
    ],
  },
];

export function SectionCatalog() {
  return (
    <Box
      as="section"
      id="catalog"
      pb={{ base: 20, lg: 23 }}
      bg={{ lg: `url(${bgImgDesk}) no-repeat right top` }}
    >
      <SectionHeading>Каталог</SectionHeading>

      <Box px="20px" mx="auto">
        <Text
          fontFamily="playfair"
          fontWeight={600}
          textAlign="center"
          fontSize="24px"
          borderTopLeftRadius={4}
          borderTopRightRadius={4}
          bgColor="#B96A7F"
        >
          Доставка квітів в Києві
        </Text>
        <Filter />
      </Box>

      <Heading
        fontFamily="playfair"
        fontWeight={600}
        fontSize="28px"
        textAlign="center"
        mb="16px"
      >
        Хіт продажів
      </Heading>

      <List>
        <CatalogCard />
      </List>
    </Box>
  );
}

function  Filter() {
  const [selectedValues, setSelectedValues] = useState({});

  const handleCheckboxChange = (filterName, optionValue) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [filterName]: {
        ...prevValues[filterName],
        [optionValue]: !prevValues[filterName]?.[optionValue],
      },
    }));
  };

  const handleApplyFilter = () => {
    console.log(selectedValues);
  };
  return (
    <Flex
      direction="column"
      gap={2}
      mb={6}
      py={1}
      w="100%"
      bgColor="buttonAndTextColor"
      px={4}
      alignItems="center"
      borderBottomLeftRadius={4}
      borderBottomRightRadius={4}
    >
      {filter.map((item, i) => (
        <Menu key={i} closeOnSelect={false}>
          <MenuButton
            // outline="2px solid red"
            as={Button}
            fontSize="18px"
            fontWeight={300}
            lineHeight={1.25}
            textAlign="left"
            px="0"
            w="100%"
            h="23px"
            color="#fff"
            bgColor="inherit"
            borderBottom="1px solid #44444430"
            borderRadius="unset"
          >{`${item.nameSelect} ...`}</MenuButton>
          <MenuList color="#fff" bgColor="#ffffff9c">
            {item.options.map(({ name, value }, j) => (
              <MenuItem key={j} bgColor="inherit" mw="100%">
                <Checkbox
                  isChecked={selectedValues[item.nameSelect]?.[value]}
                  onChange={() => handleCheckboxChange(item.nameSelect, value)}
                >
                  {name}
                </Checkbox>
                <MenuDivider />
              </MenuItem>
            ))}
            <Button w="100%">Застосувати</Button>
          </MenuList>
        </Menu>
      ))}
    </Flex>
  );
}
