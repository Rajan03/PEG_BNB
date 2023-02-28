import {
  HOME01IMG1,
  HOME01IMG2,
  HOME01IMG3,
  HOME02IMG1,
  HOME02IMG2,
  HOME02IMG3,
  HOME02IMG4,
  HOME03IMG1,
  HOME03IMG2,
  HOME03IMG3,
  HOME03IMG4,
} from "./images";

export const NavLinks = {
  home: "Home",
  about: "About",
  contact: "Contact",
  bookStay: "Book a Stay",
};

export const NavRoutes = [
  {
    name: NavLinks.home,
    path: "/",
  },
  {
    name: NavLinks.about,
    path: "/about",
  },
  {
    name: NavLinks.contact,
    path: "/contact",
  },
  {
    name: NavLinks.bookStay,
    path: "/book-stay",
  },
];

const heroData = {
  title: "Find the great places for short term stay",
  subtitle: "Discover the best short term rental properties in the city!",
  button: "Book a Stay",

  imageLeft: {
    src: HOME03IMG2,
  },

  imageRight: {
    imgOne: {
      src: HOME03IMG1,
    },
    imgTwo: {
      src: HOME03IMG3,
    },
  },
};

export const HomeData = {
  heroData,
};
