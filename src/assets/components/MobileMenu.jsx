/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import footerLogo from "../images/logo.svg";
import footerLogo2 from "../images/logo-white.svg";
import { Link } from "react-router-dom";

export const MobileMenu = ({ showMenu, setShowMenu }) => {
	return (
		<div
			className={`w-full h-full bg-[#000b00c9] fixed z-50 top-0 transition-all ease-in-out overflow-hidden ${
				showMenu
					? "right-0 opacity-100 duration-[0.8s]"
					: "right-full opacity-0 delay-300 duration-[1s]"
			} flex justify-start font-lexend`}>
			<div
				className={`w-4/5 lg:w-[440px] h-full bg-[#017D03] px-5 lg:px-7 relative transition-all ease-in-out   ${
					showMenu
						? "right-0 opacity-100 delay-100 duration-[1s]"
						: "right-full opacity-0 duration-[0.8s]"
				} `}>
				<Icon
					icon="material-symbols-light:cancel-outline-rounded"
					className="absolute right-5 top-5 text-4xl cursor-pointer text-white"
					onClick={() => setShowMenu(false)}
				/>
				<img
					src={footerLogo2}
					alt=""
					className="w-[100px] pt-14"
				/>

				<ul className="mt-14 text-white font-light uppercase border-t border-[#ffffff63] py-4">
					<li className="flex items-center space-x-1.5 text-[1.08rem] border-b pb-4 border-[#ffffff63]">
						<Icon
							icon="f7:hand-point-right-fill"
							className="text-2xl text-[#FF9C00]"
						/>
						<Link to="/">Home</Link>
					</li>
					<li className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]">
						<Icon
							icon="f7:hand-point-right-fill"
							className="text-2xl text-[#FF9C00]"
						/>
						<Link to="/about-us">About</Link>
					</li>
					<li className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]">
						<Icon
							icon="f7:hand-point-right-fill"
							className="text-2xl text-[#FF9C00]"
						/>
						<Link to="/shop">Shop</Link>
					</li>
					<li className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]">
						<Icon
							icon="f7:hand-point-right-fill"
							className="text-2xl text-[#FF9C00]"
						/>
						<Link to="/faq">faq</Link>
					</li>
					<li className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]">
						<Icon
							icon="f7:hand-point-right-fill"
							className="text-2xl text-[#FF9C00]"
						/>
						<Link to="/contact">contact</Link>
					</li>
				</ul>

				<div className="text-white text-2xl flex space-x-5 w-full justify-center items-center absolute bottom-24 left-0">
					<Icon icon="ic:baseline-facebook" />
					<Icon icon="mdi:twitter" />
					<Icon icon="hugeicons:instagram" />
					<Icon icon="ic:baseline-whatsapp" />
				</div>

				<div className="w-full absolute bottom-10 left-0">
					<p className="flex flex-col justify-center items-center leading-[1.2] text-sm opacity-40 text-white">
						<p className="flex items-center">
							{" "}
							Copyright{" "}
							<Icon
								icon="ph:copyright"
								className="mx-[3px] text-xl"
							/>{" "}
							2024 Frutin.{" "}
						</p>
						<p> All Rights Reserved.</p>
					</p>
				</div>
			</div>
		</div>
	);
};
