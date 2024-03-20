import { Flex, IconButton } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

export function MobMenu() {
  return (
    <Flex alignItems="center" gap={4}>
      <IconButton
        as="a"
        href="#catalog"
        icon={<FiSearch />}
        aria-label="Search"
        w="42px"
        h="42px"
        colorScheme=""
        bg={"inherit"}
        fontSize="20px"
      />
      <BurgerMenu />
    </Flex>
  );
}
