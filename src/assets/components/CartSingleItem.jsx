import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
export const CartSingleItem = ({
	img,
	name,
	price,
	quantity,
	item,
	addQuantity,
}) => {
	return (
		<tr className="text-center border border-b border-[#FF9C00] font-light block w-full lg:table-row">
			<td className="w-full lg:w-auto flex justify-end items-center px-5 lg:px-0 lg:table-cell border-b border-[#FF9C00] lg:border-b-0 before:content-['Image'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
				<img
					src={img}
					className="lg:mx-auto h-20"
					alt=""
				/>
			</td>
			<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Product_Name'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
				{name}
			</td>
			<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Price'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
				${price}
			</td>
			<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Quantity'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
				<div className="flex justify-center items-center space-x-4 ">
					<button className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
						<Icon icon="iconoir:minus" />
					</button>

					<p className="">{quantity}</p>

					<button
						onClick={() => {
							{addQuantity(item), console.log(item);};
						}}
						className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
						<Icon icon="iconoir:plus" />
					</button>
				</div>
			</td>
			<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Total'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
				${item.total()}
			</td>
		</tr>
	);
};
