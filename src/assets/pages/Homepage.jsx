import React, { useRef, useState } from "react";
import logoWhite from "../images/logo-white.svg";
import titleIcon from "../images//title_icon.svg";
import heroImg1 from "../images/hero_2_1.png";
import heroImg2 from "../images/hero_2_2.png";
import heroImg3 from "../images/hero_2_3.png";
import bullet from "../images/bullet.svg";
import cardBg from "../images/card-bg.png";
import vegetable from "../images/vegetable.svg";
import circleBg from "../images/circle-bg.png";
import fruits from "../images/fruit.svg";
import productsImg from "../images/product.svg";
import tea from "../images/tea.svg";
import meat from "../images/meat.svg";
import rotateImg from "../images/choose-rotate.png";
import chooseImg from "../images/why-choose-us.png";
import chooseImg1 from "../images/choose1.svg";
import chooseImg2 from "../images/choose2.svg";
import chooseImg3 from "../images/choose3.svg";
import chooseImg4 from "../images/choose4.svg";
import counter1 from "../images/counter_card_1.svg";
import counter2 from "../images/counter_card_2.svg";
import counter3 from "../images/counter_card_3.svg";
import counter4 from "../images/counter_card_4.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import product1 from "../images/product_1_1.jpg";
import product2 from "../images/product_1_2.jpg";
import product3 from "../images/product_1_3.jpg";
import product4 from "../images/product_1_4.jpg";
import product5 from "../images/product_1_5.jpg";
import product6 from "../images/product_1_6.jpg";
import product7 from "../images/product_1_7.jpg";
import product8 from "../images/product_1_8.jpg";
import processImg1 from "../images/process_box_1.jpg";
import processImg2 from "../images/process_box_2.jpg";
import processImg3 from "../images/process_box_3.jpg";
import processImg4 from "../images/process_box_4.jpg";
import processIcon1 from "../images/process_box_1.svg";
import processIcon2 from "../images/process_box_2.svg";
import processIcon3 from "../images/process_box_3.svg";
import processIcon4 from "../images/process_box_4.svg";
import faqImgRound from "../images/faq_img.jpg";
import testiImg from "../images/testi_img.jpg";
import testiShape from "../images/testi_box_shape.png";
import testiProfile from "../images/testi_profile.jpg";
import testiQuote from "../images/quote.png";
import footerBg1 from "../images/footer_shape_1.png";
import footerBg2 from "../images/footer_shape_2.png";
import footerEmail from "../images/email.svg";
import footerLogo from "../images/logo-footer.svg";

import paymentMethod from '../images/payment-method.png';


import heroImg4 from "../images/hero_1_1.png";
import heroImg5 from "../images/hero_1_2.png";
import heroImg6 from "../images/hero_1_3.png";

import { Icon } from "@iconify/react";
import heroArrow from "../images/hero_arrow.svg";
import heroShape1 from "../images/hero_shape_1_1.png";
import heroShape2 from "../images/hero_shape_1_2.png";
import heroShape3 from "../images/hero_shape_1_3.png";
import heroUnderlay from "../images/hero_shape_2_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { Header } from "../components/Header";
import { AboutUs } from "../components/AboutUs";
import { Category } from "../components/Category";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Counter } from "../components/Counter";
import { Products } from "../components/Products";
import { HowItWorks } from "../components/HowItWorks";
import { Faq } from "../components/Faq";

