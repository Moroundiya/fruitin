// eslint-disable-next-line no-unused-vars
import React from 'react'
import faqImgRound from "../images/faq_img.jpg";
import titleIcon from "../images//title_icon.svg";
import { Icon } from "@iconify/react";


export const Faq = () => {
    return (
        <div className="w-full min-h-fit bg-faqBg bg-[#F5F7EB] bg-center bg-contain lg:bg-cover bg-no-repeat lg:px-12">
            <div className="w-full h-full lg:flex lg:space-x-8 font-lexend mt-0 px-3 py-10 lg:px-12 lg:py-16 xl:py-24 xl:mx-auto xl:px-20">
                <div className="lg:w-2/5 bg-faqVectorBg bg-center bg-contain bg-no-repeat flex justify-center items-center">
                    <div className='h-full relative p-7 before:content-[""] before:border-2 before:rounded-full  before:border-[#017D03] before:border-dashed before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-10'>
                        <img
                            src={faqImgRound}
                            className="rounded-full relative z-50 h-full"
                            alt=""
                        />
                    </div>
                </div>
                <div className="lg:w-3/5 mt-10 lg:mt-0">
                    <div className="">
                        <div className="flex items-center justify-center lg:justify-start">
                            <img
                                src={titleIcon}
                                className="h-5"
                                alt=""
                            />
                            <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                                Looking For Answers?
                            </p>
                        </div>
                        <h1 className="mt-2 mb-3 text-center text-2xl lg:text-3xl lg:leading-[1.2] capitalize font-bold 2xl:text-[2.5rem] 2xl:leading-[1.2] lg:text-left lg:mb-8 lg:mt-5">
                            Frequently Asked If You Have any Questions?
                        </h1>
                        <div className="mt-8 lg:mt-0 space-y-4 lg:space-y-5">
                            <div className="w-full bg-white shadow-md rounded-lg">
                                <div>
                                    <div className="flex justify-between items-center cursor-pointer py-3 px-6">
                                        <p className="text-[0.96rem] lg:text-[1.09rem]">
                                            Do I need to be in when you deliver ?
                                        </p>
                                        <Icon
                                            icon="clarity:eye-hide-line"
                                            className="text-[1.4rem] text-[#017D03]"
                                        />
                                    </div>

                                    <div className="font font-light pt-4 pb-5 text-[#54595F] border-[#D9D9D9] leading-[1.5] px-6 border-t text-[0.91rem] lg:text-[0.95rem]">
                                        <p>
                                            Our organic farm, we begin with the foundation of
                                            healthy, nutrient-rich soil. We employ sustainable
                                            practice such as crop rotation cover cropping and
                                            composting. This helps maintain soil fertility,
                                            structure, and microbial diversity. By avoiding
                                            synthetic fertilizers and pesticides, we allow natural
                                            processes to flourish.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-white shadow-md rounded-lg">
                                <div>
                                    <div className="flex justify-between items-center cursor-pointer py-3 px-6">
                                        <p className="text-[0.96rem] lg:text-[1.09rem]">
                                            Do I have to order every week ?
                                        </p>
                                        <Icon
                                            icon="hugeicons:view"
                                            className="text-[1.4rem] text-[#017D03]"
                                        />
                                    </div>
                                    {/* <div className='font font-light pt-4 pb-5 text-[#54595F] border-[#D9D9D9] leading-[1.5] px-6 border-t text-[0.95rem]'>
                                    <p>Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility, structure, and microbial diversity. By avoiding synthetic fertilizers and pesticides, we allow natural processes to flourish.</p>
                                </div> */}
                                </div>
                            </div>
                            <div className="w-full bg-white shadow-md rounded-lg">
                                <div>
                                    <div className="flex justify-between items-center cursor-pointer py-3 px-6">
                                        <p className="text-[0.96rem] lg:text-[1.09rem]">
                                            From its medieval origins the digital ?
                                        </p>
                                        <Icon
                                            icon="hugeicons:view"
                                            className="text-[1.4rem] text-[#017D03]"
                                        />
                                    </div>
                                    {/* <div className='font font-light pt-4 pb-5 text-[#54595F] border-[#D9D9D9] leading-[1.5] px-6 border-t text-[0.95rem]'>
                                    <p>Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility, structure, and microbial diversity. By avoiding synthetic fertilizers and pesticides, we allow natural processes to flourish.</p>
                                </div> */}
                                </div>
                            </div>
                            <div className="w-full bg-white shadow-md rounded-lg">
                                <div>
                                    <div className="flex justify-between items-center cursor-pointer py-3 px-6">
                                        <p className="text-[0.96rem] lg:text-[1.09rem]">
                                            What is Your Pricing Structure ?
                                        </p>
                                        <Icon
                                            icon="hugeicons:view"
                                            className="text-[1.4rem] text-[#017D03]"
                                        />
                                    </div>
                                    {/* <div className='font font-light pt-4 pb-5 text-[#54595F] border-[#D9D9D9] leading-[1.5] px-6 border-t text-[0.95rem]'>
                                    <p>Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility, structure, and microbial diversity. By avoiding synthetic fertilizers and pesticides, we allow natural processes to flourish.</p>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
