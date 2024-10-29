import React, { useContext } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";

export const CartSlideoutItem = ({ img, name, price, index, remProd }) => {
	const { childrenVariants } = useContext(ProductContext);
	return (
		<motion.div
			className="py-3 border-b flex w-full"
			variants={childrenVariants}>
			<div className="flex justify-between items-center w-full">
				<div className="flex items-center">
					<img
						src={img}
						alt=""
						className="w-[75px] me-3"
					/>
					<div>
						<p className="text-[#017D03] font-semibold">{name}</p>
						<p className="text-[#54595F] text-sm">${price}</p>
					</div>
				</div>
				<Icon
					icon="iconoir:cancel"
					className="text-[#FF9C00] text-2xl cursor-pointer"
					onClick={() => remProd(index)}
				/>
			</div>
		</motion.div>
	);
};
