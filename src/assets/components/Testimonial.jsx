// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import titleIcon from "../images/title_icon.svg";
import testiImg from "../images/testi_img.jpg";
import testiShape from "../images/testi_box_shape.png";
import testiQuote from "../images/quote.png";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
// import required modules
// eslint-disable-next-line no-unused-vars
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import { TestimonialProps } from "../props/TestimonialProps";

export const Testimonial = () => {
	const slideReviewRef = useRef();
	const [handleSlide, setHandleSlide] = useState({
		isPrev: true,
		isNext: false,
	});
	const slidechange = (swiper) => {
		setHandleSlide({
			isPrev: swiper.isBeginning,
			isNext: swiper.isEnd,
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
						className="absolute bottom-16 right-3 lg:right-20 lg:bottom-24 h-[60px] lg:h-[80px] z-20 xl:h-auto xl:bottom-6"
						alt=""
					/>
					<div className="">
						<Swiper
							// navigation={true}
							modules={[Navigation, Autoplay]}
							ref={slideReviewRef}
							loop={true}
							speed={1000}
							spaceBetween={150}
							onSlideChange={slidechange}
							autoplay={{
								delay: 2300,
							}}
							className="">

							{
								testimonials.map((item, i) => {
									return (
										<SwiperSlide key={i}>
											<TestimonialProps key={i} {...item} />
										</SwiperSlide>
									)
								})
							}

						</Swiper>

						<div className="flex mt-10 space-x-5 lg:space-x-5 lg:mt-16">
							<button
								disabled={handleSlide.isPrev}
								className={`${handleSlide.isPrev
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
								disabled={handleSlide.isNext}
								className={`${handleSlide.isNext
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
