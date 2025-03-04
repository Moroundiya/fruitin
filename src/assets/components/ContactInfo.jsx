/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import titleIcon from "../images/title_icon.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";

export const ContactInfo = () => {
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
		<div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend overflow-x-hidden mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative top-10 lg:top-[72px]">
			<img
				src={productBg1}
				className="absolute top-0 left-0 pointer-events-none"
				alt=""
			/>
			<img
				src={productBg2}
				className="absolute bottom-0 right-0 lg:h-fuell pointer-events-none"
				alt=""
			/>

			<motion.div
				className="flex items-center justify-center lg:justify-start"
				variants={bounceDown}
				initial="hidden"
				whileInView="visible">
				<img
					src={titleIcon}
					className="h-5"
					alt=""
				/>
				<p className="font-lobster text-[#FF9C00] ms-1 text-lg sm:text-xl">
					Contact
				</p>
			</motion.div>
			<motion.div
				className="mt-2 w-4/5 mb-3 text-center text-2xl lg:text-3xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5"
				variants={bounceUp}
				initial="hidden"
				whileInView="visible">
				<h1 className="text-center lg:w-1/3 mx-auto">Contact Information</h1>
			</motion.div>

			<div className="px-3 lg:mt-5 w-full xl:w-11/12 2xl:w-4/5 mx-auto">
				<motion.iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7918493964808!2d-118.8001664244788!3d34.15166707311974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469bfddbf69%3A0xf2bcd5e5a88069fe!2s5700%20Lindero%20Canyon%20Rd%2C%20Westlake%20Village%2C%20CA%2091362%2C%20USA!5e0!3m2!1sen!2sng!4v1726868529348!5m2!1sen!2sng"
					className="w-full grayscale-[100%] pointer-events-none"
					height={450}
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					variants={zoomUp}
					initial="hidden"
					whileInView="visible"
				/>

				<motion.div
					className="w-full my-10 grid md:grid-cols-2 xl:grid-cols-4 gap-y-5 xl:gap-y-0 border-b-2 pb-10"
					variants={parentVariant}
					initial="hidden"
					whileInView="visible">
					<motion.div
						className="flex items-center lg:justify-center"
						variants={childrenVariants}>
						<Icon
							icon="mingcute:question-line"
							className="text-3xl lg:text-4xl me-3 text-[#FF9C00]"
						/>

						<div>
							<p className="text-[#7d8978] text-md">Call</p>
							<p className="text-black">+ 92 ( 307 ) 68 - 06860</p>
						</div>
					</motion.div>

					<motion.div
						className="flex items-center lg:justify-center"
						variants={childrenVariants}>
						<Icon
							icon="carbon:email"
							className="text-3xl lg:text-4xl me-3 text-[#FF9C00]"
						/>

						<div>
							<p className="text-[#7d8978]">Write Email</p>
							<p className="text-black">needhelp@company.com</p>
						</div>
					</motion.div>
					<motion.div
						className="flex items-center lg:justify-center"
						variants={childrenVariants}>
						<Icon
							icon="hugeicons:location-05"
							className="text-3xl lg:text-4xl me-3 text-[#FF9C00]"
						/>

						<div>
							<p className="text-[#7d8978]">Visit Store</p>
							<p className="text-black">Street Road 24, New York</p>
						</div>
					</motion.div>
					<motion.div
						className="flex space-x-2 lg:justify-center items-center mt-2 lg:mt-0"
						variants={parentVariant}
						initial="hidden"
						whileInView="visible">
						<motion.div
							className="text-white bg-[#017D03] w-10 h-10  flex justify-center items-center cursor-pointer rounded-full text-lg lg:text-xl hover:bg-[#123C12]"
							variants={childrenVariants}>
							<Icon
								icon="ri:facebook-fill"
								className=""
							/>
						</motion.div>
						<motion.div
							className="text-white bg-[#017D03] w-10 h-10  flex justify-center items-center cursor-pointer rounded-full text-lg lg:text-xl  hover:bg-[#123C12]"
							variants={childrenVariants}>
							<Icon icon="mdi:twitter" />
						</motion.div>
						<motion.div
							className="text-white bg-[#017D03] w-10 h-10  flex justify-center items-center cursor-pointer rounded-full text-lg lg:text-xl  hover:bg-[#123C12]"
							variants={childrenVariants}>
							<Icon icon="mdi:linkedin" />
						</motion.div>
						<motion.div
							className="text-white bg-[#017D03] w-10 h-10  flex justify-center items-center cursor-pointer rounded-full text-lg lg:text-xl  hover:bg-[#123C12]"
							variants={childrenVariants}>
							<Icon icon="ic:baseline-whatsapp" />
						</motion.div>
					</motion.div>
				</motion.div>

				<div className="flex flex-col items-center">
					<motion.p
						className="text-[#FF9C00] font-lobster lg:text-lg"
						variants={bounceDown}
						initial="hidden"
						whileInView="visible">
						Write a Message
					</motion.p>
					<motion.h1
						className=" text-center text-2xl lg:text-3xl font-bold w-9/12 lg:w-2/5 mx-auto 2xl:text-[2.5rem] 2xl:leading-[1.15] mt-2"
						variants={bounceUp}
						initial="hidden"
						whileInView="visible">
						We’re always here to help you
					</motion.h1>

					<form
						action=""
						className="lg:mt-10 py-10 w-full lg:w-3/5 relative z-20">
						<motion.div
							className="grid md:grid-cols-2 gap-x-10 gap-y-5"
							variants={parentVariant}
							initial="hidden"
							whileInView="visible">
							<motion.div
								className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
								variants={childrenVariants}>
								<Icon
									icon="basil:user-outline"
									className="text-3xl text-[#FF9C00]"
								/>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full h-full bg-transparent outline-none border-none ms-1 placeholder:font-light"
								/>
							</motion.div>

							<motion.div
								className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
								variants={childrenVariants}>
								<Icon
									icon="ic:outline-email"
									className="text-2xl text-[#FF9C00]"
								/>
								<input
									type="text"
									placeholder="Email Address"
									className="w-full h-full bg-transparent outline-none border-none ms-2 placeholder:font-light"
								/>
							</motion.div>
							<motion.div
								className="w-full rounded-lg flex items-center h-11 px-2.5 py-2 bg-[#a1a19a4c]"
								variants={childrenVariants}>
								<Icon
									icon="solar:phone-outline"
									className="text-2xl text-[#FF9C00]"
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									className="w-full h-full bg-transparent outline-none border-none ms-2 placeholder:font-light"
								/>
							</motion.div>

							<motion.div
								className="w-full rounded-lg flex h-11 items-center px-1.5 py-2 bg-[#a1a19a4c]"
								variants={childrenVariants}>
								<select
									placeholder="Subject"
									className="w-full h-full font-light
										bg-transparent outline-none border-none ms-1
										placeholder:font-light">
									<option
										value=""
										disabled
										selected>
										Select Subject
									</option>
									<option value="Organic Food">Organic Food</option>
									<option value="Fresh Fruits">Fresh Fruits</option>
									<option value="Fresh Vegetable">Fresh Vegetable</option>
								</select>
							</motion.div>
						</motion.div>

						<motion.div variants={bounceDown}>
							<textarea
								name=""
								id=""
								className="w-full resize-none rounded-lg p-3 bg-[#a1a19a4c] h-40 mt-5 outline-none border-none mb-8 placeholder:font-light"
								placeholder="Write a message"></textarea>
						</motion.div>

						<motion.div
							className="w-full flex justify-center items-center mb-3 lg:mb-10"
							variants={bounceUp}
							initial="hidden"
							whileInView="visible">
							<a
								href="#"
								className='bg-[#017D03] text-sm text-center py-3 px-6 rounded-full text-white lg:text-[1rem] z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
								Send a message
							</a>
						</motion.div>
					</form>
				</div>
			</div>
		</div>
	);
};
