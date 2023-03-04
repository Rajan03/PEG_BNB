import Link from "next/link";
import {HiOutlineMail, HiOutlinePhone} from "react-icons/hi";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {Logo} from "@/components";
import {NavRoutes} from "@/constant/data";

export default function Footer() {

    return (
        <footer className="bg-white text-primary-600 min-h-[20rem] border-t border-t-primary-50">
            <div className="container mx-auto px-6 py-8">
                {/* Logo, Social, Navigation and Contact Info */}
                <div className="flex flex-row justify-between items-start gap-x-16">
                    {/* LOGO & COPYRIGHT */}
                    <div className="flex flex-col justify-start items-start">
                        <Logo/>
                        <p className="mt-6 text-lg">© 2023 PEGBnb. All rights reserved.</p>

                        <div className="flex flex-row justify-start items-center gap-x-6 mt-12">
                            <a href="https://www.facebook.com/">
                                <FaFacebook className="h-9 w-9 text-blue-500"/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <FaInstagram className="h-9 w-9 text-red-500"/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <FaWhatsapp className="h-9 w-9 text-green-500"/>
                            </a>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div className="hidden sm:flex flex-col justify-start items-stretch gap-y-9">
                        <h1 className="text-3xl tracking-wider font-medium">Navigation</h1>
                        <ul className="flex flex-col justify-start items-start gap-9">
                            {NavRoutes.map((route, index) => (
                                <li key={index}>
                                    <Link href={route.path} className="hover:text-primary-300 text-xl font-light">
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="flex flex-col justify-start items-start gap-y-9">
                        <h1 className="text-3xl tracking-wider font-medium">Contact</h1>
                        <ul className="flex flex-col justify-start items-start gap-9">
                            <li className="text-xl font-light flex flex-row justify-start items-center gap-2">
                                <HiOutlinePhone className="h-7 w-7 inline-block mr-2"/>
                                +1 234 567 890
                            </li>
                            <li className="text-xl font-light flex flex-row justify-start items-center gap-2">
                                <HiOutlineMail className="h-7 w-7 inline-block mr-2"/>
                                <a href="mailto:example@gmail.com">
                                    Send us an email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navigation Links in Mobile View */}
                <ul className="flex sm:hidden flex-row justify-end items-center gap-12 mt-12">
                    {NavRoutes.map((route, index) => (
                        <li key={index}>
                            <Link href={route.path} className="hover:text-primary-300 text-xl font-light">
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
