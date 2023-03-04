import {
	BuildingLibraryIcon,
	BuildingStorefrontIcon,
	HomeIcon,
	HomeModernIcon,
} from "@heroicons/react/24/solid";
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

const ICONS = {
	cottage: <BuildingLibraryIcon/>,
	home: <HomeIcon/>,
	apartment: <BuildingStorefrontIcon/>,
	villa: <HomeModernIcon/>,
};

// NAVIGATION DATA
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

//  HOME PAGE DATA
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
	description: 'We have successfully boosted occupancy and continue to strive for growth. \n' +
		'We use accurate forecasting and market evaluation to tailor our approach, while campaigns and special offers raise ' +
		'visibility and incentivize customers. We continuously refine our approach to ensure the best outcome. Proven ' +
		'strategies have enabled us to increase occupancy.',
	action: 'Connect with Tenants - List Your Property',
	image: HOME03IMG1,
	benefits: [
		'Increases visibility and exposure',
		'Maximize revenue and occupancy',
		'Strategy tailored to your property',
		'Generate more leads and bookings',
		'Optimize your listing',
	]
}
export const HomeData = {
	heroData,
	popularShortRentals,
	adForStay,
	featuredProperties,
	reviews,
	listMyProperty
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

//  LISTING PAGE DATA
const properties = [
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
];

export const ListingData = {
	properties
}
