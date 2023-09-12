"use client";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {FaFolder} from "react-icons/fa";
import {RiServiceLine} from "react-icons/ri";
import {NavItem} from "../../../../types";

const navItem: NavItem[] = [
  {path: "#", icon: <AiOutlineHome />},
  {path: "#about", icon: <AiOutlineUser />},
  {path: "#experience", icon: <BiBook />},
  {path: "#portfolio", icon: <FaFolder />},
  {path: "#contact", icon: <RiServiceLine />},
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {navItem.map((item) => {
        return (
          <Link
            href={item.path}
            onClick={() => setActiveNav(item.path)}
            className={`${activeNav === item.path ? "active" : ""} `}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
