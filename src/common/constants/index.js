import {
  HomeIcon,
  UserPlusIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const MENU_OPTIONS = [
  {
    id: "/home",
    text: "Home",
    icon: HomeIcon,
    redirect: "/home",
  },
  {
    id: "persons",
    text: "Personas",
    icon: UserPlusIcon,
    redirect: "/persons",
  },

  {
    id: "logout",
    text: "Cerrar sesión",
    icon: ArrowLeftStartOnRectangleIcon,
    isSeparated: true,
  },
];
