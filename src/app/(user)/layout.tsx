import { Poppins } from "@next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components";

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
      <html lang="en" className={"text-[45%] sm:text-[52%] xl:text-[64.5%]"}>
        <body
          className={
            poppins.className + " scrollbar-hide min-h-screen bg-white"
          }
        >
          {/* Navbar */}
          <Navbar />

          {/* Children */}
          <div className="min-h-[calc(100vh_-_8rem)]">{children}</div>

          {/* Footer */}
        </body>
      </html>
    </>
  );
}
