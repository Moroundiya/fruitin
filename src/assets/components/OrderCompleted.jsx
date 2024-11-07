/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../App";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const OrderCompleted = () => {
	const {
		totalPrice,
		username,
		paymentMethod,
		address,
		email,
		number,
		storeCart,
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		zoomUp,
		setStoreCart,
		bounceUp,
	} = useContext(ProductContext);
	const orderdate = new Date().toLocaleDateString();
	const orderID = Math.floor(100000 + Math.random() * 900000);

	const emptyCart = () => {
		setStoreCart([]);
	};
	useEffect(() => {}, [storeCart]);

	return (
		<div className="w-full min-h-fit flex flex-col justify-center items-center px-4 pb-32 font-lexend mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative top-10 lg:top-[72px] overflow-x-clip">
			<motion.div
				variants={zoomUp}
				initial="hidden"
				whileInView="visible">
				<Icon
					icon="icon-park-solid:check-one"
					className="text-[#017D03] text-7xl lg:text-8xl mt-5 lg:mt-10"
				/>
			</motion.div>
			<p className="text-[1.4rem] lg:text-3xl font-bold mt-5 mb-1 text-center flex justify-center items-center flex-col">
				<motion.span
					className="text-[#767676] text-[1rem] font-semibold"
					variants={slideRight}
					initial="hidden"
					whileInView="visible">
					Dear {username},
				</motion.span>
				<motion.span
					variants={zoomUp}
					initial="hidden"
					whileInView="visible">
					Your order is completed!
				</motion.span>
			</p>
			<motion.p
				className="text-[#767676] text-sm text-center"
				variants={slideLeft}
				initial="hidden"
				whileInView="visible">
				Thank you. Your order has been received and ready to be shipped.
			</motion.p>

			<motion.div
				className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 my-10 w-full lg:w-3/5 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0"
				variants={parentVariant}
				initial="hidden"
				whileInView="visible">
				<motion.div
					className="flex flex-col justify-center space-y-1"
					variants={childrenVariants}>
					<p className="text-[#767676] text-sm">Order Number</p>
					<p className="font-semibold">{orderID}</p>
				</motion.div>
				<motion.div
					className="flex flex-col justify-center space-y-1"
					variants={childrenVariants}>
					<p className="text-[#767676] text-sm">Date</p>
					<p className="font-semibold">{orderdate}</p>
				</motion.div>
				<motion.div
					className="flex flex-col justify-center space-y-1"
					variants={childrenVariants}>
					<p className="text-[#767676] text-sm">Total</p>
					<p className="font-semibold">${totalPrice}</p>
				</motion.div>
				<motion.div
					className="flex flex-col justify-center space-y-1"
					variants={childrenVariants}>
					<p className="text-[#767676] text-sm">Payment Method</p>
					<p className="font-semibold">{paymentMethod}</p>
				</motion.div>
			</motion.div>
			<div className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 mb-10 w-full lg:w-3/5">
				<motion.p
					className="text-sm text-[#767676]"
					variants={bounceDown}
					initial="hidden"
					whileInView="visible">
					Order Details
				</motion.p>

				<div className="flex justify-between items-center mt-5">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						PRODUCT
					</motion.p>
					<motion.p
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						SUBTOTAL
					</motion.p>
				</div>
				<motion.div
					className="space-y-2 my-3 border-y border-[#767676c0] text-[#767676] text-sm py-3"
					variants={parentVariant}
					initial="hidden"
					whileInView="visible">
					{storeCart.map((item, i) => {
						return (
							<motion.div
								key={i}
								className="flex justify-between items-center w-full"
								variants={childrenVariants}>
								<p>
									{item.name} x {item.quantity}
								</p>
								<p>${item.price}</p>
							</motion.div>
						);
					})}
				</motion.div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						SUBTOTAL
					</motion.p>
					<motion.p
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						${totalPrice}
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						SHIPPING
					</motion.p>
					<motion.p
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						FREE
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						VAT
					</motion.p>
					<motion.p
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						$0.00
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 font-bold text-lg">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						TOTAL
					</motion.p>
					<motion.p
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						${totalPrice}
					</motion.p>
				</div>
			</div>
			<div className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 mb-10 w-full lg:w-3/5">
				<motion.p
					className="text-sm text-[#767676]"
					variants={bounceDown}
					initial="hidden"
					whileInView="visible">
					Contact Details
				</motion.p>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						Name
					</motion.p>
					<motion.p
						className="capitalize"
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						{username}
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						Email
					</motion.p>
					<motion.p
						className="capitalize"
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						{" "}
						{email}
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						Mobile Number
					</motion.p>
					<motion.p
						className="capitalize"
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						{number}
					</motion.p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<motion.p
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						Address:
					</motion.p>
					<motion.p
						className="capitalize w-1/2 text-right"
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						{address}
					</motion.p>
				</div>
			</div>

			<motion.div
				className="w-full flex justify-center items-center  mb-3 lg:mb-10"
				variants={bounceUp}
				initial="hidden"
				whileInView="visible">
				<Link
					to="/"
					onClick={emptyCart}
					className='bg-[#017D03] text-sm text-center flex justify-center items-center py-3 px-6 rounded-full text-white lg:text-[1rem] z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
					<span>Shop Again</span>
					<Icon
						icon="icons8:shopping-cart"
						className="text-2xl lg:text-3xl"
					/>
				</Link>
			</motion.div>
		</div>
	);
};
