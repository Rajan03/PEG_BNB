'use client'

import moment from "moment";
import React, {useState} from "react";
import {SimpleButton} from "@/components";
import {Modal} from "@/components/Portals";
import {Property} from "@/types/app";
import toast from "react-hot-toast";
import {sendBookingForm} from "@/lib/api";

const BookStayForm = (props: { dates: Date[], property: Property }) => {
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

    const onS = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '') {
            toast.error('Please fill all the fields');
            return;
        }

        try {
            await sendBookingForm({
                name, email, phone, property,
                checkIn: moment(dates[0]).format('YYYY-MM-DD'),
                checkOut: moment(dates[1]).format('YYYY-MM-DD'),
            });

            setIsOpen(false);
            setName('');
            setEmail('');
            setPhone('');

            toast.success('Booking form sent successfully');
        } catch (e) {
            toast.error('Something went wrong');
            return;
        }

    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div
                    className="relative min-w-[35rem] min-h-[35rem] bg-white shadow-2xl rounded-2xl overflow-hidden"
                >
                    <form onSubmit={onS} className={'w-full flex flex-col' +
                        ' justify-start items-stretch'}>
                        <div className={'w-full flex flex-col justify-start items-stretch p-6'}>
                            <div className={'flex flex-col justify-start items-start w-full'}>
                                <label htmlFor={'name'}
                                       className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                           ' text-left mb-4'}>Name</label>
                                <input type={'text'} id={'name'} name={'name'} required
                                       className={'w-full h-16 px-4 text-neutral-500' +
                                           ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                           ' focus:outline-none focus:border-neutral-500'} value={name}
                                       onChange={e => setName(e.target.value)}/>
                            </div>

                            <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                                <label htmlFor={'email'}
                                       className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                           ' text-left mb-4'}>Email</label>
                                <input type={'email'} id={'email'} name={'email'} required
                                       className={'w-full h-16 px-4 text-neutral-500' +
                                           ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                           ' focus:outline-none focus:border-neutral-500'} value={email}
                                       onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                                <label htmlFor={'phone'}
                                       className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                           ' text-left mb-4'}>Phone No.</label>
                                <input type={'tel'} id={'phone'} name={'phone'} required
                                       className={'w-full h-16 px-4 text-neutral-500' +
                                           ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                           ' focus:outline-none focus:border-neutral-500'} value={phone}
                                       onChange={e => setPhone(e.target.value)}/>
                            </div>

                            <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                                <label htmlFor={'date'}
                                       className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                           ' text-left mb-4'}>From</label>
                                <input type={'text'} id={'date'} name={'date'} disabled readOnly
                                       className={'w-full h-16 px-4 text-neutral-500' +
                                           ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                           ' focus:outline-none focus:border-neutral-500'}
                                       defaultValue={moment(dates[0]).format('DD MMM, yy')}/>
                            </div>

                            <div className={'flex flex-col justify-start items-start w-full mt-8'}>
                                <label htmlFor={'date'}
                                       className={'text-neutral-500 text-2xl tracking-widest leading-[3rem]' +
                                           ' text-left mb-4'}>To</label>
                                <input type={'text'} id={'date'} name={'date'} disabled readOnly
                                       className={'w-full h-16 px-4 text-neutral-500' +
                                           ' shadow-sm text-2xl tracking-widest leading-[3rem] border border-neutral-300 rounded-lg' +
                                           ' focus:outline-none focus:border-neutral-500'}
                                       defaultValue={moment(dates[1]).format('DD MMM, yy')}/>
                            </div>
                        </div>

                        <SimpleButton type={'submit'} className={'mt-16 py-5 px-8' +
                            ' text-2xl tracking-widest leading-[3rem] self-stretch'} action={'Book'}/>
                    </form>
                </div>
            </Modal>
        </>
    )
}
