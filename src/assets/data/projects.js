import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import images using require() to prevent missing paths
const bookWelt = require("../images/book_welt.png");
const bookWelt1 = require("../images/book_welt2.png");
const bookWelt2 = require("../images/bookWelt.png");
const bookWelt3 = require("../images/3.png");
const bookWelt4 = require("../images/4.png");
const pizza1 = require("../images/5.png");
const pizza2 = require("../images/6.png");
const RepairCar = require("../images/repair-car.png");
const Repair1 = require("../images/repair1.png");
const Repair2 = require("../images/repair2.png");
const creaskale = require("../images/creaskale.png");

// Project data
export const projects = [
  {
    name: "GetDPizza",
    categories: "Front End",
    githubLink: "https://github.com/oussama3422/GetDPizza",
    description:
      "PizzaPortal is a web application that allows users to order pizza online. The project is built using React, React Router v6.4, Tailwind CSS for styling, Local Storage for user login, Redux Toolkit for state management, and Framer Motion for small animations.",
    websiteLink: "https://get-d-pizza.vercel.app/",
    toolsAndTechnologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Local Storage",
      "Redux Toolkit",
      "Framer Motion",
    ],
    image: pizza1,
    images: [pizza1, pizza2],
  },
  {
    name: "BookWelt",
    categories: "Full Stack Development",
    githubLink: "https://github.com/oussama3422/Book-welt",
    description:
      "Book Welt is an admin dashboard designed for efficient management of booking data and statistical analysis through clean and intuitive charts.",
    websiteLink: "https://bookwelt.vercel.app/",
    toolsAndTechnologies: ["React", "Styled Components", "Recharts"],
    image: bookWelt,
    images: [bookWelt1, bookWelt2, bookWelt3, bookWelt4],
  },
  {
    name: "Creaskale",
    categories: "Mobile Development",
    githubLink: null,
    description: "Creaskale is an innovative mobile solution.",
    websiteLink: null,
    toolsAndTechnologies: ["Flutter", "Dart", "Bloc", "Firebase"],
    image: creaskale,
    images: [],
  },
  {
    name: "RepairCar",
    categories: "Mobile Development (Front End)",
    githubLink: "",
    description:
      "RepairCar is an app currently under development, with the front-end mobile version successfully completed.",
    websiteLink: "Coming soon",
    toolsAndTechnologies: ["Flutter", "Dart", "Bloc", "Firebase"],
    image: RepairCar,
    images: [Repair1, Repair2],
  },
];