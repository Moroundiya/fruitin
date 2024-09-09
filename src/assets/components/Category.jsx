import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import titleIcon from "../images//title_icon.svg";
import cardBg from "../images/card-bg.png";
import circleBg from "../images/circle-bg.png";
import vegetable from "../images/vegetable.svg";
import fruits from "../images/fruit.svg";
import productsImg from "../images/product.svg";
import tea from "../images/tea.svg";
import meat from "../images/meat.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export const Category = () => {

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
        <div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend py-10 lg:px-12 lg:pb-16 lg:bg-transparent xl:mx-auto xl:px-0">
            <div className="flex items-center justify-center lg:justify-start">
                <img
                    src={titleIcon}
                    className="h-5"
                    alt=""
                />
                <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                    Food Category
                </p>
            </div>
            <h1 className="mt-2 mb-3 text-center text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5">
                What We’re Offering
            </h1>

            <Swiper
                slidesPerView={5}
                // centeredSlides={true}
                spaceBetween={20}
                // navigation={true}
                ref={slideRef}
                loop={true}
                onSlideChange={slidechange}
                autoplay={{
                    delay: 2300,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper w-full min-h-fit py-5 px-3 xl:w-11/12 xl:px-0 2xl:w-4/5">
                <SwiperSlide>
                    <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
                        <img
                            src={cardBg}
                            className="w-full h-full absolute left-0 top-0"
                            alt=""
                        />
                        <div className="p-5 lg:p-6 rounded-full relative mb-5">
                            <img
                                src={circleBg}
                                className="absolute top-0 left-0 w-full h-full"
                                alt=""
                            />
                            <img
                                src={vegetable}
                                className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                                alt=""
                            />
                        </div>
                        <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                            Product (01)
                        </p>
                        <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                            Fresh Vegetable
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
                        <img
                            src={cardBg}
                            className="w-full h-full absolute left-0 top-0"
                            alt=""
                        />
                        <div className="p-5 lg:p-6 rounded-full relative mb-5">
                            <img
                                src={circleBg}
                                className="absolute top-0 left-0 w-full h-full"
                                alt=""
                            />
                            <img
                                src={fruits}
                                className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                                alt=""
                            />
                        </div>
                        <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                            Product (02)
                        </p>
                        <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                            Natural Fruits
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
                        <img
                            src={cardBg}
                            className="w-full h-full absolute left-0 top-0"
                            alt=""
                        />
                        <div className="p-5 lg:p-6 rounded-full relative mb-5">
                            <img
                                src={circleBg}
                                className="absolute top-0 left-0 w-full h-full"
                                alt=""
                            />
                            <img
                                src={productsImg}
                                className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                                alt=""
                            />
                        </div>
                        <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                            Product (03)
                        </p>
                        <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                            Dairy Products
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
                        <img
                            src={cardBg}
                            className="w-full h-full absolute left-0 top-0"
                            alt=""
                        />
                        <div className="p-5 lg:p-6 rounded-full relative mb-5">
                            <img
                                src={circleBg}
                                className="absolute top-0 left-0 w-full h-full"
                                alt=""
                            />
                            <img
                                src={tea}
                                className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                                alt=""
                            />
                        </div>
                        <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                            Product (04)
                        </p>
                        <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                            Tea & Coffee
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
                        <img
                            src={cardBg}
                            className="w-full h-full absolute left-0 top-0"
                            alt=""
                        />
                        <div className="p-5 lg:p-6 rounded-full relative mb-5">
                            <img
                                src={circleBg}
                                className="absolute top-0 left-0 w-full h-full"
                                alt=""
                            />
                            <img
                                src={meat}
                                className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                                alt=""
                            />
                        </div>
                        <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                            Product (05)
                        </p>
                        <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                            Meat and Fish
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="flex mt-3 space-x-5 lg:space-x-5">
                <button
                    disabled={handleSlide.isFirst}
                    className={`${handleSlide.isFirst
                        ? "bg-[#017d033e] p-2 rounded-full cursor-pointer"
                        : "bg-[#017D03] p-2 rounded-full cursor-pointer"
                        }`}
                    onClick={() => slideRef.current.swiper.slidePrev()}>
                    <Icon
                        icon="ion:arrow-back"
                        className="text-white rounded-full text-[1.3rem] lg:text-2xl"
                    />
                </button>
                <button
                    disabled={handleSlide.isLast}
                    className={`${handleSlide.isLast
                        ? "bg-[#017d033e] p-2 rounded-full cursor-pointer"
                        : "bg-[#017D03] p-2 rounded-full cursor-pointer"
                        }`}
                    onClick={() => slideRef.current.swiper.slideNext()}>
                    <Icon
                        icon="ion:arrow-forward"
                        className="text-white rounded-full text-[1.3rem] lg:text-2xl"
                    />
                </button>
            </div>
        </div>
    )
}
