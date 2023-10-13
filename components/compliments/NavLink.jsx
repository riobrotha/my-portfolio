import { Button, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = (props) => {
  const { href, name, isMobile, ...restProps } = props;
  const route = useRouter();
  return (
    <>
      {isMobile ? (
        <Link href={href}>
          <MenuItem {...restProps}>{name}</MenuItem>
        </Link>
      ) : (
        <Link href={href}>
          <Button
            colorScheme={route.asPath === href ? "red" : "none"}
            {...restProps}
            variant={route.asPath === href ? "solid" : "ghost"}
          >
            {name}
          </Button>
        </Link>
      )}
    </>
  );
};

export default NavLink;
