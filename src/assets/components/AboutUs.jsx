import React from 'react'
import aboutBg from "../images/about_img.png";
import titleIcon from "../images//title_icon.svg";
import bullet from "../images/bullet.svg";
import { Icon } from "@iconify/react";


export const AboutUs = () => {
    return (
        <div className="w-full min-h-fit flex flex-col-reverse font-lexend pt-10 pb-5 bg-aboutBg bg-center bg-contain bg-no-repeat lg:flex-row lg:px-12 xl:w-4/5 lg:py-14 lg:mx-auto">
            <div className="bg-orangeUnderlajy bg-center bg-cover hidden lg:flex bg-no-repeat h-1/2 justify-center lg:justify-start items-center py-8 lg:w-1/2">
                <img
                    src={aboutBg}
                    className="lg:w-4/5"
                    alt=""
                />
            </div>
            <div className="px-3 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-center lg:justify-start">
                    <img
                        src={titleIcon}
                        className="h-5"
                        alt=""
                    />
                    <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                        About Us Company
                    </p>
                </div>
                <h1 className="mt-2 text-center text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mt-5">
                    Organic Integrity Durable Impact Frutin's Story
                </h1>
                <p className="text-md leading-[1.5] my-4 text-[#54595F] lg:my-6 lg:leading-[1.6]">
                    Some studies suggest that organic foods may have higher levels of
                    certain nutrients and antioxidants compared to conventionally grown
                    foods. However, this can vary depending on factors like soil quality
                    and growing conditions.
                </p>
                <ul className="text-black font-semiold space-y-2 xl:columns-2">
                    <li className="flex items-center space-x-2">
                        <img
                            src={bullet}
                            className=""
                            alt=""
                        />
                        <span>100% Organic Products</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img
                            src={bullet}
                            className=""
                            alt=""
                        />
                        <span>Always Fresh & Natural Foods</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img
                            src={bullet}
                            className=""
                            alt=""
                        />
                        <span>Environmental Benefits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img
                            src={bullet}
                            className=""
                            alt=""
                        />
                        <span>No Synthetic Chemicals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img
                            src={bullet}
                            className=""
                            alt=""
                        />
                        <span>Best Prices</span>
                    </li>
                </ul>
                <a
                    href="#"
                    className='bg-[#017D03] w-fit flex justify-center items-center text-[0.8rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto mt-10 lg:mx-0 lg:text-[0.95rem] lg:ps-7 lg:pe-5 z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                    DISCOVER MORE
                    <Icon
                        icon="solar:double-alt-arrow-right-linear"
                        className="text-white text-2xl pe-0"
                    />
                </a>
            </div>
        </div>
    )
}
