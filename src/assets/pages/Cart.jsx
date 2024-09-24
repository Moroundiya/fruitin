import React from "react";
import titleIcon from "../images/title_icon.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import { Navbar } from "../components/Navbar";

import cart1 from '../images/cart1.jpg';
import cart2 from '../images/cart2.jpg';
import cart3 from '../images/cart3.jpg';
import { Icon } from "@iconify/react/dist/iconify.js";

export const Cart = () => {
	return (
		<>
			<Navbar />

			<div className="w-full min-h-full font-lexend mt-0 py-16 px-3 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative ">
				<img
					src={productBg1}
					className="absolute top-0 left-0 pointer-events-none h-full"
					alt=""
				/>
				<img
					src={productBg2}
					className="absolute bottom-0 right-0 pointer-events-none h-full"
					alt=""
				/>
				<div className="w-full xl:w-11/12 2xl:w-4/5 mx-auto z-20 relative top-10 lg:top-[72px] ">
					<div className="flex flex-col justify-center items-center">
						<div className="flex items-center justify-center lg:justify-start">
							<img
								src={titleIcon}
								className="h-5"
								alt=""
							/>
							<p className="font-lobster text-[#FF9C00] ms-1 text-lg sm:text-xl">
								Cart
							</p>
						</div>
						<div className="mt-2 mb-3 w-full mx-auto lg:mb-8 lg:mt-5">
							<h1 className="text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] text-center">
								Cart Details
							</h1>

							<table className="table-auto mt-20 w-full border-2 border-[#eaf0f2] ">
								<thead className="border">
									<tr className="bg-[#eaf0f2] text-black hidden lg:table-row space-y-10">
										<th className="block lg:table-cell p-2.5 lg:p-5">Image</th>
										<th className="block lg:table-cell ">Product Name</th>
										<th className="block lg:table-cell">Price</th>
										<th className="block lg:table-cell">Quantity</th>
										<th className="block lg:table-cell">Total</th>
										<th className="block lg:table-cell"></th>
									</tr>
								</thead>
								<tbody className="block lg:table-row-group space-y-0">


									<tr className="text-center border-2 border-b border-[#eaf0f2] font-light block w-full lg:table-row space-y-10 mb-16">
										<td className="block lg:table-cell border-b lg:border-b-0">
											<img src={cart1} className="mx-auto" alt="" />
										</td>
										<td className="block lg:table-cell border-b lg:border-b-0">Bosco Apple Fruit</td>
										<td className="block lg:table-cell border-b lg:border-b-0">$18</td>
										<td className="block lg:table-cell border-b lg:border-b-0">1972</td>
										<td className="block lg:table-cell border-b lg:border-b-0">$18</td>
										<td className="block lg:table-cell border-b lg:border-b-0"><Icon icon="ion:trash-outline" className="text-center mx-auto text-2xl cursor-pointer text-red-500" /></td>
									</tr>


									<tr className="text-center  border-2 border-b border-[#eaf0f2] font-light ">
										<td className="flex justify-center items-center w-full">
											<img src={cart2} className="" alt="" />
										</td>
										<td>Green Cauliflower</td>
										<td>$18</td>
										<td>1972</td>
										<td>$18</td>
										<td className=""><Icon icon="ion:trash-outline" className="text-center mx-auto text-2xl cursor-pointer text-red-500" /></td>

									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
