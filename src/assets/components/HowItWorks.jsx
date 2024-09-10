// eslint-disable-next-line no-unused-vars
import React from 'react'
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import titleIcon from "../images//title_icon.svg";
import processImg1 from "../images/process_box_1.jpg";
import processImg2 from "../images/process_box_2.jpg";
import processImg3 from "../images/process_box_3.jpg";
import processImg4 from "../images/process_box_4.jpg";
import processIcon1 from "../images/process_box_1.svg";
import processIcon2 from "../images/process_box_2.svg";
import processIcon3 from "../images/process_box_3.svg";
import processIcon4 from "../images/process_box_4.svg";

export const HowItWorks = () => {
    return (
        <div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-10 lg:px-12 lg:pb-16 lg:pt-12 xl:pt-20 xl:10 bg-[#fff] xl:mx-auto xl:px-0 relative">
            <img
                src={productBg1}
                className="absolute top-0 left-0 -z-0 xl:h-full"
                alt=""
            />
            <img
                src={productBg2}
                className="absolute bottom-0 right-0 xl:h-full"
                alt=""
            />
            <div className="flex items-center justify-center lg:justify-start">
                <img
                    src={titleIcon}
                    className="h-5"
                    alt=""
                />
                <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                    How We Make Quality Foods
                </p>
            </div>
            <div className="mt-2 w-4/5 mb-10 text-center text-2xl lg:text-3xl font-bold lg:w-full mx-auto 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-12 lg:mt-5">
                <h1 className="text-center">How We Work It?</h1>
            </div>

            <div className="mt-3 lg:mt-0 w-full xl:w-11/12 2xl:w-4/5 mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-14 lg:gap-y-20 xl:gap-y-0 xl:gap-x-7 2xl:gap-x-10 relative z-20 px-3 lg:px-0 lg:pb-24">
                <div className="flex justify-center items-center flex-col text-center px-3 lg:px-0">
                    <div className="mb-6 relative">
                        <div className="clip bg-white flex justify-center items-center cursor-pointer group">
                            <img
                                src={processIcon1}
                                alt=""
                                className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <img
                            src={processImg1}
                            className="mask"
                            alt=""
                        />
                    </div>
                    <p className="text-[#54595F] uppercase">Step - 01</p>
                    <p className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold">
                        Work Planning
                    </p>
                    <p className="text-[#54595F] font-normal text-[0.95rem]">
                        Begin by conducting thorough soil tests to understand its
                        composition, pH levels, and nutrient.
                    </p>
                </div>

                <div className="flex justify-center items-center flex-col text-center px-3 lg:px-0 xl:relative top-[60px]">
                    <div className="mb-6 relative">
                        <div className="clip bg-white flex justify-center items-center cursor-pointer group">
                            <img
                                src={processIcon2}
                                alt=""
                                className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <img
                            src={processImg2}
                            className="mask"
                            alt=""
                        />
                    </div>
                    <p className="text-[#54595F] uppercase">Step - 02</p>
                    <p className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold">
                        Farm Growing
                    </p>
                    <p className="text-[#54595F] font-normal text-[0.95rem]">
                        Begin by conducting thorough soil tests to understand its
                        composition, pH levels, and nutrient.
                    </p>
                </div>

                <div className="flex justify-center items-center flex-col text-center px-3 lg:px-0">
                    <div className="mb-6 relative">
                        <div className="clip bg-white flex justify-center items-center cursor-pointer group">
                            <img
                                src={processIcon3}
                                alt=""
                                className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <img
                            src={processImg3}
                            className="mask"
                            alt=""
                        />
                    </div>
                    <p className="text-[#54595F] uppercase">Step - 03</p>
                    <p className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold">
                        Crop Harvesting
                    </p>
                    <p className="text-[#54595F] font-normal text-[0.95rem]">
                        Begin by conducting thorough soil tests to understand its
                        composition, pH levels, and nutrient.
                    </p>
                </div>

                <div className="flex justify-center items-center flex-col text-center px-3 lg:px-0 xl:relative top-[60px]">
                    <div className="mb-6 relative">
                        <div className="clip bg-white flex justify-center items-center cursor-pointer group">
                            <img
                                src={processIcon4}
                                alt=""
                                className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <img
                            src={processImg4}
                            className="mask"
                            alt=""
                        />
                    </div>
                    <p className="text-[#54595F] uppercase">Step - 04</p>
                    <p className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold">
                        Food Processing
                    </p>
                    <p className="text-[#54595F] font-normal text-[0.95rem]">
                        Begin by conducting thorough soil tests to understand its
                        composition, pH levels, and nutrient.
                    </p>
                </div>
            </div>
        </div>
    )
}
