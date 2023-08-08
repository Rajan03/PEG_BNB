import type {AppProps} from "next/app";
import {Poppins} from "next/font/google";

import {Navbar} from "@/components";
import {LoginModal, SignUpModal} from "@/modules/auth";
import Provider from "@/providers/AppProvider";
import "@/styles/globals.css";

const font = Poppins({subsets: ["latin"], weight: ["400", "500", "600"]});
export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <div className={font.className}>
                <Navbar/>

                <main className={"flex min-h-screen flex-col items-center justify-between"}>
                    <LoginModal/>
                    <SignUpModal/>
                    <Component {...pageProps} />
                </main>
            </div>
        </Provider>
    );
}
