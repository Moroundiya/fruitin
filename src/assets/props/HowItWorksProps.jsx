/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export const HowItWorksProps = ({
	img1,
	img2,
	step,
	title,
	desc,
	classname,
}) => {
	return (
		<div
			className={`flex justify-center items-center flex-col text-center px-3 lg:px-0 ${classname}`}>
			<div className="mb-6 relative">
				<div className="clip bg-white flex justify-center items-center cursor-pointer group">
					<img
						src={img1}
						alt=""
						className="group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
					/>
				</div>
				<img
					src={img2}
					className="mask"
					alt=""
				/>
			</div>
			<p className="text-[#54595F] uppercase">{step}</p>
			<p className="my-2 text-[1.3rem] lg:text-[1.55rem] font-semibold">
				{title}
			</p>
			<p className="text-[#54595F] font-normal text-[0.95rem]">{desc}</p>
		</div>
	);
};
