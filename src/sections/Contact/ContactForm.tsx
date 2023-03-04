import {SectionHeader} from "@/components";

type Props = {
    className?: string;
}
export default function ContactForm({className}: Props): JSX.Element {

    return (
        <>
            <div className={"container mx-auto flex flex-col justify-start items-center " + className}>
                <SectionHeader title={'Get in touch with us'} subtitle={'Contact Form'} />

                <form className={'mt-16 w-full max-w-[80%] md:max-w-[50%] flex flex-col justify-start items-center'}>
                    <div className={'flex flex-col justify-start items-start w-full'}>
                        <label htmlFor={'name'} className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                            ' text-left mb-4'}>Name</label>
                        <input type={'text'} id={'name'} name={'name'} className={'w-full h-16 px-4 text-neutral-500' +
                            ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                            ' focus:outline-none focus:border-neutral-500'} />
                    </div>

                    <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                        <label htmlFor={'email'} className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                            ' text-left mb-4'}>Email</label>
                        <input type={'email'} id={'email'} name={'email'} className={'w-full h-16 px-4 text-neutral-500' +
                            ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                            ' focus:outline-none focus:border-neutral-500'} />
                    </div>

                    <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                        <label htmlFor={'message'} className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                            ' text-left mb-4'}>Message</label>
                        <textarea id={'message'} name={'message'} className={'w-full h-32 px-4 text-neutral-500' +
                            ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                            ' focus:outline-none focus:border-neutral-500'} />
                    </div>
                </form>
            </div>
        </>
    )
}
