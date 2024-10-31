import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProductContext } from "../../App";

export const TestimonialProps = ({ name, review, img, desc }) => {
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
		<>
			<motion.p
				className="italic text-md text-[#54595F] mb-7 lg:mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl"
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				{review}
			</motion.p>
			<div className="flex items-center">
				<motion.img
					src={img}
					className="rounded-full h-[45px] lg:h-[60px]"
					alt=""
					variants={zoomUp}
					initial="hidden"
					whileInView="visible"
				/>
				<div className="ms-3">
					<motion.p
						className="text-black text-lg lg:text-2xl font-semibold"
						variants={bounceDown}
						initial="hidden"
						whileInView="visible">
						{name}
					</motion.p>
					<motion.p
						className="text-[#017D03] text-sm"
						initial={{ y: -50, opacity: 0 }}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: {
								type: "spring",
								duration: 2,
								bounce: 0.7,
							},
						}}>
						{desc}
					</motion.p>
				</div>
			</div>
		</>
	);
};
