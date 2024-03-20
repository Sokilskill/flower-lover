import { Flex, Link, ListItem, List } from "@chakra-ui/react";

export function NavBar({ listItems, linkStyle, ...rest }) {
  return (
    <Flex as="nav" alignItems="center">
      <List display={"flex"} gap={"32px"} flexDirection={"row"} {...rest}>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <Link
              href={item.to}
              fontSize="20px"
              lineHeight={1.25}
              {...linkStyle}
            >
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
