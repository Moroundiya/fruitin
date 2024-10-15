/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import errorImg from "../images/error.svg";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export const Error = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
	return (
		<div className="w-full h-fit relative top-[130px] lg:top-[20px] pb-8 xl:pb-10">
			<Navbar />
			<div className="w-full px-5 lg:mt-[150px] font-lexend ">
				<div className="flex flex-col justify-center items-center ">
					<img
						src={errorImg}
						className=" lg:w-2/4"
						alt=""
					/>

					<p className="mt-10 text-2xl lg:text-4xl font-bold text-center">
						<span className="text-[#017D03] font-bold">OooPs!</span> Page Not
						Found.
					</p>

					<div className="mt-8 font-lexend">
						<Link
							to="/"
							className='bg-[#017D03] w-fit justify-center items-center text-center flex text-md py-3 ps-4 pe-4  rounded-full text-white mx-auto 2xl:text-md z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
							<Icon
								icon="mi:home"
								className="text-white text-2xl me-2"
							/>
							GO BACK HOME
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
