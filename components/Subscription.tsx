'use client'

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import PackageCard from "./PackageCard";

import { packages } from "@/constants";
import { CustomButton, CustomFilter, CustomPackageFilter } from ".";

interface SubscriptionProps {
    isOpen: boolean;
    closeModal: () => void;
}

const Subscription = ({ isOpen, closeModal }: SubscriptionProps) => {
    return (
        <form>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-200"
                        leaveTo="opacity-0"
                    >

                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-200 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-s-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5'
                                >
                                    <button
                                        type='button'
                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </button>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-cover bg-center rounded-lg">
                                            <Image
                                                src="/premium-membership.png"
                                                alt="premium"
                                                fill priority
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="flex gap-3">
                                            {
                                                packages.map((subscriptionPackage) => (
                                                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                        <PackageCard subscriptionPackage={subscriptionPackage} />
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className='home__filters'>
                                            <div className='home__filter-container w-full px-10'>
                                                <CustomPackageFilter title='packages' options={packages} />
                                            </div>
                                        </div>
                                        <div className="input-type w-full px-10 py-2">
                                            <input type="text" name="phone" className="border rounded-empty w-full h-8 text-center" placeholder="0712345678"/>

                                        </div>

                                        <div className="w-full py-2 px-10">
                                            <CustomButton
                                                title="Send M-Pesa STK Push"
                                                containerStyles="bg-green-500 text-white rounded-full mt-5 w-full"
                                                btnType='submit'
                                            // handleClick={() => setIsOpen(true)}
                                            />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>




                </Dialog>
            </Transition>
        </form>
    )
}

export default Subscription