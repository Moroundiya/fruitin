/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";


export const CartSidebar = () => {
	return (
		<div className="w-full h-full bg-[#000b00c9] absolute top-0 left-0 z-50 flex justify-end font-lexend">
			<div className="w-4/5 lg:w-[440px] h-full bg-white px-5 lg:px-7 relative">
				<Icon icon="material-symbols-light:cancel-outline-rounded" className="absolute right-5 top-5 text-4xl cursor-pointer text-red-700" />
				<p className="text-xl font-bold pt-14 lg:text-[1.45rem]">
					Shopping Cart
				</p>
				<div className="w-full h-[2px] mt-2 bg-[#D9D9D9] rounded-3xl overflow-hidden">
					<div className="h-full w-[50px] bg-[#017D03]"></div>
				</div>
			</div>
		</div>
	);
};
