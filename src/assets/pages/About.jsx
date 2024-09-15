import React from 'react'
import { Navbar } from '../components/Navbar'

import aboutBg from "../images/about_img.png";
import titleIcon from "../images/title_icon.svg";
import bullet from "../images/bullet.svg";
import { Icon } from "@iconify/react";

import aboutImg1 from '../images/about_1_1.jpg'
import aboutImg2 from '../images/about_1_2.jpg'

import aboutUsBg from '../images/about_us_bg.png'

import featureImg1 from '../images/about_feature_1.svg'
import featureImg2 from '../images/about_feature_2.svg'
import { HowItWorks } from '../components/HowItWorks';
import { Counter } from '../components/Counter';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonial } from '../components/Testimonial';

export const About = () => {
    return (
        <>
            <Navbar />
            <div className='mt-[100px] lg:mt-[170px] '>
                <div className=" w-full min-h-fit flex flex-col font-lexend py-10 bg-no-repeat lg:flex-row lg:px-12 xl:w-4/5 lg:py-14 lg:mx-auto relative">

                    <img src={aboutUsBg} alt="" className='absolute top-0 animate-moveAni' />
                    <div className="px-3 lg:px-0 lg:w-1/2 relative flex justify-center items-center h-[500px] lg:h-auto ">
                        <img
                            src={aboutImg1}
                            className="rounded-xl w-[230px] lg:w-[260px] xl:w-[300px] lg:-ms-10"
                            alt=""
                        />
                        <img
                            src={aboutImg2}
                            className="rounded-xl w-[230px] lg:w-[260px] xl:w-[300px] -mt-[190px] -ms-[120px]"
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
                            Eating Right Start With Organic Food
                        </h1>
                        <p className="text-md leading-[1.5] my-4 text-[#54595F] lg:my-6 lg:leading-[1.6]">
                            Organic foods are produced through a farming system that avoids the use of synthetic pesticides, herbicides, genetically modified organism (GMOs), and artificial fertilizers. Instead, organic farmers rely on natural methods like crop rotation. composting, and biological pest control.
                        </p>
                        <ul className="text-black text-[15px] lg:text-[1.05rem] font-semiold mx-auto lg:mx-0 w-fit mt-5 space-y-5 lg:space-y-0 lg:mt-0 lg:space-x-5 lg:flex justify-center lg:justify-between items-center">
                            <li className="flex items-center space-x-3 font-semibold bg-[#F5F7EB] py-2 ps-4 pe-10 rounded-xl">
                                <img
                                    src={featureImg1}
                                    className="h-11 lg:h-auto"
                                    alt=""
                                />
                                <span className='leading-[1.3]'>The Agriculture <br /> Leader</span>
                            </li>

                            <li className="flex items-center space-x-3 font-semibold bg-[#F5F7EB] py-2 ps-4 pe-10 rounded-xl">
                                <img
                                    src={featureImg2}
                                    className="h-11 lg:h-auto"
                                    alt=""
                                />
                                <span className='leading-[1.3]'>Smart Organic  <br /> Solutions</span>
                            </li>

                        </ul>

                        <div className='border-b border-[#D9D9D9] pb-8 lg:pb-10'>
                        </div>
                        <a
                            href="#"
                            className='bg-[#017D03] w-fit flex justify-center items-center text-[0.8rem] text-center py-3 ps-5 pe-3 rounded-full text-white mx-auto mt-8 lg:mt-10 lg:mx-0 lg:py-4 lg:text-[0.95rem] lg:ps-7 lg:pe-5 z-30 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            DISCOVER MORE
                            <Icon
                                icon="solar:double-alt-arrow-right-linear"
                                className="text-white text-2xl pe-0"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <HowItWorks />
            <Counter />
            <div className='py-6 lg:py-12'>
            </div>
            <WhyChooseUs />
            <div className='-my-10 lg:-my-8'>
            <Testimonial />

            </div>
        </>
    )
}
