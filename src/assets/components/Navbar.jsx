// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logoWhite from "../images/logo-white.svg";
import footerLogo from "../images/logo-footer.svg";
import { useEffect } from "react";

export const Navbar = () => {
	const [scroll, setScroll] = useState(false);

	window.onscroll = () => {
		window.scrollY > 1 ? setScroll(true) : setScroll(false);
	};

	useEffect(() => {
		// console.log(scroll);
	}, [scroll]);

	return (
		<nav
			className={`flex justify-between uppercase items-center w-full z-10 top-0 left-0 px-3 py-4 lg:py-5 lg:px-12 xl:px-20 2xl:py-10 font-lexend transition-all ease-in-out duration-700 ${
				scroll ? "bg-white fixed shadow-2xl z-50" : "bg-transparent absolute"
			}`}>
			<Icon
				icon="tabler:menu-4"
				className={`text-[2.1rem] lg:hidden ${
					scroll ? "text-[#017D03]" : "text-white"
				} `}
			/>
			<img
				src={scroll ? footerLogo : logoWhite}
				className="h-8 lg:h-12 2xl:h-14"
				alt=""
			/>
			<div
				className={`hidden text-lg ${
					scroll ? "text-[#017D03]" : "text-white"
				} space-x-9 lg:block`}>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Shop</a>
				<a href="#">FAQ</a>
				<a href="#">Contact</a>
			</div>
			<div className="flex justify-center items-center">
				<div className="relative">
					<div
						className={`absolute ${
							scroll ? "bg-[#FF9C00]" : "bg-[#017D03]"
						} text-white rounded-full w-4 h-4 overflow-hidden flex justify-center items-center text-[0.65rem] font-semibold shadow-xl right-0`}>
						5
					</div>
					<Icon
						icon="bitcoin-icons:cart-filled"
						className={`text-[2.1rem] lg:text-4xl ${
							scroll ? "text-[#017D03]" : "text-white"
						}`}
					/>
				</div>
				<a
					href="#"
					className='bg-[#FF9C00] w-fit justify-center items-center ms-4 text-center hidden lg:flex text-sm py-2 ps-4 pe-2.5 rounded-full text-white mx-auto 2xl:text-md z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
					SHOP NOW
					<Icon
						icon="solar:double-alt-arrow-right-linear"
						className="text-white text-2xl pe-0"
					/>
				</a>
			</div>
		</nav>
	);
};
