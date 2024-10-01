// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logoWhite from "../images/logo-white.svg";
import footerLogo from "../images/logo-footer.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartSidebar } from "./CartSidebar";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	const currentpath = window.location.pathname;

	const [showCart, setShowCart] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	window.onscroll = () => {
		window.scrollY > 1 ? setScroll(true) : setScroll(false);
	};

	useEffect(() => {
		// console.log(currentpath);
	}, [scroll, currentpath, showCart, showMenu]);

	return (
		<>
			<MobileMenu
				setShowMenu={setShowMenu}
				showMenu={showMenu}
			/>
			<CartSidebar
				setShowCart={setShowCart}
				showCart={showCart}
				showMenu={showMenu}
			/>
			<nav
				className={`flex justify-between uppercase items-center w-full z-40 top-0 left-0 px-2.5 py-3 lg:px-12 xl:px-20 font-lexend transition-all ease-in-out duration-700 ${
					scroll || currentpath !== "/"
						? "bg-white fixed shadow z-40 lg:py-3"
						: "bg-transparent absolute lg:py-4"
				}`}>
				<Icon
					icon="tabler:menu-4"
					className={`text-[2.1rem] cursor-pointer lg:hidden ${
						scroll || currentpath !== "/" ? "text-[#017D03]" : "text-white"
					} `}
					onClick={() => setShowMenu(true)}
				/>
				<img
					src={scroll || currentpath !== "/" ? footerLogo : logoWhite}
					className="h-8 lg:h-12 2xl:h-14"
					alt=""
				/>
				<div
					className={`hidden text-lg ${
						scroll || currentpath !== "/" ? "text-[#017D03]" : "text-white"
					} space-x-9 lg:block`}>
					<Link to="/">Home</Link>
					<Link to="/about-us">About</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/faq">FAQ</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<div className="flex justify-center items-center">
					<Link
						to="#"
						className="relative"
						onClick={() => setShowCart(true)}>
						<div
							className={`absolute ${
								scroll || currentpath !== "/" ? "bg-[#FF9C00]" : "bg-[#017D03]"
							} text-white rounded-full w-4 h-4 overflow-hidden flex justify-center items-center text-[0.65rem] font-semibold shadow-xl right-0`}>
							5
						</div>
						<Icon
							icon="typcn:shopping-cart"
							className={`text-[2.1rem] lg:text-4xl cursor-pointer ${
								scroll || currentpath !== "/" ? "text-[#017D03]" : "text-white"
							}`}
						/>
					</Link>
					<a
						href="#"
						className='bg-[#FF9C00] w-fit justify-center items-center ms-4 text-center hidden lg:flex text-sm py-2 ps-4 pe-2.5 rounded-full text-white mx-auto 2xl:text-md z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
						SHOP NOW
						<Icon
							icon="solar:double-alt-arrow-right-linear"
							className="text-white text-2xl pe-0"
						/>
					</a>
				</div>
			</nav>
		</>
	);
};
