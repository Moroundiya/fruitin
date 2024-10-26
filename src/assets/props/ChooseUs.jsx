import { motion } from "framer-motion";
import React from "react";

export const ChooseUs = ({ desc, title, img }) => {
	const childrenVariants = {
		hidden: { x: 100, opacity: 0, scale: 0 },
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
	};
	return (
		<motion.div
			className="bg-white rounded-xl flex lg:justify-center lg:items-center lg:flex-col xl:flex-row overflow-hidden shadow-lg"
			variants={childrenVariants}>
			<div className="relative min-w-fit">
				<div className=" bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] absolute lg:relative xl:absolute lg:mt-4 xl:mt-0 lg:top-0 lg:left-0 xl:-top-[90px] xl:-left-4 -top-4 -left-3 border-[10px] border-[#F5F7EB]">
					<img
						className="w-5/5"
						src={img}
						alt=""
					/>
				</div>
			</div>
			<div className="py-8 px-5 lg:pt-3 lg:pb-4 xl:py-8 ">
				<p className="font-bold text-xl mb-2 text-center">{title}</p>
				<p className="text-[15px] leading-[1.5] text-center text-[#54595F] lg:leading-[1.6]">
					{desc}
				</p>
			</div>
		</motion.div>
	);
};
