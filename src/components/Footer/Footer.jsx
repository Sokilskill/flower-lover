import {
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Logo } from "../../components/Logo/Logo";
import { footerItems } from "../../helpers/listItems";
import {
  IconPhone,
  IconFacebook,
  IconInstagram,
} from "../../assets/images/icons/socIcons";

export function Footer() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <footer>
      <Container pt={8} pb={10}>
        <Flex justifyContent={"space-between"} alignItems="flex-start" mb={4}>
          <NavBar
            listItems={footerItems}
            flexDirection="column"
            gap={{ base: "4px", lg: "32px" }}
            linkStyle={{ fontSize: { base: "12px", lg: "20px" } }}
            mr="70px"
          />

          <Address />
        </Flex>

        <Flex justifyContent={"space-between"} alignItems="center">
          <Logo />
          <SocialMediaIcons />
        </Flex>
      </Container>
    </footer>
  );
}

const socialMediaLinks = [
  {
    href: "tel:380977775577",
    icon: <IconPhone />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <IconInstagram />,
  },
  {
    href: "https://www.facebook.com/",
    icon: <IconFacebook />,
  },
];

export function SocialMediaIcons() {
  return (
    <Flex gap="10px">
      {socialMediaLinks.map((link, index) => (
        <IconButton
          key={index}
          as="a"
          href={link.href}
          icon={link.icon}
          bgColor="inherit"
          cursor="pointer"
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </Flex>
  );
}

function Address() {
  return (
    <VStack
      as="address"
      id="contact"
      fontSize="14px"
      spacing="8px"
      fontStyle={"normal"}
      textAlign={"center"}
    >
      <Link href="tel:380977775577">
        +38097 777 55 77
        <Text>Наш телефон</Text>
      </Link>

      <Link href="mailto:info@floverlover.ua">
        info@floverlover.ua
        <Text>Контактний e-mail</Text>
      </Link>
      <Link
        href="https://www.google.com/maps?q=вул.Маріупольська,14,Київ"
        target="_blank"
        rel="noopener noreferrer"
        textAlign={"center"}
      >
        Київ <br />
        Вул. Маріупольська, 14.
        <Text>Наш магазин</Text>
      </Link>
    </VStack>
  );
}
