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

				<div className="space-y-4">
					<div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
						<div className="bg-[#123C12] text-[#FF9C00] rounded-lg p-2">
							<Icon
								icon="mdi:location"
								className="text-lg"
							/>
						</div>
						<span className="leading-[1.7]">
							8502 Preston Rd. Inglewood, <br />
							Maine 98380
						</span>
					</div>
					<div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
						<div className="bg-[#123C12] text-[#FF9C00] rounded-lg p-2">
							<Icon
								icon="ion:call-sharp"
								className="text-lg"
							/>
						</div>
						<span className="leading-[1.7]">
							+(163)-2654-3564 <br />
							+(163)-2654-5432
						</span>
					</div>
					<div className="flex items-center space-x-3 text-[#B5B5B5] font-light">
						<div className="bg-[#123C12] text-[#FF9C00] rounded-lg p-2">
							<Icon
								icon="fluent:mail-20-filled"
								className="text-lg"
							/>
						</div>
						<span className="leading-[1.7]">help24/7@frutin.com</span>
					</div>
				</div>
			</div>
		</div>
	);
};
