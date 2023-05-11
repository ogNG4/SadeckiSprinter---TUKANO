import {
    MdDirectionsBike,
    MdSportsTennis,
    MdOutlineAccountBalance,
    MdOutlineHome,
    
  } from "react-icons/md";

  import { FaRunning, FaHiking, FaMapSigns, FaPlus } from "react-icons/fa";

const SESSION_NAV_LINKS = [
    {
      name: "Utwórz ",
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
      href: "/running-trails",
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
    // {
    //   name: "Wycieczki",
    //   href: "/",
    //   icon: FaMapSigns,
    // },

    {
      name: "Dodaj trasę",
      href: "/create-route",
      icon: FaMapSigns,
    },


  
    
   
  ];


  export default SESSION_NAV_LINKS;
  