import { StaticImageData } from "next/image";

export interface LabelValue {
  label: string;
  value: string;
}

export interface NameIcon {
  name: string;
  icon: JSX.Element;
}

export type MenuProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: JSX.Element;
};

export type Property = {
  id: number;
  title: string;
  slug: string;
  location: string;
  amenities: NameIcon[];
  topFeatures: NameIcon[];
  overview: string;
  images: StaticImageData[];
  rating: number;
  price: number | string;
  reviews: Review[];
};

export type Review = {
  id: number;
  name: string;
  location: string;
  avatar: StaticImageData;
  rating: number;
  comment: string;
  date: string;
};

export type ContactFormData = {
    name: string;
    email: string;
    message: string;

}

export type BookingFormData = {
    name: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    property: Property;
}
