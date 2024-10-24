/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductContext } from "../../App";
import { Icon } from "@iconify/react/dist/iconify.js";

export const OrderCompleted = () => {
	const {
		totalPrice,
		username,
		paymentMethod,
		address,
		email,
		number,
		storeCart,
	} = useContext(ProductContext);

	const orderdate = new Date().toLocaleDateString();

	// console.log(orderdate);
	return (
		<div className="w-full min-h-fit flex flex-col justify-center items-center px-4 pb-32 font-lexend mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative top-10 lg:top-[72px]">
			<Icon
				icon="icon-park-solid:check-one"
				className="text-[#017D03] text-7xl lg:text-8xl mt-5 lg:mt-10"
			/>
			<p className="text-[1.4rem] lg:text-3xl font-bold mt-5 mb-1 text-center flex justify-center items-center flex-col">
				<span className="text-[#767676] text-[1rem] font-semibold">
					Dear {username},
				</span>
				<span>Your order is completed!</span>
			</p>
			<p className="text-[#767676] text-sm text-center">
				Thank you. Your order has been received and ready to be shipped.
			</p>

			<div className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 my-10 w-full lg:w-3/5 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0">
				<div className="flex flex-col justify-center space-y-1">
					<p className="text-[#767676] text-sm">Order Number</p>
					<p className="font-semibold">13119</p>
				</div>
				<div className="flex flex-col justify-center space-y-1">
					<p className="text-[#767676] text-sm">Date</p>
					<p className="font-semibold">{orderdate}</p>
				</div>
				<div className="flex flex-col justify-center space-y-1">
					<p className="text-[#767676] text-sm">Total</p>
					<p className="font-semibold">${totalPrice}</p>
				</div>
				<div className="flex flex-col justify-center space-y-1">
					<p className="text-[#767676] text-sm">Payment Method</p>
					<p className="font-semibold">{paymentMethod}</p>
				</div>
			</div>
			<div className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 mb-10 w-full lg:w-3/5">
				<p className="text-sm text-[#767676]">Order Details</p>

				<div className="flex justify-between items-center mt-5">
					<p>PRODUCT</p>
					<p>SUBTOTAL</p>
				</div>
				<div className="space-y-2 my-3 border-y border-[#767676c0] text-[#767676] text-sm py-3">
					{storeCart.map((item, i) => {
						return (
							<div
								key={i}
								className="flex justify-between items-center w-full">
								<p>
									{item.name} x {item.quantity}
								</p>
								<p>${item.price}</p>
							</div>
						);
					})}
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>SUBTOTAL</p>
					<p>${totalPrice}</p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>SHIPPING</p>
					<p>FREE</p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>VAT</p>
					<p>$0.00</p>
				</div>
				<div className="flex justify-between items-center mt-5 font-bold text-lg">
					<p>TOTAL</p>
					<p>${totalPrice}</p>
				</div>
			</div>
			<div className="border-2 border-dashed border-[#FF9C00] px-5 py-7 lg:px-10 mb-10 w-full lg:w-3/5">
				<p className="text-sm text-[#767676]">Contact Details</p>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>Name</p>
					<p className="capitalize">{username}</p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>Email</p>
					<p className="capitalize"> {email}</p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>Mobile Number</p>
					<p className="capitalize">{number}</p>
				</div>
				<div className="flex justify-between items-center mt-5 text-sm">
					<p>Address:</p>
					<p className="capitalize w-1/2 text-right">{address}</p>
				</div>
			</div>
		</div>
	);
};
