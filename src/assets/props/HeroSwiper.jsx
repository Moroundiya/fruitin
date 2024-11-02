// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

import { Icon } from "@iconify/react";
import heroArrow from "../images/hero_arrow.svg";
import heroShape1 from "../images/hero_shape_1_1.png";
import heroShape2 from "../images/hero_shape_1_2.png";
import heroShape3 from "../images/hero_shape_1_3.png";
import heroUnderlay from "../images/hero_shape_2_1.png";
import titleIcon from "../images/title_icon.svg";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const HeroSwiper = ({ title1, title2, img }) => {
	const {
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);

	return (
		<motion.div className="w-full xl:w-5/5 2xl:4/5 mx-auto mt-5 sm:mt-20 md:mt-28 lg:mt-[170px] flex flex-col items-center relative pb-5">
			<motion.img
				src={heroShape1}
				className="h-9 absolute top-[46%] left-11 md:left-28 md:top-[40%] lg:hidden xl:block xl:top-[70%] xl:-left-10 2xl:-left-20 2xl:top-[75%]  "
				alt=""
				variants={zoomUp}
				initial="hidden"
				whileInView="visible"
			/>
			<motion.img
				src={heroShape2}
				alt=""
				className="h-12 absolute top-32 right-3 md:right-[15%] lg:right-[55%] xl:right-[60%] lg:top-[30%] lg:hidden xl:block 2xl:top-[5%]"
				variants={zoomUp}
				initial="hidden"
				whileInView="visible"
			/>
			<motion.img
				src={heroShape3}
				alt=""
				className="h-10 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 xl:left-10 xl:top-[60%] lg:hidden xl:block"
				variants={zoomUp}
				initial="hidden"
				whileInView="visible"
			/>
			<div className="lg:flex justify-center items-center">
				<div className="font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2">
					<motion.img
						src={heroArrow}
						className="absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hidden xl:block lg:h-14 lg:-right-5 lg:bottom-20 xl:h-12 xl:bottom-0 xl:right-16 2xl:h-20 2xl:-bottom-5 2xl:right-0"
						alt=""
						variants={slideLeft}
						initial="hidden"
						whileInView="visible"
					/>
					<motion.div
						className="flex items-center justify-center"
						variants={bounceDown}
						initial="hidden"
						whileInView="visible">
						<img
							src={titleIcon}
							className="h-5 lg:h-6"
							alt=""
						/>
						<p className="font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl">
							100% Quality Foods
						</p>
					</motion.div>
					<motion.p
						className="text-white flex flex-col items-center text-[2.8rem] text-center px-3 leading-tight sm:px-0 mx-auto font-bold my-6 sm:mx-auto sm:text-6xl sm:leading-[1.1] lg:text-[4.3rem] xl:text-7xl lg:w-full xl:mt-8 xl:mb-14 2xl:mb-10 xl:leading-[1.2] 2xl:leading-[1.1] 2xl:text-[5.4rem]"
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						<span>{title1}</span>
						<span>{title2}</span>
					</motion.p>

					<motion.div
						variants={bounceUp}
						initial="hidden"
						whileInView="visible">
						<Link
							to="/shop"
							className='bg-[#017D03] w-fit flex justify-center items-center text-[0.95rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5 z-30 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
							Shop Now
							<Icon
								icon="solar:double-alt-arrow-right-linear"
								className="text-white text-2xl pe-0"
							/>
						</Link>
					</motion.div>
				</div>
				<div className="lg:w-1/2 pb-8 lg:pb-0 relative flex justify-center items-center bg-red-40s0">
					<img
						src={heroUnderlay}
						className="absolute w-full h-full -z-10 top-0 left-0"
						alt=""
					/>
					<motion.img
						src={img}
						className="w-full fruit-img"
						alt=""
						variants={zoomUp}
						initial="hidden"
						whileInView="visible"
					/>
				</div>
			</div>
		</motion.div>
	);
};
