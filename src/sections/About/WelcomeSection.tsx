'use client';

import {SectionHeader, SimpleButton} from "@/components";
import {EB_Garamond} from "@next/font/google";

const Font = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

type Props = {
    title: string;
    subtitle: string;
    description: string;
    action: string;

    className?: string;

}
export default function WelcomeSection(props: Props): JSX.Element {
    const {title, subtitle, description, action, className} = props;

    return (
        <>
            <div className={"container mx-auto flex flex-col justify-start items-center " + className}>
                <SectionHeader title={title} subtitle={subtitle} />

                <p className={'mt-16 text-neutral-500 text-2xl max-w-[50%] tracking-widest leading-[3rem]' +
                    ' text-center ' + Font.className}>
                    {description}
                </p>

                <SimpleButton action={action} clickHandler={() => console.log('clicked')} className={'mt-16 py-5' +
                    ' px-8'} />
            </div>
        </>
    )
}
