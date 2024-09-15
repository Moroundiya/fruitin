// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import faqImgRound from "../images/faq_img.jpg";
import titleIcon from "../images/title_icon.svg";
import { faq } from "../data/faq";
import { Question } from "../props/Question";

export const Faq = () => {
	const [showAnswer, setShowAnswser] = useState(null);

	useEffect(() => {
		// console.log(showAnswer)
	}, [showAnswer]);

	const singleAccordion = (num) => {
		setShowAnswser(showAnswer == num ? null : num);
	};

	return (
		<div className="w-full min-h-fit bg-faqBg bg-[#F5F7EB] bg-center bg-contain lg:bg-cover bg-no-repeat lg:px-12">
			<div className="w-full h-full lg:flex lg:space-x-8 font-lexend mt-0 px-3 py-10 lg:px-12 lg:py-16 xl:py-24 xl:mx-auto xl:px-20">
				<div className="lg:w-2/5 bg-faqVectorBg bg-center bg-contain bg-no-repeat flex justify-center">
					<div className='h-fit relative p-7 before:content-[""] before:border-2 before:rounded-full  before:border-[#017D03] before:border-dashed before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-10'>
						<img
							src={faqImgRound}
							className="rounded-full relative z-30"
							alt=""
						/>
					</div>
				</div>
				<div className="lg:w-3/5 mt-10 lg:mt-0">
					<div className="">
						<div className="flex items-center justify-center lg:justify-start">
							<img
								src={titleIcon}
								className="h-5"
								alt=""
							/>
							<p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
								Looking For Answers?
							</p>
						</div>
						<h1 className="mt-2 mb-3 text-center text-2xl lg:text-3xl lg:leading-[1.2] capitalize font-bold 2xl:text-[2.5rem] 2xl:leading-[1.2] lg:text-left lg:mb-8 lg:mt-5">
							Frequently Asked If You Have any Questions?
						</h1>
						<div className="mt-8 lg:mt-0 space-y-4 lg:space-y-5">
							{faq.map((item, i) => (
								<Question
									key={i}
									{...item}
									index={i}
									showAnswer={showAnswer}
									singleAccordion={singleAccordion}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
