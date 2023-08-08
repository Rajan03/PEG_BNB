import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";

interface IProviderProps {
    children: React.ReactNode;
    session: Session | null | undefined;
}

export default function Provider({children, session}: IProviderProps) {
    return (
        <>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </>
    )
}
