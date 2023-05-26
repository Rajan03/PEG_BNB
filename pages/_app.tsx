import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import { LoginModal, Navbar } from "@/components";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";


const font = Poppins({ subsets: ["latin"], weight: ['400', '500', '600'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className={font.className}>
        <Navbar />

        <main className={"flex min-h-screen flex-col items-center justify-between"}>
          <LoginModal />
          <Component {...pageProps} />
        </main>
      </div>
    </RecoilRoot>
  );
}
