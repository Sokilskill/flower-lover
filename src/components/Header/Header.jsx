import { Container, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "../NavBar/NavBar";

import { headerItems } from "../../helpers/listItems";
import { Logo } from "../Logo/Logo";
import { MobMenu } from "./MobMenu/MobMenu";

export default function Header() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <header id="header">
      <Container
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        pt="24px"
        pb={{ base: 0, lg: "24px" }}
      >
        <Logo />
        {isDesktop ? <NavBar listItems={headerItems} /> : <MobMenu />}
      </Container>
    </header>
  );
}
