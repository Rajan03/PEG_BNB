import {
  HOME01IMG1,
  HOME01IMG2,
  HOME01IMG3,
  HOME01IMG4,
  HOME01IMG5,
  HOME01IMG6,
  HOME01IMG7,
  HOME01IMG8,
  HOME01IMG10,
  HOME01IMG11,
  HOME01IMG12,
  HOME01IMG13,
  HOME01IMG14,
  HOME01IMG15,
  HOME01IMG16,
  HOME01IMG17,
  HOME01IMG18,
  HOME01IMG19,
  HOME01IMG20,
  HOME01IMG21,
  HOME01IMG22,
  HOME01IMG23,
  HOME01IMG24,
  HOME01IMG25,
  HOME01IMG26,
  HOME01IMG27,
  HOME01IMG28,
  HOME01IMG29,
  HOME01IMG30,
  HOME01IMG31,
  HOME01IMG32,
  HOME01IMG33,
  HOME02IMG1,
  HOME02IMG2,
  HOME02IMG3,
  HOME02IMG4,
  HOME02IMG5,
  HOME02IMG6,
  HOME02IMG7,
  HOME02IMG8,
  HOME02IMG9,
  HOME02IMG10,
  HOME02IMG11,
  HOME02IMG12,
  HOME02IMG13,
  HOME02IMG14,
  HOME02IMG15,
  HOME02IMG16,
  HOME02IMG17,
  HOME02IMG18,
  HOME02IMG19,
  HOME02IMG20,
  HOME02IMG21,
  HOME02IMG22,
  HOME02IMG23,
  HOME02IMG24,
  HOME02IMG25,
  HOME02IMG26,
  HOME02IMG27,
  HOME02IMG28,
  HOME02IMG29,
  HOME02IMG30,
  HOME02IMG31,
  HOME03IMG1,
  HOME03IMG2,
  HOME03IMG3,
  HOME03IMG4,
  HOME03IMG5,
  HOME03IMG6,
  HOME03IMG7,
  HOME03IMG8,
  HOME03IMG9,
  HOME03IMG10,
  HOME03IMG11,
  HOME03IMG12,
  HOME03IMG13,
  HOME04IMG1,
  HOME04IMG2,
  HOME04IMG3,
  HOME04IMG4,
  HOME04IMG5,
  HOME04IMG6,
  HOME04IMG7,
  HOME04IMG8,
  HOME04IMG9,
  HOME04IMG10,
  HOME04IMG11,
  HOME05IMG1,
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
  harbour: (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      focusable="false"
      className={"w-full h-full min-w-12 min-h-12 text-primary-600"}
    >
      <path d="m2.61257411 1 13.33750219-.00003368c.2847338-.01695191.5783672.08460408.7943945.33085979l.0875795.11447369 12 18c.4219395.6329093.0099308 1.470436-.720208 1.5487653l-.1118423.0059349-11.0004259-.0008429v2l12.0004259.0008429v1c0 1.8361992-.6186221 3.5279115-1.6588196 4.8780903l.1333865.1044573c.3523009.2943011.8254174.4740644 1.3337381.5105448l.1921033.0069076-.0008164 2c-.9482488-.0003872-1.8714589-.2864959-2.6103966-.8284277l-.1968401-.1541199c-.3968061-.3314794-.9455981-.5174524-1.5258163-.5174524-.5154406 0-1.0063162.1469577-1.3877087.4124093l-.1377243.1050431c-.7681284.6416706-1.7727835.9821252-2.8080529.9825476-.9484793-.0003872-1.8714278-.2864378-2.6103841-.8284132l-.1968526-.1541344c-.3968061-.3314794-.9455981-.5174524-1.5258163-.5174524-.5155267 0-1.0065822.1469963-1.3879641.412564l-.1377108.1050904c-.7685435.6416063-1.7727926.9819233-2.8081945.9823456-.9480737-.0003872-1.87091787-.2864139-2.61045107-.8285629l-.1970272-.1541867c-.39622749-.3312082-.94522376-.5172504-1.52519127-.5172504-.51574949 0-1.00666844.1469417-1.38808383.4124039l-.13773242.1050485c-.70419357.5882614-1.60678491.9233016-2.54931261.9753817l-.25792411.0071659-.00081618-2c.51598595-.0002105 1.00702594-.1472267 1.38821173-.4124912l.27269837-.2103967c-.92743864-1.2047147-1.5207513-2.6829906-1.63911865-4.2982493l-.01718213-.3213485-.02121038-1.2575143 12.01658325-.0008429v-13.99999997l-12.38699999.00084287 1.33342589-4zm24.30242589 24h-21.832l.015308.0883608c.20795974 1.1361588.735701 2.1591458 1.48566237 2.9736682.24615671-.0417506.49692124-.062029.74949069-.062029 1.03468645 0 2.03961289.3405465 2.80740294.9823456.396893.3313398.945923.5174176 1.5252668.5176544.5805075-.0002368 1.129549-.1862944 1.5259826-.5172504.7682737-.6422031 1.7732002-.9827496 2.8078866-.9827496.9485841 0 1.8717088.286038 2.6110616.8283213l.1969664.1542263c.396445.3311778.945357.5172156 1.5250248.5174524.5157841-.0002105 1.0070654-.147297 1.3882325-.4125146l.1376088-.1049378c.7686408-.6420986 1.773149-.9825476 2.8076448-.9825476.1679252 0 .3350525.008964.5005037.0267268l.2465315.0324303.0726435-.0769285c.6506098-.7304632 1.1243488-1.6218219 1.3553746-2.6067272l.057363-.2731552zm-9.915-19.696v13.696h9.131zm-11.613-2.305.66709255 2.001-.66709255 1.999 9.6125741.00015713v-4z"></path>
    </svg>
  ),
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
  button: "Contact Us",
};

