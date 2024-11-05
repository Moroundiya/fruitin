/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProductContext } from "../../App";
export const CartSingleItem = ({
	img,
	name,
	price,
	quantity,
	item,
	increaseQuantity,
	index,
	reduceQuantity,
	overall,
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
		<tr className="text-center border border-[#FF9C00] font-light block w-full lg:table-row overflow-x-hidden">
			<td className="w-full lg:w-auto flex justify-end items-center px-5 lg:px-0 lg:table-cell border-b border-[#FF9C00] lg:border-b-0 before:content-['Image'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
				<motion.img
					src={img}
					className="lg:mx-auto h-20"
					alt=""
					variants={zoomUp}
					initial="hidden"
					whileInView="visible"
				/>
			</td>
			<motion.td
				className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Product_Name'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold "
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				{name}
			</motion.td>
			<motion.td
				className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Price'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold "
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				${price}
			</motion.td>
			<motion.td
				className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Quantity'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold "
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				<motion.div
					className="flex justify-center items-center space-x-4 "
					variants={slideLeft}
					initial="hidden"
					whileInView="visible">
					<button
						onClick={() => reduceQuantity(index)}
						className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
						<Icon icon="iconoir:minus" />
					</button>

					<p className="">{quantity}</p>

					<button
						onClick={() => increaseQuantity(index)}
						className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
						<Icon icon="iconoir:plus" />
					</button>
				</motion.div>
			</motion.td>
			<motion.td
				className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell relative lg:border-b-0 before:content-['Total'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold "
				variants={slideRight}
				initial="hidden"
				whileInView="visible">
				${item.total()}
			</motion.td>
		</tr>
	);
};