export const Homepage = () => {
    const slideRef = useRef();
    const [handleSlide, setHandleSlide] = useState({
        isFirst: true,
        isLast: false,
    });
    const slidechange = (swiper) => {
        setHandleSlide({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };
    return (
        <>
            <Header />
            <AboutUs />
            <Category />
            <WhyChooseUs />
            <Counter />
            <Products />
            <HowItWorks />
            <Faq />




            <div className="w-full min-h-fit flex flex-col justify-center items-center px-3 font-lexend py-10 lg:px-12 lg:py-16 lg:bg-transparent xl:mx-auto xl:px-0">
                <div className="flex items-center justify-center lg:justify-start">
                    <img
                        src={titleIcon}
                        className="h-5"
                        alt=""
                    />
                    <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                        Testimonials
                    </p>
                </div>
                <h1 className="mt-2 mb-5 text-center text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5">
                    Our Customer Feedback
                </h1>

                <div className="w-full flex px-3 h-auto rounded-3xl overflow-hidden lg:px-0 xl:w-11/12 2xl:w-4/5 mx-auto bg-testiBg bg-contain bg-right bg-no-repeat bg-[#F5F7EB]">
                    <img
                        src={testiImg}
                        className="hidden lg:block h-full"
                        alt=""
                    />
                    <img
                        src={testiShape}
                        className="hidden lg:block h-full -ms-4"
                        alt=""
                    />

                    <div className="px-3 py-6 lg:p-10 relative">
                        <img
                            src={testiQuote}
                            className="absolute bottom-16 right-3 lg:right-20 lg:bottom-24 h-[60px] lg:h-[80px] xl:h-auto xl:bottom-6"
                            alt=""
                        />
                        <p className="italic text-md text-[#54595F] mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl">
                            “Diversity is a cornerstone of our farming philosophy. We
                            carefully select a wide range of crops, ensuring a varied and
                            balanced ecosystem. This not only helps to naturally deter pests
                            and diseases but also promotes soil health by varying the nutrient
                            demands of different plants.”
                        </p>
                        <div className="flex items-center">
                            <img
                                src={testiProfile}
                                className="rounded-full h-[45px] lg:h-[60px]"
                                alt=""
                            />
                            <div className="ms-3">
                                <p className="text-black text-lg lg:text-2xl font-semibold">
                                    Angelina Margret
                                </p>
                                <p className="text-[#017D03] text-sm">Customer of Our Shop</p>
                            </div>
                        </div>

                        <div className="flex mt-10 space-x-5 lg:space-x-5 lg:mt-16">
                            <button
                                className={`${!handleSlide.isFirst
                                    ? "bg-[#017d033e] p-2 lg:p-3 rounded-full cursor-pointer"
                                    : "bg-[#017D03] p-2 lg:p-3 rounded-full cursor-pointer"
                                    }`}
                                onClick={() => slideRef.current.swiper.slidePrev()}>
                                <Icon
                                    icon="ion:arrow-back"
                                    className="text-white rounded-full text-[1.3rem] lg:text-2xl"
                                />
                            </button>
                            <button
                                className={`${!handleSlide.isLast
                                    ? "bg-[#017d033e] p-2 lg:p-3 rounded-full cursor-pointer"
                                    : "bg-[#017D03] p-2 lg:p-3 rounded-full cursor-pointer"
                                    }`}
                                onClick={() => slideRef.current.swiper.slideNext()}>
                                <Icon
                                    icon="ion:arrow-forward"
                                    className="text-white rounded-full text-[1.3rem] lg:text-2xl"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className=" bg-[#002D00] h-auto pt-12 lg:pt-20 mt-10 relative font-lexend">
                <img
                    src={footerBg1}
                    className="absolute top-0 left-0 h-auto lg:h-full pointer-events-none"
                    alt=""
                />
                <img
                    src={footerBg2}
                    className="absolute bottom-0 lg:top-0 right-0 h-auto lg:h-full pointer-events-none"
                    alt=""
                />
                <div className="w-full h-full justify-center px-3 items-center lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 lg:mx-auto relative z-50">
                    <div className="w-full lg:flex justify-between items-center">
                        <div className="w-full lg:w-1/2 justify-center lg:justify-start flex items-center space-x-5 mb-6 lg:mb-0">
                            <img
                                src={footerEmail}
                                alt=""
                                className="h-10 lg:h-auto"
                            />
                            <p className="text-xl text-center sm:text-left lg:text-[1.8rem] leading-[1.2] text-white lg:w-4/5 xl:w-3/5 font-semibold">
                                Sign Up to Get Updates & News About Us.
                            </p>
                        </div>

                        <form className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <input
                                type="email"
                                required
                                className="bg-white rounded-md text-sm px-3 py-2.5 outline-none border-none w-[320px] placeholder:font-light placeholder:text-gray-400 lg:text-md"
                                placeholder="Email Address"
                                name=""
                                id=""
                            />
                            <button
                                type="submit"
                                className='bg-[#017D03] min-w-fit text-[0.8rem] text-white uppercase rounded-lg ms-2 lg:text-sm px-2 lg:px-4 z-50 overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <hr className="h-px my-10 lg:my-16 bg-[#017d0380] border-0" />
                    <div className="lg:flex justify-center pb-20 space-y-10 lg:space-y-0">
                        <div className="lg:w-1/3">
                            <img
                                src={footerLogo}
                                alt=""
                                className="h-10 lg:h-auto"
                            />
                            <p className="text-[#B5B5B5] my-5 lg:my-10 lg:leading-[1.7] text-[1rem] font-light lg:w-4/5">
                                We provide specialized winterization services to safeguard your
                                pool during the off-season, and when spring arrives, we handle
                                the thorough opening process.
                            </p>

                            <div className="flex space-x-2">
                                <div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
                                    <Icon
                                        icon="ri:facebook-fill"
                                        className=""
                                    />
                                </div>
                                <div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
                                    <Icon icon="mdi:twitter" />
                                </div>
                                <div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
                                    <Icon icon="mdi:linkedin" />
                                </div>
                                <div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
                                    <Icon icon="ic:baseline-whatsapp" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4">
                            <div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
                                <img
                                    src={titleIcon}
                                    className=""
                                    alt=""
                                />
                                <p className="text-xl lg:text-[1.38rem]">Categories</p>
                            </div>
                            <div className="space-y-2.5 lg:space-y-3.5">
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Fresh Vegetable</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Natural Fruits</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Dairy Products</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Tea & Coffee</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Meat and Fish</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/4">
                            <div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
                                <img
                                    src={titleIcon}
                                    className=""
                                    alt=""
                                />
                                <p className="text-xl lg:text-[1.38rem]">Quick Links</p>
                            </div>
                            <div className="space-y-2.5 lg:space-y-3.5">
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>About Us</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Portfolio</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Help & FAQs</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Blog</span>
                                </a>
                                <a href="#" className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
                                    <Icon
                                        icon="tabler:arrow-right"
                                        className="text-xl"
                                    />
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/4">
                            <div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
                                <img
                                    src={titleIcon}
                                    className=""
                                    alt=""
                                />
                                <p className="text-xl lg:text-[1.38rem]">Contact Us</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
                                    <div className='bg-[#123C12] text-[#FF9C00] rounded-lg p-2'>
                                        <Icon icon="mdi:location" className='text-lg' />
                                    </div>
                                    <span className="leading-[1.7]">
                                        8502 Preston Rd. Inglewood, <br />
                                        Maine 98380
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
                                    <div className='bg-[#123C12] text-[#FF9C00] rounded-lg p-2'>
                                        <Icon icon="ion:call-sharp" className="text-lg" />
                                    </div>
                                    <span className="leading-[1.7]">
                                        +(163)-2654-3564 <br />
                                        +(163)-2654-5432
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
                                    <div className='bg-[#123C12] text-[#FF9C00] rounded-lg p-2'>
                                        <Icon icon="fluent:mail-20-filled" className='text-lg' />
                                    </div>
                                    <span className="leading-[1.7]">
                                        help24/7@frutin.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:h-[100px] py-6 lg:py-0 px-3 xl:px-0 bg-subFooterBg bg-top bg-no-repeat bg-cover relative z-50 font-lexend text-white font-light flex flex-col justify-center items-center'>
                    <div className="w-full min-h-fit flex flex-col lg:flex-row justify-between px-3 items-center mt-4 lg:mt-7 lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 lg:mx-auto">
                        <p className="flex flex-col justify-center lg:justify-start items-center mb-3.5 leading-[1.2] text-[0.95rem] lg:text-md lg:mb-0">
                            <p className="flex items-center"> Copyright <Icon icon="ph:copyright" className='mx-[3px] text-xl' /> 2024 Frutin. </p>
                            <p> All Rights Reserved.</p>
                        </p>
                        <div>
                            <img src={paymentMethod} alt="" className="h-5 lg:h-auto" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
