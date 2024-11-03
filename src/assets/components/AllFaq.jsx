/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import titleIcon from "../images/title_icon.svg";
import { allfaq } from "../data/allfaq";
import { AllQuestions } from "../props/AllQuestions";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";

export const AllFaq = () => {
	const [open, setOpen] = useState(null);
	const showAnswerHandle = (num) => {
		setOpen(open == num ? null : num);
	};

	const {
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);

	useEffect(() => {
		// console.log(open);
	}, [open]);
	return (
		<div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative">
			<img
				src={productBg1}
				className="absolute top-0 left-0 pointer-events-none"
				alt=""
			/>
			<img
				src={productBg2}
				className="absolute bottom-0 right-0 pointer-events-none"
				alt=""
			/>
			<motion.div
				className="flex items-center justify-center lg:justify-start"
				variants={bounceDown}
				initial="hidden"
				whileInView="visible">
				<img
					src={titleIcon}
					className="h-5"
					alt=""
				/>
				<p className="font-lobster text-[#FF9C00] ms-1 text-lg sm:text-xl">
					Faq
				</p>
			</motion.div>
			<motion.div
				className="mt-2 w-4/5 mb-3 text-center text-2xl lg:text-3xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5"
				variants={bounceUp}
				initial="hidden"
				whileInView="visible">
				<h1 className="text-center lg:w-1/3 mx-auto">
					Frequently Asked Have Any Question?
				</h1>
			</motion.div>

			<div className="px-3 lg:mt-5 w-full xl:w-11/12 2xl:w-4/5 mx-auto relative z-20">
				<motion.div
					className="mt-8 lg:mt-0 lg:gap-x-10 lg:columns-2"
					variants={parentVariant}
					initial="hidden"
					whileInView="visible">
					{allfaq.map((item, i) => (
						<AllQuestions
							key={i}
							{...item}
							index={i}
							showAnswerHandle={showAnswerHandle}
							open={open}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};
