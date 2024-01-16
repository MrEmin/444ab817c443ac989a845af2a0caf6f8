import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Empowering winter enthusiasts with exceptional gear, Winter Wave's mission is to redefine cold-weather adventures. We craft quality, stylish essentials, delivering unparalleled comfort and performance on every snowy slope.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Aspires to be the epitome of winter elegance and performance, Winter Wave envisions creating a community of stylish, adventurous individuals united by unparalleled cold-weather experiences.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded on a passion for winter sports, Winter Wave emerged to blend fashion with function, curating a legacy of innovative, quality gear for adventurous enthusiasts.",
  },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/single-product?id=`;
