import { Container, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "../NavBar/NavBar";

import { headerItems } from "../../listItem/headerItems";
import { Logo } from "../Logo/Logo";
import { MobMenu } from "./MobMenu/MobMenu";

export default function Header() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <header>
      <Container
        display="flex"
        justifyContent={"space-between"}
        alignContent="center"
        px={{ base: "33px", lg: "72px" }}
        maxW="100%"
      >
        <Logo />
        {isDesktop ? <NavBar listItems={headerItems} /> : <MobMenu />}
      </Container>
    </header>
  );
}
