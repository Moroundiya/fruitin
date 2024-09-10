// import React from "react";
import { Icon } from "@iconify/react";
import heroArrow from "../images/hero_arrow.svg";
import heroShape1 from "../images/hero_shape_1_1.png";
import heroShape2 from "../images/hero_shape_1_2.png";
import heroShape3 from "../images/hero_shape_1_3.png";
import heroUnderlay from "../images/hero_shape_2_1.png";
import heroImg1 from "../images/hero_2_1.png";
import heroImg2 from "../images/hero_2_2.png";
import heroImg3 from "../images/hero_2_3.png";
import titleIcon from "../images//title_icon.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Navbar } from "./Navbar";
import { heroswiper } from "../data/heroswiper";
import { HeroSwiper } from "../props/HeroSwiper";

export const Header = () => {
    return (
        <>
            <Navbar />

            <Swiper
                onTouchMove={(e) => e.preventDefault()}
                direction={"vertical"}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true,
                }}
                modules={[Pagination, EffectFade, Autoplay]}
                className=""
                id="heroSwiper"
                effect="fade"
                fadeEffect={{
                    crossfade: false,
                }}
                autoplay={{
                    delay: 2500,
                }}
            >
                {
                    heroswiper.map((item, i) => {
                        return (
                            <SwiperSlide className="w-full flex justify-center items-center bg-heroBg bg-cover bg-center bg-no-repeat">
                                <HeroSwiper key={i} {...item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

