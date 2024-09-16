/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Icon } from "@iconify/react";
import teamCardBg from "../images/team_card_bg.png";

export const TeamMembers = ({ img, name, desc }) => {
	return (
		<div className="flex justify-center items-center relative cursor-pointer group">
			<img
				src={teamCardBg}
				alt=""
				className="pointer-events-none opacity-10 group-hover:opacity-100 group-hover:rotate-90 transition-all ease-in-out duration-500"
			/>

			<img
				src={img}
				alt=""
				className="absolute rounded-full border-4 border-white pointer-events-none w-[72%] shadow-2xl"
			/>

			<div className="bg-[#F5F7EB] flex flex-col justify-center items-center absolute bottom-0 px-10 py-3 lg:px-5 xl:px-10 rounded-xl shadow-md">
				<p className="text-[#017D03] text-sm">{desc}</p>
				<p className="text-lg xl:text-xl 2xl:text-[1.4rem] font-semibold pt-1 pb-2.5">
					{name}
				</p>
				<div className="text-[#54595F] flex items-center justify-center space-x-4 text-md lg:text-xl">
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
	);
};
