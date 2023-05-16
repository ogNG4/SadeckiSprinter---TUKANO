import {
    MdDirectionsBike,
    MdSportsTennis,
    MdOutlineAccountBalance,
    MdOutlineHome,
    MdOutlineEventNote
    
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
      href: "/running-trails",
      icon: FaRunning,
    },
    {
      name: "Szlaki Piesze",
      href: "/hikking-trails",
      icon: FaHiking,
    },
    {
      name: "Obiekty sportowe",
      href: "/sports-objec",
      icon: MdSportsTennis,
    },
    {
      name: "Atrakcje turystyczne",
      href: "/ss",
      icon: MdOutlineAccountBalance,
    },
    {
      name: "Wydarzenia sportowe",
      href: "/aa",
      icon: MdOutlineEventNote,
    }
    // {
    //   name: "Wycieczki",
    //   href: "/",
    //   icon: FaMapSigns,
    // },

    // {
    //   name: "Dodaj trasę",
    //   href: "/create-route",
    //   icon: FaMapSigns,
    // },


  
    
   
  ];


  export default NAV_LINKS;
  