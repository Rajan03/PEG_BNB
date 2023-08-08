import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Poppins } from 'next/font/google';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Button } from '@/components'
import { ModalProps } from '@/types/appTypes'


const font = Poppins({ subsets: ["latin"], weight: ['100', "200", "300", '400', '500', '600'] });

export default function Modal(props: ModalProps) {
    const { dialogFor, isOpen, disable, title, subtitle, primaryAction, secondaryAction, primaryActionCallback, secondaryActionCallback, onClose, footer } = props;

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className={"relative z-10 " + font.className} onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    {/* MODAL TITLE */}
                                    <div className='h-[3.5rem] border-b border-neutral-200 flex justify-center items-center p-6'>
                                        <IoIosCloseCircleOutline className="absolute top-[1rem] left-5 w-6 h-6 cursor-pointer text-gray-900 hover:text-primary-600
                                            hover:scale-105 transition-all" onClick={onClose} />
                                        <p className='text-lg font-medium text-gray-900'>{dialogFor}</p>
                                    </div>

                                    <Dialog.Title as="h3" className="text-xl font-bold px-6 text-gray-900 mt-4">{title}</Dialog.Title>

                                    {/* MODAL DESCRIPTION */}
                                    <Dialog.Description as="p" className="text-sm text-gray-500 font-light mt-1.5 px-6">
                                        {subtitle}
                                    </Dialog.Description>

                                    {/* MODAL BODY */}
                                    <div className="mt-3 p-6">{props.children}</div>

                                    {/* MODAL ACTIONS */}
                                    <div className="flex justify-start items-center gap-x-3 px-6 mt-3">
                                        <Button label={primaryAction} onClick={primaryActionCallback} disabled={disable} small className='w-full' />
                                        {secondaryAction && secondaryActionCallback && (
                                            <Button label={secondaryAction} onClick={secondaryActionCallback} disabled={disable} theme='neutral'
                                                small className='w-full' />)}
                                    </div>

                                    {/* MODAL FOOTER */}
                                    {footer ? <div className="mt-2 p-6">{footer}</div> : <div className="mt-2 p-6" />}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
