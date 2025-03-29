/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import titleIcon from "../images/title_icon.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ProductContext } from "../../App";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export const CheckoutItems = () => {
	const {
		storeCart,
		totalPrice,
		username,
		setUsername,
		address,
		setAddress,
		paymentMethod,
		setPaymentMethod,
		setEmail,
		setNumber,
		email,
		number,
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);

	const navigate = useNavigate();

	useEffect(() => {
	}, [username, address, email, number]);
	return (
		<div className="w-full min-h-full font-lexend mt-0 py-16 px-3 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative overflow-x-hidden overflow-y-clip">
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
						<p className="font-lobster text-[#FF9C00] ms-1 text-lg sm:text-xl">
							Checkout
						</p>
					</motion.div>
					<div className="mt-10 mb-3 w-full mx-auto lg:mb-8 lg:mt-12">
						<motion.h1
							className="text-2xl lg:text-4xl font-bold 2xl:leading-[1.15] text-center"
							variants={bounceUp}
							initial="hidden"
							whileInView="visible">
							Billing Details
						</motion.h1>

						<form
							onSubmit={(e) => {
								e.preventDefault(), navigate("/order");
							}}
							className="flex flex-col items-center lg:items-start">
							<div className="py-10 w-full lg:w-4/6 mx-auto relative z-20">
								<motion.div
									className="grid md:grid-cols-2 gap-x-10 gap-y-5"
									variants={parentVariant}
									initial="hidden"
									whileInView="visible">
									<motion.div
										className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
										variants={childrenVariants}>
										<Icon
											icon="basil:user-outline"
											className="text-3xl text-[#FF9C00]"
										/>
										<input
											type="text"
											placeholder="Name"
											className="w-full h-full bg-transparent outline-none border-none ms-1 placeholder:font-light"
											// value={name}
											required
											onChange={(e) => setUsername(e.target.value)}
										/>
									</motion.div>

									<motion.div
										className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
										variants={childrenVariants}>
										<Icon
											icon="ic:outline-email"
											className="text-2xl text-[#FF9C00]"
										/>
										<input
											type="email"
											placeholder="Email Address"
											className="w-full h-full bg-transparent outline-none border-none ms-2 placeholder:font-light"
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</motion.div>
									<motion.div
										className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
										variants={childrenVariants}>
										<Icon
											icon="solar:phone-outline"
											className="text-2xl text-[#FF9C00]"
										/>
										<input
											type="tel"
											placeholder="Mobile Number"
											className="w-full h-full bg-transparent outline-none border-none ms-2 placeholder:font-light"
											onChange={(e) => setNumber(e.target.value)}
											required
										/>
									</motion.div>

									<motion.div
										className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
										variants={childrenVariants}>
										<Icon
											icon="mdi:address-marker-outline"
											className="text-2xl text-[#FF9C00]"
										/>
										<input
											type="text"
											placeholder="Address"
											className="w-full h-full bg-transparent outline-none border-none ms-2 placeholder:font-light"
											required
											onChange={(e) => setAddress(e.target.value)}
										/>
									</motion.div>
								</motion.div>
							</div>

							<motion.h1
								className="text-2xl lg:text-3xl mt-5 font-bold 2xl:leading-[1.15] text-center"
								variants={bounceUp}
								initial="hidden"
								whileInView="visible">
								Your Order:
							</motion.h1>
							<table className="table-auto mt-5 w-full border-none">
								<thead className="border">
									<motion.tr
										className="bg-[#017D03] text-white hidden lg:table-row space-y-10"
										variants={bounceDown}
										initial="hidden"
										whileInView="visible">
										<th className="block lg:table-cell p-2.5 lg:p-5">Image</th>
										<th className="block lg:table-cell ">Product Name</th>
										<th className="block lg:table-cell">Price</th>
										<th className="block lg:table-cell">Quantity</th>
										<th className="block lg:table-cell">Total</th>
									</motion.tr>
								</thead>
								<tbody className="block lg:table-row-group space-y-16 lg:space-y-0">
									{storeCart.map((item, i) => {
										return (
											<tr
												key={i}
												className="text-center border border-[#FF9C00] font-light block w-full lg:table-row">
												<td className="w-full lg:w-auto flex justify-end items-center px-5 lg:px-0 lg:table-cell border-b border-[#FF9C00] lg:border-b-0 before:content-['Image'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold">
													<motion.img
														src={item.img}
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
													{item.name}
												</motion.td>
												<motion.td
													className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Price'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold "
													variants={slideRight}
													initial="hidden"
													whileInView="visible">
													${item.price}
												</motion.td>
												<motion.td
													className="w-full lg:w-auto flex justify-end items-center px-3 py-3 lg:py-0 lg:px-0 lg:table-cell border-b relative border-[#FF9C00] lg:border-b-0 before:content-['Quantity'] before:lg:hidden before:absolute before:left-3 before:text-black before:font-bold"
													variants={slideRight}
													initial="hidden"
													whileInView="visible">
													<div className="flex justify-center items-center space-x-4 ">
														<p className="">{item.quantity}</p>
													</div>
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
									})}
								</tbody>
							</table>

							<table className="mt-10 w-full lg:w-1/2">
								<tr className="">
									<motion.td
										className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]"
										variants={slideRight}
										initial="hidden"
										whileInView="visible">
										Subtotal
									</motion.td>
									<motion.td
										className="border border-[#FF9C00] w-1/2 font-light p-3"
										variants={slideLeft}
										initial="hidden"
										whileInView="visible">
										${totalPrice}
									</motion.td>
								</tr>
								<tr className="">
									<motion.td
										className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]"
										variants={slideRight}
										initial="hidden"
										whileInView="visible">
										Shipping Fee
									</motion.td>
									<motion.td
										className="border border-[#FF9C00] w-1/2 font-light px-3 py-4"
										variants={slideLeft}
										initial="hidden"
										whileInView="visible">
										FREE
									</motion.td>
								</tr>
								<tr className="">
									<motion.td
										className="border border-[#FF9C00] w-1/3 font-semibold p-3 bg-[#7681811a]"
										variants={slideRight}
										initial="hidden"
										whileInView="visible">
										Total Order
									</motion.td>
									<motion.td
										className="border border-[#FF9C00] w-1/2 p-3 text-xl font-semibold text-[#017D03]"
										variants={slideLeft}
										initial="hidden"
										whileInView="visible">
										${totalPrice}
									</motion.td>
								</tr>
							</table>

							<motion.div
								className="mt-8 w-full mb-20"
								variants={parentVariant}
								initial="hidden"
								whileInView="visible">
								<motion.div
									className="flex mb-2 lg:mb-3 flex-col"
									variants={childrenVariants}>
									<div className="flex items-center">
										<input
											id="default-radio-1"
											type="radio"
											defaultValue="1"
											onChange={() => setPaymentMethod("Direct Bank Transfer")}
											name="default-radio"
											className="w-5 h-5 cursor-pointer accent-green-600"
											required
										/>
										<label
											htmlFor="default-radio-1"
											className="ms-2 font-normal text-black cursor-pointer text-md lg:text-lg">
											Direct bank transfer
										</label>
									</div>

									<p
										className={`ms-7 text-[#a1b1bc] bg-[#ecf0f1]  border-[#d8d8d8] font-light  text-sm lg:w-fit transition-all ease-in-out duration-500 overflow-hidden max-h-0 px-2 ${
											paymentMethod == "Direct Bank Transfer"
												? "max-h-[120px] lg:max-h-[100px] py-2 border my-2"
												: " max-h-0 border-none"
										}`}>
										Make your payment directly into our bank account. Please use
										your Order ID as the payment reference. Your order will not
										be shipped until the funds have cleared in our account.
									</p>
								</motion.div>
								<motion.div
									className="flex mb-2 lg:mb-3 flex-col"
									variants={childrenVariants}>
									<div className="flex items-center">
										<input
											defaultChecked=""
											id="default-radio-2"
											type="radio"
											onChange={() => setPaymentMethod("Cheque Payment")}
											defaultValue="2"
											name="default-radio"
											className="w-5 h-5 cursor-pointer accent-green-600"
											required
										/>
										<label
											htmlFor="default-radio-2"
											className="ms-2 font-normal text-black cursor-pointer text-md lg:text-lg">
											Cheque Payment
										</label>
									</div>
									<p
										className={`ms-7 text-[#a1b1bc] bg-[#ecf0f1] border overflow-hidden max-h-0 border-[#d8d8d8] font-light px-2 text-sm lg:w-fit transition-all ease-in-out duration-500 ${
											paymentMethod == "Cheque Payment"
												? "max-h-[100px] py-2 border my-2"
												: " max-h-0 border-none"
										}`}>
										Please send a check to Store Name, Store Street, Store Town,
										Store State / County, Store Postcode.
									</p>
								</motion.div>
								<motion.div
									className="flex mb-2 lg:mb-3 flex-col"
									variants={childrenVariants}>
									<div className="flex items-center">
										<input
											defaultChecked=""
											id="default-radio-3"
											type="radio"
											onChange={() => setPaymentMethod("Credit Card")}
											defaultValue="3"
											name="default-radio"
											className="w-5 h-5 cursor-pointer accent-green-600"
											required
										/>
										<label
											htmlFor="default-radio-3"
											className="ms-2 font-normal text-black cursor-pointer text-md lg:text-lg">
											Credit Card
										</label>
									</div>
									<p
										className={`ms-7 text-[#a1b1bc] bg-[#ecf0f1] border overflow-hidden max-h-0 border-[#d8d8d8] font-light px-2 text-sm lg:w-fit transition-all ease-in-out duration-500 ${
											paymentMethod == "Credit Card"
												? "max-h-[100px] py-2 border my-2"
												: " max-h-0 border-none"
										}`}>
										Pay with cash upon delivery.
									</p>
								</motion.div>
								<motion.div
									className="flex mb-2 lg:mb-3 flex-col"
									variants={childrenVariants}>
									<div className="flex items-center">
										<input
											defaultChecked=""
											id="default-radio-4"
											type="radio"
											defaultValue="4"
											onChange={() => setPaymentMethod("Paypal")}
											name="default-radio"
											className="w-5 h-5 cursor-pointer accent-green-600"
											required
										/>
										<label
											htmlFor="default-radio-4"
											className="ms-2 font-normal text-black cursor-pointer text-md lg:text-lg">
											Paypal
										</label>
									</div>
									<p
										className={`${
											paymentMethod == "Paypal"
												? "max-h-[100px] py-2 border my-2"
												: " max-h-0 border-none"
										} ms-7 text-[#a1b1bc] bg-[#ecf0f1] border overflow-hidden max-h-0 border-[#d8d8d8] font-light px-2 text-sm lg:w-fit transition-all ease-in-out duration-500`}>
										Pay via PayPal; you can pay with your credit card if you
										don’t have a PayPal account.
									</p>
								</motion.div>
								<motion.div
									className="w-full flex justify-start items-center my-8"
									variants={slideRight}
									initial="hidden"
									whileInView="visible">
									<button
										type="submit"
										className='bg-[#017D03] text-sm text-center capitalize py-3 px-6 rounded-full text-white lg:text-[1rem] z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
										Place Order
									</button>
								</motion.div>
							</motion.div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