const featuredProperties = {
  title: "Featured Properties",
  subtitle: "Explore our portfolio of short term rentals",
  properties: [
    {
      id: 1,
      title: "Cheerful 5-bedroom resort with heated pool",
      slug: "cheerful-5-bedroom-resort-with-heated-pool",
      location: "East Stroudsburg, Pennsylvania, United States",
      price: "₹26,119",
      image: HOME02IMG1,
      rating: 5.0,
    },
    {
      id: 2,
      title: "High-end Villa Spa Pool & Harbour Views",
      slug: "high-end-modern-villa-spa-pool-harbour-views",
      location: "Auckland, New Zealand",
      price: "₹19,200",
      image: HOME01IMG3,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Cheerful 2 bedroom cottage near lake",
      slug: "cheerful-two-bedroom-brand-new-cottage-near-lake",
      location: "Altmar, New York, United States",
      price: "₹9,842",
      image: HOME03IMG1,
      rating: 4.43,
    },
  ],
};

const reviews = {
  title: "What our guests are saying",
  subtitle: "Read reviews from our guests",
  reviews: [
    {
      id: 1,
      date: "13 Jan 2023",
      name: "Chris martin",
      location: "Auckland, USA",
      comment:
        "The best place to stay in Auckland. The house is very clean and tidy. " +
        "The host is very friendly and helpful. The location is very convenient. ",
      avatar: HOME02IMG1,
      reviewed: "13 Jan 2023",
      rating: 4.5,
    },
    {
      id: 2,
      date: "2 days ago",
      name: "Louis Tomlinson",
      location: "New York, USA",
      comment:
        "The best place to stay in New York. The house is very clean and tidy. " +
          "The host is very friendly and helpful. The location is very convenient.",
      avatar: HOME02IMG2,
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
    title: "Cheerful 5-bedroom resort with heated pool",
    slug: "cheerful-5-bedroom-resort-with-heated-pool",
    location: "East Stroudsburg, Pennsylvania, United States",
    price: "₹26,119",
    image: HOME02IMG1,
    rating: 5.0,
  },
  {
    id: 2,
    title: "High-end Villa Spa Pool & Harbour Views",
    slug: "high-end-modern-villa-spa-pool-harbour-views",
    location: "Auckland, New Zealand",
    price: "₹19,200",
    image: HOME01IMG3,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Cheerful 2 bedroom cottage near lake",
    slug: "cheerful-two-bedroom-brand-new-cottage-near-lake",
    location: "Altmar, New York, United States",
    price: "₹9,842",
    image: HOME03IMG1,
    rating: 4.43,
  },
  {
    id: 4,
    title: "2 bedroom unit in Oswego near Hospital",
    slug: "2-bedroom-unit-in-oswego-near-suny-and-hospital",
    location: "Oswego, New York, USA",
    price: "₹7,956",
    image: HOME04IMG1,
    rating: 4.5,
  },
  {
    id: 5,
    title: "1 bedroom unit in Oswego near Hospital",
    slug: "1-bedroom-unit-in-oswego-near-suny-and-hospital",
    location: "Oswego, New York, USA",
    price: 1000,
    image: HOME05IMG1,
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
      id: 1,
      date: "13 Jan 2023",
      name: "Chris martin",
      location: "Auckland, USA",
      comment:
          "The best place to stay in Auckland. The house is very clean and tidy. " +
          "The host is very friendly and helpful. The location is very convenient. ",
      avatar: HOME02IMG1,
      reviewed: "13 Jan 2023",
      rating: 4.5,
    },
    {
      id: 2,
      date: "2 days ago",
      name: "Louis Tomlinson",
      location: "New York, USA",
      comment:
          "The best place to stay in New York. The house is very clean and tidy. " +
          "The host is very friendly and helpful. The location is very convenient.",
      avatar: HOME02IMG2,
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
export const propertiesDetailsArr = [
  {
    id: 1,
    title: "High-end Modern Villa Spa Pool & Harbour Views",
    slug: "high-end-modern-villa-spa-pool-harbour-views",
    location: "Auckland, New Zealand",
    amenities: [
      {
        name: "Harbour View",
        icon: ICONS.harbour,
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
        name: "4 bedrooms",
        icon: ICONS.home,
      },
      {
        name: "2.5 baths",
        icon: ICONS.bath,
      },
      {
        name: "8 guests",
        icon: ICONS.garage,
      },
      {
        name: "5 Beds",
        icon: ICONS.bedding,
      },
    ],
    overview:
      "Located a stone's throw away from the airport, and away from the road, this wonderful house embodies ultimate in style and comfort." +
      "It is equipped to offer a modern calming base to relax at.\n \n" +
      "☆ Spa pool!\n" +
      "☆ Free High-Speed Wifi\n" +
      "☆ 4 generous styled bedrooms!\n" +
      "☆ 3 Smart TVs, Smart Barrista Coffee Machine\n" +
      "☆ Fully equipped kitchen and in-unit laundry, multiple bathrooms\n" +
      "☆ Automated Self Check-In, Book & Check-In within minutes\n \n" +
      "The space\n" +
      "The house provides 4 bedrooms on 2 floors, open plan living, with high-end finishes!\n \n" +
      "☆ Harbour views\n" +
      "☆ Marble kitchen bench top\n" +
      "☆ Automatic blinds in living room\n" +
      "☆ Lighting voice control with Alexa\n" +
      "☆ High-end appliances and gas cooktop\n" +
      "☆ Keep fit with the treadmill in the home gym\n" +
      "☆ 2.5 spacious bathrooms with 3 Japanese toilets\n" +
      "☆ Aircon to keep the house warm in winter and cool in summer.\n" +
      "☆ Ultimate outdoor living with BBQ, Spa pool, bar and dining areas.\n" +
      "☆ Entertainment with Smart TV, Alexa's music and ping pong table in the garage.",
    price: "₹19,200",
    images: [
      HOME01IMG1,
      HOME01IMG2,
      HOME01IMG3,
      HOME01IMG4,
      HOME01IMG5,
      HOME01IMG6,
      HOME01IMG7,
      HOME01IMG8,
      HOME01IMG10,
      HOME01IMG11,
      HOME01IMG12,
      HOME01IMG13,
      HOME01IMG14,
      HOME01IMG15,
      HOME01IMG16,
      HOME01IMG17,
      HOME01IMG18,
      HOME01IMG19,
      HOME01IMG20,
      HOME01IMG21,
      HOME01IMG22,
      HOME01IMG23,
      HOME01IMG24,
      HOME01IMG25,
      HOME01IMG26,
      HOME01IMG27,
      HOME01IMG28,
      HOME01IMG29,
      HOME01IMG30,
      HOME01IMG31,
      HOME01IMG32,
      HOME01IMG33,
    ],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Tilisi",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.5,
        comment:
          "Great convenient location. Great views from the house, which showed off NZ to our overseas guests." +
          " Navigating all the stairs was tricky for our older relatives but a beautiful high-tech & clean place to stay.",
        date: "February 2023",
      },
      {
        id: 2,
        name: "Rakera",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.5,
        comment:
          "Beautiful place to stay, spa was nice! Smart house/appliances. Comfortable beds and very clean! Driveway was difficult to get in and out of as very steep and we had a people mover, but house made up for it! Team EJ even let us check out an hour later. Would stay again!",
        date: "February 2023",
      },
    ],
  },
  {
    id: 2,
    title: "Cheerful 5-bedroom resort with heated pool",
    slug: "cheerful-5-bedroom-resort-with-heated-pool",
    location: "East Stroudsburg, Pennsylvania, United States",
    amenities: [
      {
        name: "Harbour View",
        icon: ICONS.harbour,
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
        name: "5 bedrooms",
        icon: ICONS.home,
      },
      {
        name: "3 baths",
        icon: ICONS.bath,
      },
      {
        name: "12 guests",
        icon: ICONS.garage,
      },
      {
        name: "9 Beds",
        icon: ICONS.bedding,
      },
    ],
    overview:
      "The best things in life are the PEOPLE we Love, the PLACES we have been and MEMORIES we have made." +
      "Welcome to your very Own Resort nestled in Poconos mountain to create the best memories of your life with your loved ones." +
      "A Family Compound w Gaming room, Outdoor kitchen, Wet Bar and Heated InGround Pool w Island & Waterfall." +
      "Indulge yourself in prestigious and luxurious Blue Mountain Lake Community just 12 miles to Shawnee & Camelback Mountain Ski Resort, shops, restaurants, and much more!\n \n" +
      "The space\n" +
      "Where will you make memories!\n \n" +
      "★ With 5 Bedrooms\n" +
      "★ 3-Full & 2-Half Baths, master bath with Jacuzzi\n" +
      "★ Fully Equipped Kitchen of Granite counter-top, Stainless Steel appliances, and Coffee Maker\n" +
      "★ Formal Dining Room\n" +
      "★ Formal Poker Room (yes, we provide the chips)\n" +
      "★ Gaming Room\n" +
      "★ Two Living Room with 70 inch TV screens (so adult and kids can enjoy their show simultaneously without any conflict)\n" +
      "★ A Generous Master Suite, Gas Fireplace, Private Deck, Custom Private Bath\n" +
      "★ WiFi 100 - Mbps Download & 10+ Upload Mbps\n" +
      "★ Game Room - Pool table, TT, Air Hockey, Screen for Video Games\n" +
      "★ Luxury Patio Outdoor Hibachi Grill\n" +
      "★ Gas Fire pit\n" +
      "★ Office/Workspace\n" +
      "★ Fireplace\n" +
      "★ 4200 ft² of living space (including finished basement)\n" +
      "★ Close proximity to:\n" +
      "- Crossings Outlet Mall\n" +
      "- Shawnee Mt Ski Resort\n" +
      "- Camelback Ski Resort\n" +
      "- Mount Airy Casino\n" +
      "- Kalahari & Great Wolf Resorts " +
      " The home is Located in Prestigious Blue Mountain Lake Estates, one of the premier communities in all of the Poconos. Our luxurious Pocono Retreat will feel like a home-away-from-home the moment you arrive. Boasting an enormous 5,000 square feet to spread out and unwind. The home offers a fully equipped state of the art kitchen, 5 bedrooms, 2 full and 2 half bathrooms, fireplace, spectacular exterior space to entertain year round all while sleeping 16!! It's the perfect go-to for group of friends traveling together, family reunion or a romantic couples getaway.\n \n" +
      "After a busy day enjoying all the Poconos has to offer such as skiing, hiking, sightseeing or shopping, it's time to relax in our luxurious Pocono Retreat!!! Watch a movie on the 70 inch SmartCast TV. Enjoy our enormous Living Room while stretching out on one our luxurious yet comfy power recliner sofas. In the winter you can cozy up to the fireplace, share a bottle of wine and if you prefer whipping up your own cocktails with our professional grade Blender.\n \n" +
      "Ready for some poker fun? We got you covered. Enjoy our dedicated room to play poker with your friends and family members\n \n" +
      "No matter what time of year you reserve the home you will surely will enjoy our luxurious backyard patio and entertainment area. Boast your cooking skills on outdoor Hibachi Grill. During the evening roast marshmallows while star gazing in front of our beautiful gas burning fire pit. We even offer a 48,000 BTU exterior propane heater to enjoy chilly Pocono evenings outdoors. Your options are endless!!\n \n" +
      "No matter how you spend your day in the Poconos, round out each evening with a home-cooked meal made in the fully equipped state of the art kitchen. Chat with company around the dining table late into the evening, until you're ready to retire to one of the 5, beautiful, spacious bedrooms.",
    price: "₹26,119",
    images: [
      HOME02IMG1,
      HOME02IMG2,
      HOME02IMG3,
      HOME02IMG4,
      HOME02IMG5,
      HOME02IMG6,
      HOME02IMG7,
      HOME02IMG8,
      HOME02IMG9,
      HOME02IMG10,
      HOME02IMG11,
      HOME02IMG12,
      HOME02IMG13,
      HOME02IMG14,
      HOME02IMG15,
      HOME02IMG16,
      HOME02IMG17,
      HOME02IMG18,
      HOME02IMG19,
      HOME02IMG20,
      HOME02IMG21,
      HOME02IMG22,
      HOME02IMG23,
      HOME02IMG24,
      HOME02IMG25,
      HOME02IMG26,
      HOME02IMG27,
      HOME02IMG28,
      HOME02IMG29,
      HOME02IMG30,
      HOME02IMG31,
    ],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Vivek",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 5.0,
        comment:
          "We recently stayed at this mini resort-like property. The attention to detail was evident in every corner of the house, and the amenities were top-notch. The poker table was a hit with my friends, and the full house speaker system added to the karaoke fun. The pool table and dart board provided entertainment for hours on end. But what really made the trip special was the fully equipped kitchen. " +
          "We were able to cook and entertain with ease, and it made the whole experience that much more enjoyable. Overall, I highly recommend this property in the luxurious community. The host was incredibly hospitable and the house was beyond my expectations. I can't wait to visit again! Five stars all around.",
        date: "January 2023",
      },
      {
        id: 2,
        name: "Luciana",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.7,
        comment:
          "Sona place were so great for me and my family we had a wonderful time expending our holidays getaway! away from the city. We cant not wait to go back for the summer already!!!! Thank sona :) happy new year!",
        date: "January 2023",
      },
      {
        id: 3,
        name: "Dolly",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 5.0,
        comment:
          "We stayed at this stunning resort-like home to celebrate 50th birthday with close friends and family. It was an incredible experience for our personal event. " +
          "From the moment we arrived, we were struck by the breathtaking views of the surrounding nature around blue mountain community. It also had snow covered 90-acre semi " +
          "frozen lake and with beautiful Gazebo on the shore. The home itself was stunning, with a spacious open floor plan, two living rooms, poker table, game room with pool table & board games. " +
          "The outdoor space was equally impressive, with a private pool, hot tub, and outdoor grill area. Will have to come again!The home was impeccably clean and well-maintained, with high-end finishes and comfortable furnishings throughout. The kitchen was equipped with everything we needed to prepare meals.",
        date: "January 2023",
      },
    ],
  },
  {
    id: 3,
    title: "Cheerful two bedroom brand new cottage near lake",
    slug: "cheerful-two-bedroom-brand-new-cottage-near-lake",
    location: "Altmar, New York, United States",
    amenities: [
      {
        name: "Harbour View",
        icon: ICONS.harbour,
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
        name: "2 bedrooms",
        icon: ICONS.home,
      },
      {
        name: "1 baths",
        icon: ICONS.bath,
      },
      {
        name: "6 guests",
        icon: ICONS.garage,
      },
      {
        name: "3 Beds",
        icon: ICONS.bedding,
      },
    ],
    overview:
      "Relax with the whole family at this peaceful place to stay. Enjoy the great amenities at lake, kayaking, boat, basketball court and picnic area. Nature at its best, interact with Amish communities, " +
      "go fishing at salman river and enjoy the giant waterfall in less than fifteen minutes drive. This is family friendly communities with most of resident living all year round. " +
      "This cabin is still work in progress please bear with us for a little while. Please bring your towels and bedsheets.Thanks\n \n" +
      "The space\n" +
      "880 square feet wood cabin!\n \n" +
      "Guest access\n" +
      "Full cabin\n \n" +
      "Other things to note\n" +
      "Free Wi-Fi provided\n \n",
    price: "₹9,842",
    images: [
      HOME03IMG1,
      HOME03IMG2,
      HOME03IMG3,
      HOME03IMG4,
      HOME03IMG5,
      HOME03IMG6,
      HOME03IMG7,
      HOME03IMG8,
      HOME03IMG9,
      HOME03IMG10,
      HOME03IMG11,
      HOME03IMG12,
      HOME03IMG13,
    ],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Cecilia",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment: "Great place! Great hosts!",
        date: "January 2023",
      },
      {
        id: 2,
        name: "Chris",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.7,
        comment:
          "Sona place were so great for me and my family we had a wonderful time expending our holidays getaway! away from the city. We cant not wait to go back for the summer already!!!! Thank sona :) happy new year!",
        date: "September 2022",
      },
      {
        id: 3,
        name: "Jesica",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.0,
        comment:
          "Nice place , close to where we wanted to go fishing . Would stay again",
        date: "September 2022",
      },
      {
        id: 4,
        name: "Tim",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment: "Cabin was exceptionally clean and a great location!",
        date: "September 2022",
      },
      {
        id: 5,
        name: "Melissa",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.6,
        comment:
          "Dolly was very attentive and responded quickly to any questions we had. Our stay was cozy and enjoyable!",
        date: "September 2022",
      },
      {
        id: 6,
        name: "Tori",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.8,
        comment:
          "Dolly was very pleasant and accommodating. Check in and check out were more than great.",
        date: "August 2022",
      },
      {
        id: 7,
        name: "Ben",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.7,
        comment:
          "This home is clearly under construction so be sure to work with the host ahead of time to understand the conditions of the home and what to expect. Otherwise it is a nice location and she is reasonably responsive.",
        date: "August 2022",
      },
      {
        id: 8,
        name: "Ben",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.6,
        comment:
          "Quiet, cozy and affordable. Lovely cabin that is still a work in progress.",
        date: "July 2022",
      },
    ],
  },
  {
    id: 4,
    title: "2 bedroom unit in Oswego near SUNY and Hospital",
    slug: "2-bedroom-unit-in-oswego-near-suny-and-hospital",
    location: "Oswego, New York, United States",
    amenities: [
      {
        name: "Harbour View",
        icon: ICONS.harbour,
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
        name: "2 bedrooms",
        icon: ICONS.home,
      },
      {
        name: "1 baths",
        icon: ICONS.bath,
      },
      {
        name: "6 guests",
        icon: ICONS.garage,
      },
      {
        name: "4 Beds",
        icon: ICONS.bedding,
      },
    ],
    overview:
      "Your family will be close to everything when you stay at this centrally-located place. \n \n " +
      "Fully furnished 2 bedrooms unit near SUNY and Oswego Hospital, next to Kinney drug store. Walkable distance to all essentials things. 8 minutes walk to marina/riverwalk \n \n " +
      "Ideal for short term stay for seasonal workers at nuclear power plants and nurses working at Oswego hospital.workers",
    price: "₹7,956",
    images: [
      HOME04IMG1,
      HOME04IMG2,
      HOME04IMG3,
      HOME04IMG4,
      HOME04IMG5,
      HOME04IMG6,
      HOME04IMG7,
      HOME04IMG8,
      HOME04IMG9,
      HOME04IMG10,
      HOME04IMG11,
    ],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Nsikak",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment: "Nice hospitality.!",
        date: "January 2023",
      },
      {
        id: 2,
        name: "Emilia",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.7,
        comment: "Our stay was great thank you.",
        date: "February 2023",
      },
      {
        id: 3,
        name: "Javier",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.0,
        comment:
          "Nice place , close to where we wanted to go fishing . Would stay again",
        date: "February 2023",
      },
      {
        id: 4,
        name: "Gabriela",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment:
          "I stayed at Ash’s apartment for a week with my son. We had everything we needed.",
        date: "September 2022",
      },
      {
        id: 5,
        name: "Casey",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.6,
        comment:
          "apt is on a corner st. traffic is very loud. other 3 Apts are college students which are also very loud. great place if you're 20. Not so great if you got to go to work at 6am!",
        date: "November 2022",
      },
      {
        id: 6,
        name: "Sam",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.8,
        comment:
          "My two friends and I stayed at Ash’s bnb while we were salmon fishing in Oswego. Place was clean and in a prime location. Would stay here again.",
        date: "August 2022",
      },
    ],
  },
  {
    id: 5,
    title: "1 bedroom unit in Oswego near SUNY and Hospital",
    slug: "1-bedroom-unit-in-oswego-near-suny-and-hospital",
    location: "Oswego, New York, United States",
    amenities: [
      {
        name: "Harbour View",
        icon: ICONS.harbour,
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
        name: "2 bedrooms",
        icon: ICONS.home,
      },
      {
        name: "1 baths",
        icon: ICONS.bath,
      },
      {
        name: "6 guests",
        icon: ICONS.garage,
      },
      {
        name: "4 Beds",
        icon: ICONS.bedding,
      },
    ],
    overview:
      "Your family will be close to everything when you stay at this centrally-located place. \n \n " +
      "Fully furnished 2 bedrooms unit near SUNY and Oswego Hospital, next to Kinney drug store. Walkable distance to all essentials things. 8 minutes walk to marina/riverwalk \n \n " +
      "Ideal for short term stay for seasonal workers at nuclear power plants and nurses working at Oswego hospital.workers",
    price: "₹6,479",
    images: [
      HOME04IMG1,
      HOME04IMG2,
      HOME04IMG3,
      HOME04IMG4,
      HOME04IMG5,
      HOME04IMG6,
      HOME04IMG7,
      HOME04IMG8,
      HOME04IMG9,
      HOME04IMG10,
      HOME04IMG11,
    ],
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Nsikak",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment: "Nice hospitality.!",
        date: "January 2023",
      },
      {
        id: 2,
        name: "Emilia",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.7,
        comment: "Our stay was great thank you.",
        date: "February 2023",
      },
      {
        id: 3,
        name: "Javier",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.0,
        comment:
          "Nice place , close to where we wanted to go fishing . Would stay again",
        date: "February 2023",
      },
      {
        id: 4,
        name: "Gabriela",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.9,
        comment:
          "I stayed at Ash’s apartment for a week with my son. We had everything we needed.",
        date: "September 2022",
      },
      {
        id: 5,
        name: "Casey",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.6,
        comment:
          "apt is on a corner st. traffic is very loud. other 3 Apts are college students which are also very loud. great place if you're 20. Not so great if you got to go to work at 6am!",
        date: "November 2022",
      },
      {
        id: 6,
        name: "Sam",
        location: "New Zealand",
        avatar: HOME02IMG2,
        rating: 4.8,
        comment:
          "My two friends and I stayed at Ash’s bnb while we were salmon fishing in Oswego. Place was clean and in a prime location. Would stay here again.",
        date: "August 2022",
      },
    ],
  },
];
