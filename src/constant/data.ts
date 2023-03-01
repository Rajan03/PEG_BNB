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

export const LocationsOption = [
  {
    label: "New York",
    value: "new-york",
  },
  {
    label: "Los Angeles",
    value: "los-angeles",
  },
  {
    label: "Chicago",
    value: "chicago",
  },
  {
    label: "Houston",
    value: "houston",
  },
  {
    label: "Philadelphia",
    value: "philadelphia",
  },
  {
    label: "Phoenix",
    value: "phoenix",
  },
  {
    label: "San Antonio",
    value: "san-antonio",
  },
  {
    label: "San Diego",
    value: "san-diego",
  },
  {
    label: "Dallas",
    value: "dallas",
  },
  {
    label: "San Jose",
    value: "san-jose",
  },
];

export const GuestsOption = [
  {
    label: "1 Guest",
    value: "1",
  },
  {
    label: "2 Guests",
    value: "2",
  },
  {
    label: "3 Guests",
    value: "3",
  },
  {
    label: "4 Guests",
    value: "4",
  },
  {
    label: "5 Guests",
    value: "5",
  },
];
