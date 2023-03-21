import React from "react";
import {Poppins} from "@next/font/google";
import "@/styles/globals.css";
import {Footer, Navbar, SiteActions} from "@/components";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html
                lang="en"
                className={"text-[45%] sm:text-[52%] xl:text-[64.5%] scrollbar-hide"}
            >
            <body className={poppins.className + " bg-white relative"}>
            {/* Navbar */}
            <Navbar/>

            {/* Children */}
            <div className="min-h-screen">{children}</div>
            <div className="sidebar"/>
            <div className="modal"/>

            {/* Site Actions */}
            <SiteActions/>

            {/* FOOTER SECTION */}
            <Footer/>
            </body>
            </html>
        </>
    );
}
