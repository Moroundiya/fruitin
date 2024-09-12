// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import titleIcon from "../images//title_icon.svg";
import testiImg from "../images/testi_img.jpg";
import testiShape from "../images/testi_box_shape.png";
import testiProfile from "../images/testi_profile.jpg";
import testiQuote from "../images/quote.png";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonial = () => {
	const slideReviewRef = useRef();
	const [handleSlide, setHandleSlide] = useState({
		isFirst: true,
		isLast: false,
	});
	// eslint-disable-next-line no-unused-vars
	const slidechange = (swiper) => {
		setHandleSlide({
			isFirst: swiper.isBeginning,
			isLast: swiper.isEnd,
		});
	};

	return (
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
				<div className="w-3/6">
					<img
						src={testiImg}
						className="hidden lg:block h-full w-full"
						alt=""
					/>
				</div>
				<div className="w-[90px]">
					<img
						src={testiShape}
						className="hidden lg:block h-full -ms-4 "
						alt=""
					/>
				</div>

				<div className="px-3 py-6 lg:p-8 xl:p-10 relative w-full lg:w-full xl:w-4/6">
					<img
						src={testiQuote}
						className="absolute bottom-16 right-3 lg:right-20 lg:bottom-24 h-[60px] lg:h-[80px] xl:h-auto xl:bottom-6"
						alt=""
					/>
					<div className="">
						<Swiper
							// navigation={true}
							modules={[Navigation]}
							ref={slideReviewRef}
							loop={true}
							onChange={slidechange}
							className="">
							<SwiperSlide className="">
								<p className="italic text-md text-[#54595F] mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl">
									“Diversity is a cornerstone of our farming philosophy. We
									carefully select a wide range of crops, ensuring a varied and
									balanced ecosystem. This not only helps to naturally deter
									pests and diseases but also promotes soil health by varying
									the nutrient demands of different plants.”
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
										<p className="text-[#017D03] text-sm">
											Customer of Our Shop
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<p className="italic text-md text-[#54595F] mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl">
									“Diversity is a cornerstone of our farming philosophy. We
									carefully select a wide range of crops, ensuring a varied and
									balanced ecosystem. This not only helps to naturally deter
									pests and diseases but also promotes soil health by varying
									the nutrient demands of different plants.”
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
										<p className="text-[#017D03] text-sm">
											Customer of Our Shop
										</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<p className="italic text-md text-[#54595F] mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl">
									“Diversity is a cornerstone of our farming philosophy. We
									carefully select a wide range of crops, ensuring a varied and
									balanced ecosystem. This not only helps to naturally deter
									pests and diseases but also promotes soil health by varying
									the nutrient demands of different plants.”
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
										<p className="text-[#017D03] text-sm">
											Customer of Our Shop
										</p>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>

						<div className="flex mt-10 space-x-5 lg:space-x-5 lg:mt-16">
							<button
								disabled={handleSlide.isFirst}
								className={`${
									handleSlide.isFirst
										? "bg-[#017d033e] p-2 rounded-full cursor-pointer"
										: "bg-[#017D03] p-2 rounded-full cursor-pointer"
								}`}
								onClick={() => slideReviewRef.current.swiper.slidePrev()}>
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
								onClick={() => slideReviewRef.current.swiper.slideNext()}>
								<Icon
									icon="ion:arrow-forward"
									className="text-white rounded-full text-[1.3rem] lg:text-2xl"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
