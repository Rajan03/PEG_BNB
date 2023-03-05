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
import {
  HiHome,
  HiLocationMarker,
  HiMail,
  HiPhoneMissedCall,
} from "react-icons/hi";
import {
  HiBuildingLibrary,
  HiBuildingStorefront,
  HiHomeModern,
} from "react-icons/hi2";
import { BsMap } from "react-icons/bs";
import { RiChatSmile3Line, RiParkingBoxLine } from "react-icons/ri";
import { GiModernCity } from "react-icons/gi";
import { TbAirConditioning, TbWashDry3, TbBath } from "react-icons/tb";
import {
  MdBalcony,
  MdSmartScreen,
  MdOutlineAir,
  MdGarage,
} from "react-icons/md";
import { IoMdBed } from "react-icons/io";

const ICONS = {
  cottage: <HiBuildingLibrary className={"w-full h-full min-w-12 min-h-12"} />,
  home: <HiHome className={"w-full h-full min-w-12 min-h-12"} />,
  apartment: (
    <HiBuildingStorefront className={"w-full h-full min-w-12 min-h-12"} />
  ),
  villa: <HiHomeModern className={"w-full h-full min-w-12 min-h-12"} />,
  location: <HiLocationMarker className={"w-full h-full min-w-12 min-h-12"} />,
  mail: <HiMail className={"w-full h-full min-w-12 min-h-12"} />,
  call: <HiPhoneMissedCall className={"w-full h-full min-w-12 min-h-12"} />,
  smile: <RiChatSmile3Line className={"w-full h-full min-w-12 min-h-12"} />,
  city: <GiModernCity className={"w-full h-full min-w-12 min-h-12"} />,
  map: <BsMap className={"w-full h-full min-w-12 min-h-12"} />,
  airConditioner: (
    <TbAirConditioning className={"w-full h-full min-w-12 min-h-12"} />
  ),
  balcony: <MdBalcony className={"w-full h-full min-w-12 min-h-12"} />,
  bedding: <IoMdBed className={"w-full h-full min-w-12 min-h-12"} />,
  cableTV: <MdSmartScreen className={"w-full h-full min-w-12 min-h-12"} />,
  dishwasher: <TbWashDry3 className={"w-full h-full min-w-12 min-h-12"} />,
  dryer: <MdOutlineAir className={"w-full h-full min-w-12 min-h-12"} />,
  freeParking: (
    <RiParkingBoxLine className={"w-full h-full min-w-12 min-h-12"} />
  ),
  bath: <TbBath className={"w-full h-full min-w-12 min-h-12"} />,
  garage: <MdGarage className={"w-full h-full min-w-12 min-h-12"} />,
};

//#region NAVIGATION DATA
export const NavLinkNames = {
  home: "Home",
  about: "About",
  contact: "Contact",
  bookStay: "Book a Stay",
};

export const NavLinks = {
  home: "/",
  about: "/about",
  contact: "/contact",
  bookStay: "/book-stay",
};

export const NavRoutes = [
  {
    name: NavLinkNames.home,
    path: NavLinks.home,
  },
  {
    name: NavLinkNames.about,
    path: NavLinks.about,
  },
  {
    name: NavLinkNames.contact,
    path: NavLinks.contact,
  },
  {
    name: NavLinkNames.bookStay,
    path: NavLinks.bookStay,
  },
];
//#endregion

//#region HOME PAGE DATA
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

const popularShortRentals = {
  title: "Popular Short Rentals",
  subtitle: "Featured short term rentals",
  categories: [
    {
      title: "Entire Apartment",
      icon: ICONS.apartment,
    },
    {
      title: "Entire House",
      icon: ICONS.home,
    },
    {
      title: "Entire Villa",
      icon: ICONS.villa,
    },
    {
      title: "Entire Cottage",
      icon: ICONS.cottage,
    },
  ],
};

const adForStay = {
  title:
    "Find your perfect rental home with us - Where comfort meets convenience",
  description:
    "Our properties are carefully selected and meticulously maintained to ensure that you have a comfortable and hassle-free experience. " +
    "We offer a wide range of rentals, from studio apartments to large family homes, all equipped with modern amenities to make your stay as " +
    "comfortable as possible.",
  image: HOME03IMG4,
  button: "Book a stay",
};

const featuredProperties = {
  title: "Featured Properties",
  subtitle: "Explore our portfolio of short term rentals",
  properties: [
    {
      title: "1 bedroom unit in Oswego near hospital",
      location: "Oswego, New York, USA",
      price: 1000,
      image: HOME01IMG1,
      rating: 4.5,
    },
    {
      title: "Cheerful 5 bedroom resort with heated Pool",
      location: "East Stroudsburg, Pennsylvania, USA",
      price: 1000,
      image: HOME01IMG1,
      rating: 4.5,
    },
    {
      title: "Cheerful 5 bedroom resort with heated Pool",
      location: "East Stroudsburg, Pennsylvania, USA",
      price: 1000,
      image: HOME01IMG1,
      rating: 4.5,
    },
  ],
};

