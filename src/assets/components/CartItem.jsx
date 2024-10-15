import React, { useContext, useEffect, useState } from "react";
import titleIcon from "../images/title_icon.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import cart1 from "../images/cart1.jpg";
import cart2 from "../images/cart2.jpg";
import cart3 from "../images/cart3.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { ProductContext } from "../../App";
import { CartSingleItem } from "./CartSingleItem";
export const CartItem = () => {
	const { storeCart, setStoreCart } = useContext(ProductContext);

	const [quantityIncrease, setQuantityIncrease] = useState(0);

	const addQuantity = (val) => {
		// setQuantityIncrease(quantityIncrease + 1);
		return (val = {
			quantity: function () {
				this.quantity + 1
			},
			...val,
		});
	};

	useEffect(() => {
		// console.log(quantityIncrease);
	}, [quantityIncrease]);

	return (
		<div className="w-full min-h-full font-lexend mt-0 py-16 px-3 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative">
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
						<table className="table-auto mt-14 w-full border-none">
							<thead className="border">
								<tr className="bg-[#017D03] text-white hidden lg:table-row space-y-10">
									<th className="block lg:table-cell p-2.5 lg:p-5">Image</th>
									<th className="block lg:table-cell ">Product Name</th>
									<th className="block lg:table-cell">Price</th>
									<th className="block lg:table-cell">Quantity</th>
									<th className="block lg:table-cell">Total</th>
									<th className="block lg:table-cell"></th>
								</tr>
							</thead>
							<tbody className="block lg:table-row-group space-y-16 lg:space-y-0">
								{storeCart.map((item, i) => {
									return (
										<CartSingleItem
											key={i}
											item={item}
											{...item}
											addQuantity={addQuantity}
										/>
									);
								})}

								{/* <tr className="text-center border border-b border-[#FF9C00] font-light block w-full lg:table-row">
									<td className="w-full lg:w-auto flex justify-end items-center px-5 lg:px-0 lg:table-cell border-b border-[#FF9C00] lg:border-b-0 before:content-['Image'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
										<img
											src={cart2}
											className="lg:mx-auto"
											alt=""
										/>
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Product_Name'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										Green Cauliflower
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Price'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										$10
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Quantity'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										<div className="flex justify-center items-center space-x-4 ">
											<button className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
												<Icon icon="iconoir:minus" />
											</button>

											<p className="">1</p>

											<button className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
												<Icon icon="iconoir:plus" />
											</button>
										</div>
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Total'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										$10
									</td>

									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell relative border-[#FF9C00] lg:border-b-0 before:content-[''] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
										<Icon
											icon="ion:trash-outline"
											className="text-center lg:mx-auto text-2xl cursor-pointer text-red-500"
										/>
									</td>
								</tr>
								<tr className="text-center border border-b border-[#FF9C00] font-light block w-full lg:table-row">
									<td className="w-full lg:w-auto flex justify-end items-center px-5 lg:px-0 lg:table-cell border-b border-[#FF9C00] lg:border-b-0 before:content-['Image'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
										<img
											src={cart3}
											className="lg:mx-auto"
											alt=""
										/>
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Product_Name'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										Mandarin orange
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Price'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										$25
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Quantity'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										<div className="flex justify-center items-center space-x-4 ">
											<button className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
												<Icon icon="iconoir:minus" />
											</button>

											<p className="">1</p>

											<button className="border px-1.5 py-0.5 border-gray-300 font-semibold rounded-sm hover:bg-[#017D03] hover:text-white transition-all ease-in-out duration-300">
												<Icon icon="iconoir:plus" />
											</button>
										</div>
									</td>
									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Total'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold ">
										$25
									</td>

									<td className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell relative border-[#FF9C00] lg:border-b-0 before:content-[''] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
										<Icon
											icon="ion:trash-outline"
											className="text-center lg:mx-auto text-2xl cursor-pointer text-red-500"
										/>
									</td>
								</tr> */}
							</tbody>
						</table>
						<div className="w-full flex justify-end items-center my-5">
							<Link
								to="/shop"
								className='bg-[#FF9C00] text-sm text-center capitalize py-3 px-6 rounded-full text-white lg:text-[1rem] z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
								continue shopping
							</Link>
						</div>

						<div className="w-full h-auto flex justify-end my-10">
							<div className="w-full h-full lg:w-1/2">
								<p className="text-xl lg:text-3xl font-semibold">Cart Totals</p>
								<table className="table-auto w-full mt-2 lg:mt-5">
									<tr className="">
										<td className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]">
											Cart Subtotal
										</td>
										<td className="border border-[#FF9C00] w-1/2 font-light p-3">
											$47
										</td>
									</tr>
									<tr className="">
										<td className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]">
											Shipping and Handling
										</td>
										<td className="border border-[#FF9C00] w-1/2 font-light px-3 py-4">
											<div className="flex items-center mb-2 lg:mb-3">
												<input
													id="default-radio-1"
													type="radio"
													defaultValue=""
													name="default-radio"
													className="w-4 h-4 cursor-pointer accent-green-600"
												/>
												<label
													htmlFor="default-radio-1"
													className="ms-2 font-normal text-black cursor-pointer">
													Free Shipping
												</label>
											</div>
											<div className="flex items-center">
												<input
													defaultChecked=""
													id="default-radio-2"
													type="radio"
													defaultValue=""
													name="default-radio"
													className="w-4 h-4 cursor-pointer accent-green-600"
												/>
												<label
													htmlFor="default-radio-2"
													className="ms-2 font-normal text-black cursor-pointer">
													Shipping Fee
												</label>
											</div>
										</td>
									</tr>
									<tr className="">
										<td className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]">
											Total Order
										</td>
										<td className="border border-[#FF9C00] w-1/2 font-light p-3">
											$84
										</td>
									</tr>
								</table>

								<div className="w-full flex justify-start items-center mt-5 mb-16">
									<Link
										to="/checkout"
										className='bg-[#017D03] text-sm text-center capitalize py-3 px-6 rounded-full text-white lg:text-[1rem] z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
										Proceed to checkout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
