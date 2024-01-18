import React from "react";

import { MENU_OPTIONS } from "@/common/constants";
import NavBarItem from "./components/NavBarItem";
import { useLocation } from "react-router-dom/dist";

const NavBar = () => {
  const location = useLocation();
  const menuOptions = MENU_OPTIONS;
  return (
    <div className="flex z-30 h-screen w-24 flex-col items-center border-r border-gray-200 bg-sky-900 rounded-2xl p-16">
      <div className="flex h-20 w-20 items-center justify-center border-b border-gray-200 p-6 bg-white rounded-full ">
        <img
          alt="amoma_logo"
          src="https://amobasoftware.com/assets/isoAmoba.510ff07f.svg"
        />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        {menuOptions?.map((item) => {
          const { id, icon: Icon, redirect, isSeparated } = item;
          const isActive =
            location.pathname === redirect ||
            location.pathname.includes(redirect);
          return (
            <NavBarItem
              key={`${id}-navbar`}
              isActive={isActive}
              icon={Icon}
              id={id}
              redirect={redirect}
              isSeparated={isSeparated}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
