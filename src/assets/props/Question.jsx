/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export const Question = ({
	question,
	answer,
	index,
	singleAccordion,
	showAnswer,
}) => {
	return (
		<div
			className="w-full bg-white shadow-md rounded-lg"
			onClick={() => singleAccordion(index)}>
			<div className="">
				<div className="flex justify-between items-center cursor-pointer py-3 px-6">
					<p className="text-[0.96rem] font-semibold lg:text-[1.09rem]">
						{question}
					</p>
					<Icon
						icon="hugeicons:view"
						className="text-[1.4rem] text-[#017D03]"
					/>
					{/* <Icon
                                            icon="clarity:eye-hide-line"
                                            className="text-[1.4rem] text-[#017D03]"
                                        /> */}
				</div>

				<div
					className={`${
						showAnswer === index ? "block" : "hidden"
					} font-normal pt-4 pb-5 text-[#54595F] border-[#D9D9D9] relative leading-[1.5] px-6 border-t text-[0.91rem] lg:text-[0.95rem] transition-all ease-out duration-1000`}>
					<p>{answer}</p>
				</div>
			</div>
		</div>
	);
};
