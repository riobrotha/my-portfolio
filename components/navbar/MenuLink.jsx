import React from "react";
import NavLink from "../compliments/NavLink";

const MenuLink = ({ isMobile }) => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          isMobile={isMobile}
          key={link.name}
          href={link.href}
          name={link.name}
        />
      ))}
    </>
  );
};

export default MenuLink;
