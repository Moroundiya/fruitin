// eslint-disable-next-line no-unused-vars
import React from "react";

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
				speed={1200}
				fadeEffect={{
					crossFade: false,
				}}
				autoplay={{
					delay: 2500,
				}}>
				{heroswiper.map((item, i) => {
					return (
						<SwiperSlide
							key={i}
							className="w-full flex justify-center items-center bg-heroBg bg-cover bg-center bg-no-repeat">
							<HeroSwiper
								{...item}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};
