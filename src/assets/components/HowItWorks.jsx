// eslint-disable-next-line no-unused-vars
import React from "react";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import titleIcon from "../images//title_icon.svg";
import { howitworks } from "../data/howitworks";
import { HowItWorksProps } from "../props/HowItWorksProps";

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
				{howitworks.map((item, i) => (
					<HowItWorksProps
						key={i}
						{...item}
					/>
				))}
			</div>
		</div>
	);
};
