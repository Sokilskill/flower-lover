import { Flex, Link, ListItem, List } from "@chakra-ui/react";

export function NavBar({ listItems, isHorizontal = true, gap = "32px" }) {
  const flexDirection = isHorizontal ? "row" : "column";
  console.log("isHorizontal", isHorizontal);
  console.log("flexDirection", flexDirection);

  return (
    <Flex as="nav" alignItems="center">
      <List display={"flex"} gap={gap} flexDirection={flexDirection}>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.to}>{item.text}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
