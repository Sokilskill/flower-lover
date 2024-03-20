import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { headerItems } from "../../helpers/listItems";
import { NavBar } from "../NavBar/NavBar";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        icon={<RxHamburgerMenu />}
        colorScheme=""
        w="42px"
        h="42px"
        fontSize="20px"
        onClick={handleToggle}
        aria-label="Open Menu"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={handleToggle}>
        <DrawerOverlay />
        <DrawerContent bgColor="#B96A7F">
          <DrawerCloseButton mt={2} />
          <DrawerHeader borderBottomWidth="1px">Меню</DrawerHeader>
          <DrawerBody>
            <Center pt={10}>
              <NavBar
                listItems={headerItems}
                flexDirection="column"
                align="center"
              />
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
