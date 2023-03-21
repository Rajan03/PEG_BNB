'use client'

import {SimpleButton} from "@/components";
import {Modal} from "@/components/Portals";
import React, {useState} from "react";
import {Property} from "@/types/app";

const BookStayForm = (props: { dates: Date[], property:Property }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <SimpleButton
                className={"w-full mt-9"}
                clickHandler={() => setIsOpen(true)}
                disabled={props.dates.length === 0 || props.dates[0] === undefined || props.dates[1] === undefined}
            >
                Book Now
            </SimpleButton>
            <BookStayFormModal isOpen={isOpen} setIsOpen={setIsOpen} dates={props.dates} property={props.property}/>
        </>
    )
}

export default BookStayForm

const BookStayFormModal = ({isOpen, setIsOpen, dates, property}: {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    dates: Date[];
    property: Property;
}) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const onS = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(name, email, phone, dates, property);
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div
                    className="relative min-w-[35rem] min-h-[35rem] bg-white shadow-2xl rounded-2xl"
                >
                    <form onSubmit={onS} className={'mt-16 w-full max-w-[80%] md:max-w-[50%] flex flex-col' +
                        ' justify-start' +
                        ' items-center'}>
                        <div className={'flex flex-col justify-start items-start w-full'}>
                            <label htmlFor={'name'}
                                   className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                       ' text-left mb-4'}>Name</label>
                            <input type={'text'} id={'name'} name={'name'}
                                   className={'w-full h-16 px-4 text-neutral-500' +
                                       ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                       ' focus:outline-none focus:border-neutral-500'} value={name}
                                   onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                            <label htmlFor={'email'}
                                   className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                       ' text-left mb-4'}>Email</label>
                            <input type={'email'} id={'email'} name={'email'}
                                   className={'w-full h-16 px-4 text-neutral-500' +
                                       ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                       ' focus:outline-none focus:border-neutral-500'} value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                            <label htmlFor={'phone'}
                                   className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                       ' text-left mb-4'}>Phone No.</label>
                            <input type={'tel'} id={'phone'} name={'phone'}
                                   className={'w-full h-16 px-4 text-neutral-500' +
                                       ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                       ' focus:outline-none focus:border-neutral-500'} value={phone}
                                   onChange={e => setPhone(e.target.value)}/>
                        </div>

                        <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                            <label htmlFor={'date'}
                                   className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                       ' text-left mb-4'}>From</label>
                            <input type={'date'} id={'date'} name={'date'}
                                   className={'w-full h-16 px-4 text-neutral-500' +
                                       ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                       ' focus:outline-none focus:border-neutral-500'} value={dates[0].toDateString()}/>
                        </div>

                        <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                            <label htmlFor={'date'}
                                   className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                       ' text-left mb-4'}>To</label>
                            <input type={'date'} id={'date'} name={'date'}
                                   className={'w-full h-16 px-4 text-neutral-500' +
                                       ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                       ' focus:outline-none focus:border-neutral-500'} value={dates[1].toDateString()}/>
                        </div>

                        <SimpleButton type={'submit'} className={'mt-16 py-5 px-8' +
                            ' text-2xl tracking-widest leading-[3rem] self-stretch'} action={'Book'}/>
                    </form>
                </div>
            </Modal>
        </>
    )
}
