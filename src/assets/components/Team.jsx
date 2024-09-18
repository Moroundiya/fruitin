/* eslint-disable no-unused-vars */
import React from "react";
import titleIcon from "../images/title_icon.svg";
import { team } from "../data/team";
import { TeamMembers } from "../props/TeamMembers";

export const Team = () => {
	return (
		<div className="w-full min-h-fit flex flex-col justify-center mt-4 mb-10 items-center font-lexend py-10 lg:px-12 lg:pb-16 lg:bg-transparent xl:mx-auto xl:px-0">
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

			<div className="w-full min-h-fit py-5 px-3 mt-4 lg:mt-7 xl:w-11/12 xl:px-0 2xl:w-4/5 grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-14 lg:gap-x-10 overflow-clip">
				{team.map((item, i) => {
					return (
						<TeamMembers
							key={i}
							{...item}
						/>
					);
				})}
			</div>
		</div>
	);
};
