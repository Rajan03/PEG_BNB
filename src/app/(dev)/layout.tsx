import React from "react";
import '../../styles/globals.css';
import {Montserrat} from "@next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={"text-[82.5%]"}>
      <head />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
