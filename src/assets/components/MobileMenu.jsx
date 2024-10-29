/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import footerLogo from "../images/logo.svg";
import footerLogo2 from "../images/logo-white.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ProductContext } from "../../App";

export const MobileMenu = ({ showMenu, setShowMenu }) => {
	const {
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);
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
				<motion.img
					src={footerLogo2}
					alt=""
					className="w-[100px] pt-14"
					initial={{ x: -50, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: {
							duration: 2,
							type: "spring",
							// delay: 0.5,
							bounce: 0.7,
						},
					}}
				/>

				<AnimatePresence>
					<motion.ul
						className="mt-14 text-white font-light uppercase border-t border-[#ffffff63] py-4"
						variants={parentVariant}
						initial="hidden"
						whileInView="visible"
						exit="hidden">
						<motion.li
							className="flex items-center space-x-1.5 text-[1.08rem] border-b pb-4 border-[#ffffff63]"
							variants={childrenVariants}>
							<Icon
								icon="f7:hand-point-right-fill"
								className="text-2xl text-[#FF9C00]"
							/>
							<Link to="/">Home</Link>
						</motion.li>
						<motion.li
							className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]"
							variants={childrenVariants}>
							<Icon
								icon="f7:hand-point-right-fill"
								className="text-2xl text-[#FF9C00]"
							/>
							<Link to="/about-us">About</Link>
						</motion.li>
						<motion.li
							className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]"
							variants={childrenVariants}>
							<Icon
								icon="f7:hand-point-right-fill"
								className="text-2xl text-[#FF9C00]"
							/>
							<Link to="/shop">Shop</Link>
						</motion.li>
						<motion.li
							className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]"
							variants={childrenVariants}>
							<Icon
								icon="f7:hand-point-right-fill"
								className="text-2xl text-[#FF9C00]"
							/>
							<Link to="/faq">faq</Link>
						</motion.li>
						<motion.li
							className="flex items-center space-x-1.5 text-[1.08rem] border-b py-4 border-[#ffffff63]"
							variants={childrenVariants}>
							<Icon
								icon="f7:hand-point-right-fill"
								className="text-2xl text-[#FF9C00]"
							/>
							<Link to="/contact">contact</Link>
						</motion.li>
					</motion.ul>
				</AnimatePresence>

				<div className="text-white text-2xl flex space-x-5 w-full justify-center items-center absolute bottom-24 left-0">
					<motion.span
						variants={slideRight}
						initial="hidden"
						whileInView="visible">
						<Icon icon="ic:baseline-facebook" />
					</motion.span>
					<motion.span
						variants={bounceDown}
						initial="hidden"
						whileInView="visible">
						<Icon icon="mdi:twitter" />
					</motion.span>
					<motion.span
						variants={bounceUp}
						initial="hidden"
						whileInView="visible">
						<Icon icon="hugeicons:instagram" />
					</motion.span>
					<motion.span
						variants={slideLeft}
						initial="hidden"
						whileInView="visible">
						<Icon icon="ic:baseline-whatsapp" />
					</motion.span>
				</div>

				<motion.div
					className="w-full absolute bottom-10 left-0"
					variants={zoomUp}
					initial="hidden"
					whileInView="visible">
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
				</motion.div>
			</div>
		</div>
	);
};
