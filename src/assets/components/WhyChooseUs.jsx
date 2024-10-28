/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import titleIcon from "../images/title_icon.svg";
import rotateImg from "../images/choose-rotate.png";
import chooseImg from "../images/why-choose-us.png";
import { chooseus } from "./../data/chooseus";
import { ChooseUs } from "../props/ChooseUs";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";
export const WhyChooseUs = () => {
	const {
		bounceDown,
		slideRight,
		slideLeft,
		parentVariant,
	} = useContext(ProductContext);
	return (
		<div className="w-full min-h-fit justify-center overflow-x-clip px-3 items-center lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 mt-24 lg:mt-3 font-lexend 2xl:mt-16 lg:mx-auto relative pb-16">
			<motion.div
				className="lg:hidden w-full flex flex-col justify-center items-center absolute top-0 left-0 -z-10 overflow-x-clip"
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{
					scale: 1,
					opacity: 1,
					transition: {
						duration: 2,
						bounce: 0.4,
						type: "spring",
					},
				}}>
				<img
					src={rotateImg}
					className="w-4/5 -top-20 right-7 absolute sm:w-2/4 sm:left-1/4 animate-spin-slow"
					alt=""
				/>
			</motion.div>
			<motion.img
				src={chooseImg}
				className="right-0 top-0 sm:relative sm:w-3/4 sm:left-[50px] sm:top-auto lg:hidden lg:absolute lg:right-0 lg:left-auto xl:block xl:w-5/12 xl:top-16 2xl:w-auto 2xl:top-0  z-30"
				alt=""
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{
					scale: 1,
					opacity: 1,
					transition: {
						duration: 2,
						bounce: 0.4,
						type: "spring",
					},
				}}
			/>
			<div className="flex flex-col lg:flex-row">
				<div className="xl:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center items-center xl:justify-start xl:items-start ">
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
						<p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
							Why Choose Us
						</p>
					</motion.div>
					<motion.h1
						className="mt-3 mb-4 text-center text-2xl lg:text-3xl lg:leading-[1.2] font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-5 lg:mt-5 xl:w-5/6 mx-auto xl:mx-0"
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						Nourish Your Body with Pure Organic Goodness!
					</motion.h1>
					<motion.p
						className="text-md leading-[1.5] text-[#54595F] lg:leading-[1.6] lg:w-5/6 mx-auto text-center xl:mx-0 xl:text-left"
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						Governments have regulations in place to ensure that products
						labeled as organic meet specific standards. Regular inspections and
						audits are conducted to maintain the integrity of the organic label.
					</motion.p>
				</div>
				<motion.div
					className="w-1/2 relative hidden xl:block"
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{
						scale: 1,
						opacity: 1,
						transition: {
							duration: 2,
							bounce: 0.4,
							type: "spring",
						},
					}}>
					<img
						src={rotateImg}
						className="absolute lg:w-3/5 xl:top-0 lg:right-8 xl:right-12 2xl:-top-20 animate-spin-slow"
						alt=""
					/>
					<img
						src={chooseImg}
						className="absolute w-4/5 right-0 top-20 xl:hidden"
						alt=""
					/>
				</motion.div>
			</div>
			<div className="flex w-full bottom-0 min-h-fit left-0 bg-[#F5F7EB] rounded-[30px] mt-8">
				<div className="w-full xl:w-7/12 2xl:w-1/2 mx-auto xl:mx-0 px-3 py-5 xl:pe-0 xl:ps-6 lg:py-7">
					<motion.div
						className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 justify-center items-center gap-x-6 gap-y-7 rounded-xl w-full lg-w-fit"
						variants={parentVariant}
						initial="hidden"
						whileInView="visible">
						{chooseus.map((item, i) => (
							<ChooseUs
								key={i}
								{...item}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};
