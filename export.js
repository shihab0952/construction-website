import building from "./src/assets/building.svg";
import construction from "./src/assets/construction.svg";
import design from "./src/assets/design.svg";
import document from "./src/assets/document.svg";
import paint from "./src/assets/paint.svg";
import support from "./src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "./src/assets/client1.png";
import client2 from "./src/assets/client2.png";
import client3 from "./src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Modern construction solutions with quality, reliability, and innovation for every project.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Building excellence with strong foundations, innovative designs, and reliable craftsmanship.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Expert design and planning for functional, aesthetic, and sustainable construction solutions with precision and innovation.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Comprehensive construction documentation ensuring accuracy, compliance, and efficiency for seamless project execution.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
     "Creative and functional interior design solutions enhancing spaces with style, comfort, and innovation.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Dedicated customer support ensuring seamless communication, prompt assistance, and reliable solutions for every need.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Develop a professional construction website focusing on quality services, exceptional customer support.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
     "Craft a visually appealing, functional design that reflects our brand’s quality and innovation in construction.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Construct a strong, reliable platform that showcases our expertise, projects, and commitment to excellence.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
    "Complete a polished, responsive website that highlights our expertise, services, and client satisfaction seamlessly.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
