/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProductContext } from "../../App";

export const HowItWorksProps = ({
	img1,
	img2,
	step,
	title,
	desc,
	classname,
}) => {
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
		<div
			className={`flex justify-center items-center flex-col text-center px-3 lg:px-0 ${classname}`}>
			<div className="mb-6 relative">
				<motion.div
					className="clip bg-white flex justify-center items-center cursor-pointer group"
					variants={slideRight}
					initial="hidden"
					whileInView="visible">
					<img
						src={img1}
						alt=""
						className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
					/>
				</motion.div>
				<motion.img
					src={img2}
					className="mask"
					alt=""
					variants={zoomUp}
					initial="hidden"
					whileInView="visible"
				/>
			</div>
			<motion.p
				className="text-[#54595F] uppercase"
				variants={slideLeft}
				initial="hidden"
				whileInView="visible">
				{step}
			</motion.p>
			<motion.p
				className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold"
				variants={zoomUp}
				initial="hidden"
				whileInView="visible">
				{title}
			</motion.p>
			<motion.p
				className="text-[#54595F] font-normal text-[0.95rem]"
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				{desc}
			</motion.p>
		</div>
	);
};
