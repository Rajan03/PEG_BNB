'use client';
import {CardWithIcon} from "@/components";

type Props = {
    address: { title: string, description: string, icon: JSX.Element },
    phone: { title: string, description: string, icon: JSX.Element },
    email: { title: string, description: string, icon: JSX.Element },

    className?: string;
}

export default function ContactInfo(props: Props): JSX.Element {
    const {address, phone, email, className} = props;

    return (
        <>
            <div className={'container mx-auto flex flex-col md:flex-row justify-between md:justify-evenly' +
                ' items-center gap-y-16 ' + className}>
                <CardWithIcon title={address.title} icon={address.icon} description={address.description}
                              className={'min-w-[28rem] max-w-[28rem]'}/>
                <CardWithIcon title={email.title} icon={email.icon} description={email.description}
                              className={'min-w-[28rem] max-w-[28rem]'}/>
                <CardWithIcon title={phone.title} icon={phone.icon} description={phone.description}
                              className={'min-w-[28rem] max-w-[28rem]'}/>
            </div>
        </>
    )
}
