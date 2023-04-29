import {
    MdDirectionsBike,
    MdSportsTennis,
    MdOutlineAccountBalance,
    MdOutlineHome,
    
  } from "react-icons/md";

  import { FaRunning, FaHiking, FaMapSigns } from "react-icons/fa";

const NAV_LINKS = [
    {
      name: "Strona Główna",
      href: "/",
      icon: MdOutlineHome,
    },
    {
      name: "Trasy Rowerowe",
      href: "/bike-routes",
      icon: MdDirectionsBike,
    },
    {
      name: "Trasy Biegowe",
      href: "/",
      icon: FaRunning,
    },
    {
      name: "Szlaki Piesze",
      href: "/",
      icon: FaHiking,
    },
    {
      name: "Obiekty sportowe",
      href: "/",
      icon: MdSportsTennis,
    },
    {
      name: "Atrakcje turystyczne",
      href: "/",
      icon: MdOutlineAccountBalance,
    },
    {
      name: "Wycieczki",
      href: "/",
      icon: FaMapSigns,
    },
  
    
   
  ];


  export default NAV_LINKS;
  