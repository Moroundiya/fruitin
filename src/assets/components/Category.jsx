/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import titleIcon from "../images//title_icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { category } from "../data/category";
import { CategoryProps } from "../props/CategoryProps";

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
				{category.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<CategoryProps
								key={i}
								{...item}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="flex mt-3 space-x-5 lg:space-x-5">
				<button
					disabled={handleSlide.isFirst}
					className={`${
						handleSlide.isFirst
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
					className={`${
						handleSlide.isLast
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
	);
};
