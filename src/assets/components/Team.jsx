/* eslint-disable no-unused-vars */
import React from "react";

import { Icon } from "@iconify/react";

import teamCardBg from "../images/team_card_bg.png";
import titleIcon from "../images/title_icon.svg";

import teamImg1 from "../images/team_1_1.jpg";

export const Team = () => {
	return (
		<div className="w-full min-h-fit flex flex-col justify-center mt-4 items-center font-lexend py-10 lg:px-12 lg:pb-16 lg:bg-transparent xl:mx-auto xl:px-0">
			<div className="flex items-center justify-center lg:justify-start">
				<img
					src={titleIcon}
					className="h-5"
					alt=""
				/>
				<p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
					Team Members
				</p>
			</div>
			<h1 className="flex flex-col justify-center items-center leading-[1.2] mt-2 mb-3 text-center text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.18] lg:text-left lg:mb-8 lg:mt-5">
				<span>We Have Awesome Team</span>
				<span>Here to Help You!</span>
			</h1>

			<div className="w-full min-h-fit py-5 px-3 mt-4 lg:mt-7 xl:w-11/12 xl:px-0 2xl:w-4/5 grid lg:grid-cols-3">
				<div className="flex justify-center items-center relative cursor-pointer group">
					<img
						src={teamCardBg}
						alt=""
						className="pointer-events-none opacity-10 group-hover:opacity-100 group-hover:rotate-90 transition-all ease-in-out duration-500"
					/>

					<img
						src={teamImg1}
						alt=""
						className="absolute rounded-full border-4 border-white pointer-events-none w-[72%] shadow-2xl"
					/>

					<div className="bg-[#F5F7EB] flex flex-col justify-center items-center absolute bottom-0 px-10 py-3 rounded-xl shadow-md">
						<p className="text-[#017D03] text-sm">Senior Farmers</p>
						<p className="text-xl lg:text-[1.4rem] font-semibold pt-1 pb-2.5">
							Alhando Robert
						</p>
						<div className="text-[#54595F] flex items-center justify-center space-x-4 text-lg lg:text-xl">
							<Icon
								icon="dashicons:facebook-alt"
								className="cursor-pointer hover:text-[#017D03]"
							/>
							<Icon
								icon="mdi:twitter"
								className="cursor-pointer hover:text-[#017D03]"
							/>
							<Icon
								icon="mdi:instagram"
								className="cursor-pointer hover:text-[#017D03]"
							/>
							<Icon
								icon="mdi:linkedin"
								className="cursor-pointer hover:text-[#017D03]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