const reviews = {
  title: "What our guests are saying",
  subtitle: "Read reviews from our guests",
  reviews: [
    {
      name: "John Cena",
      location: "Auckland, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG1,
      reviewed: "13 Jan 2023",
      rating: 4.5,
    },
    {
      name: "John Snow",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Ammy Virk",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Karan Aujla",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Pankaj Tripathi",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "John Cena",
      location: "Auckland, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG1,
      reviewed: "13 Jan 2023",
      rating: 4.5,
    },
    {
      name: "John Snow",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Ammy Virk",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Karan Aujla",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Pankaj Tripathi",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
  ],
};

const listMyProperty = {
  title: "Rental Property marketing management and optimization",
  description:
    "We have successfully boosted occupancy and continue to strive for growth. \n" +
    "We use accurate forecasting and market evaluation to tailor our approach, while campaigns and special offers raise " +
    "visibility and incentivize customers. We continuously refine our approach to ensure the best outcome. Proven " +
    "strategies have enabled us to increase occupancy.",
  action: "Connect with Tenants - List Your Property",
  image: HOME03IMG1,
  benefits: [
    "Increases visibility and exposure",
    "Maximize revenue and occupancy",
    "Strategy tailored to your property",
    "Generate more leads and bookings",
    "Optimize your listing",
  ],
};
export const HomeData = {
  heroData,
  popularShortRentals,
  adForStay,
  featuredProperties,
  reviews,
  listMyProperty,
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
//#endregion

//#region  LISTING PAGE DATA
const properties = [
  {
    id: 1,
    title: "1 bedroom unit in Oswego near hospital",
    slug: "1-bedroom-unit-in-oswego-near-hospital",
    location: "Oswego, New York, USA",
    price: 1000,
    image: HOME01IMG1,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Cheerful 5 bedroom resort with heated Pool",
    slug: "cheerful-5-bedroom-resort-with-heated-pool",
    location: "East Stroudsburg, Pennsylvania, USA",
    price: 1000,
    image: HOME01IMG1,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Cheerful 5 bedroom resort with heated Pool",
    slug: "cheerful-5-bedroom-resort-with-heated-pool",
    location: "East Stroudsburg, Pennsylvania, USA",
    price: 1000,
    image: HOME01IMG1,
    rating: 4.5,
  },
  {
    id: 4,
    title: "1 bedroom unit in Oswego near hospital",
    slug: "1-bedroom-unit-in-oswego-near-hospital",
    location: "Oswego, New York, USA",
    price: 1000,
    image: HOME01IMG1,
    rating: 4.5,
  },
  {
    id: 5,
    title: "Cheerful 5 bedroom resort with heated Pool",
    slug: "cheerful-5-bedroom-resort-with-heated-pool",
    location: "East Stroudsburg, Pennsylvania, USA",
    price: 1000,
    image: HOME01IMG1,
    rating: 4.5,
  },
];

export const ListingData = {
  title: "Find your perfect short-term rental",
  subtitle: "Available Accommodations",
  properties,
};
//#endregion

//#region  CONTACT PAGE DATA
const getInTouch = {
  title: "Let's have a talk together",
  subtitle: "Get in touch",
  description:
    "We make property investing easy and stress-free for you. " +
    "We take the hassle out of finding and managing property investments, so you can focus on financial security.",
  action: "Request a call back",
};

const contactInfo = {
  address: {
    title: "Address",
    description: "1234 Street Name, City Name, United States",
    icon: ICONS.location,
  },
  phone: {
    title: "Call Us",
    description: "+1 234 567 890",
    icon: ICONS.call,
  },
  email: {
    title: "Email Info",
    description: "info@companyname123.com",
    icon: ICONS.mail,
  },
};

const customerReviews = {
  title: "Join Us to maximize your revenue",
  action: "Contact",
  reviews: [
    {
      name: "John Cena",
      location: "Auckland, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG1,
      reviewed: "13 Jan 2023",
      rating: 4.5,
    },
    {
      name: "Karan Aujla",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Pankaj Tripathi",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Ammy Virk",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Karan Aujla",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
    {
      name: "Pankaj Tripathi",
      location: "New York, USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, " +
        "nisl vel tincidunt lacinia, nunc nisl aliquam mauris, vitae lacinia " +
        "nisl felis eget nunc. Donec euismod, nisl vel tincidunt lacinia, nunc " +
        "nisl aliquam mauris, vitae lacinia nisl felis eget nunc.",
      image: HOME02IMG2,
      reviewed: "2 days ago",
      rating: 4.5,
    },
  ],
};

export const ContactData = {
  getInTouch,
  contactInfo,
  customerReviews,
};
//#endregion

//#region  ABOUT PAGE DATA
const welcomeSection = {
  title: "Expert Property Management: Your Key to Success",
  subtitle: "Welcome to PEGBnb",
  description:
    "At PEG, we make property investing easy and stress-free for you.  We take the hassle out of finding and " +
    "managing property investments, so you can focus on financial security.",
  action: "Request a call back",
};

const stats = [
  {
    title: "Listed Properties",
    value: 200,
    icon: ICONS.villa,
  },
  {
    title: "Happy Customers",
    value: 100,
    icon: ICONS.smile,
  },
  {
    title: "Cities with active Listings",
    value: 10,
    icon: ICONS.city,
  },
  {
    title: "Beautiful Locations",
    value: 5,
    icon: ICONS.map,
  },
];
export const AboutData = {
  welcomeSection,
  stats,
  customerReviews,
};
//#endregion

//#region  SINGLE LISTING PAGE DATA
const dataStr =
  "If you're looking for a modern and flexible home for a one day outing, there are a variety of options available to you. Perhaps you're interested in a sleek, contemporary home with open floor plans and large windows that let in plenty of natural light. Or, maybe you're looking for a more rustic feel with exposed beams and natural materials like wood and stone.\n" +
  "\n" +
  "No matter what your style preferences may be, a modern and flexible home will have features that make it a great choice for a day outing. These homes are often designed to maximize space and functionality, with flexible layouts that can be adapted to meet your needs. Whether you're planning to entertain guests, cook a meal, or simply relax, a modern and flexible home will offer plenty of options.\n" +
  "\n" +
  "Many modern and flexible homes also feature outdoor living spaces like decks or patios, which can be perfect for enjoying the fresh air and sunshine on a day out. Some homes may even have amenities like swimming pools or hot tubs, making them an ideal choice for those looking to relax and unwind.\n" +
  "\n" +
  "Overall, a modern and flexible home is a great choice for a one day outing, providing a stylish and comfortable space to enjoy with friends and family. Whether you're looking for a sleek and contemporary design or something more rustic and charming, there's sure to be a modern and flexible home that's perfect for your needs.";
export const propertiesDetailsArr = [
  {
    id: 1,
    title: "1 bedroom unit in Oswego near hospital",
    slug: "1-bedroom-unit-in-oswego-near-hospital",
    location: "Oswego, New York, USA",
    amenities: [
      {
        name: "Air Conditioning",
        icon: ICONS.airConditioner,
      },
      {
        name: "Balcony",
        icon: ICONS.balcony,
      },
      {
        name: "3 Beds",
        icon: ICONS.bedding,
      },
      {
        name: "Cable TV",
        icon: ICONS.cableTV,
      },
      {
        name: "Dishwasher",
        icon: ICONS.dishwasher,
      },
      {
        name: "Dryer",
        icon: ICONS.dryer,
      },
      {
        name: "Free Parking",
        icon: ICONS.freeParking,
      },
    ],
    topFeatures: [
      {
        name: "3 Rooms",
        icon: ICONS.home,
      },
      {
        name: "2 Bathrooms",
        icon: ICONS.bath,
      },
      {
        name: "1 Garage",
        icon: ICONS.garage,
      },
      {
        name: "1 Balcony",
        icon: ICONS.balcony,
      },
    ],
    overview: dataStr,
    price: 1000,
    images: [HOME01IMG1, HOME01IMG2, HOME01IMG3, HOME02IMG3, HOME02IMG4],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Karan Aujla",
        location: "New York, USA",
        avatar: HOME02IMG2,
        rating: 4.5,
        comment:
          "Staying at this rental home was an absolute delight! From the moment we arrived, we were blown" +
          " away by the attention to detail and thoughtful touches throughout the house.",
        date: "2 days ago",
      },
      {
        id: 2,
        name: "Karan Aujla",
        location: "New York, USA",
        avatar: HOME02IMG2,
        rating: 4.5,
        comment:
          "Staying at this rental home was an absolute delight! From the moment we arrived, we were blown" +
          " away by the attention to detail and thoughtful touches throughout the house.",
        date: "2 days ago",
      },
      {
        id: 3,
        name: "Karan Aujla",
        location: "New York, USA",
        avatar: HOME02IMG2,
        rating: 4.5,
        comment:
          "Staying at this rental home was an absolute delight! From the moment we arrived, we were blown" +
          " away by the attention to detail and thoughtful touches throughout the house.",
        date: "2 days ago",
      },
    ],
  },
];
