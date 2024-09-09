import React from "react";
import footerBg1 from "../images/footer_shape_1.png";
import footerBg2 from "../images/footer_shape_2.png";
import footerEmail from "../images/email.svg";
import footerLogo from "../images/logo-footer.svg";
import paymentMethod from "../images/payment-method.png";
import { Icon } from "@iconify/react";
import titleIcon from "../images//title_icon.svg";

export const Footer = () => {
	return (
		<footer className=" bg-[#002D00] h-auto pt-12 lg:pt-20 mt-10 relative font-lexend">
			<img
				src={footerBg1}
				className="absolute top-0 left-0 h-auto lg:h-full pointer-events-none"
				alt=""
			/>
			<img
				src={footerBg2}
				className="absolute bottom-0 lg:top-0 right-0 h-auto lg:h-full pointer-events-none"
				alt=""
			/>
			<div className="w-full h-full justify-center px-3 items-center lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 lg:mx-auto relative z-50">
				<div className="w-full lg:flex justify-between items-center">
					<div className="w-full lg:w-1/2 justify-center lg:justify-start flex items-center space-x-5 mb-6 lg:mb-0">
						<img
							src={footerEmail}
							alt=""
							className="h-10 lg:h-auto"
						/>
						<p className="text-xl text-center sm:text-left lg:text-[1.8rem] leading-[1.2] text-white lg:w-4/5 xl:w-3/5 font-semibold">
							Sign Up to Get Updates & News About Us.
						</p>
					</div>

					<form className="w-full lg:w-1/2 flex justify-center lg:justify-end">
						<input
							type="email"
							required
							className="bg-white rounded-md text-sm px-3 py-2.5 outline-none border-none w-[320px] placeholder:font-light placeholder:text-gray-400 lg:text-md"
							placeholder="Email Address"
							name=""
							id=""
						/>
						<button
							type="submit"
							className='bg-[#017D03] min-w-fit text-[0.8rem] text-white uppercase rounded-lg ms-2 lg:text-sm px-2 lg:px-4 z-50 overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
							Subscribe
						</button>
					</form>
				</div>
				<hr className="h-px my-10 lg:my-16 bg-[#017d0380] border-0" />
				<div className="lg:flex justify-center pb-20 space-y-10 lg:space-y-0">
					<div className="lg:w-1/3">
						<img
							src={footerLogo}
							alt=""
							className="h-10 lg:h-auto"
						/>
						<p className="text-[#B5B5B5] my-5 lg:my-10 lg:leading-[1.7] text-[1rem] font-light lg:w-4/5">
							We provide specialized winterization services to safeguard your
							pool during the off-season, and when spring arrives, we handle the
							thorough opening process.
						</p>

						<div className="flex space-x-2">
							<div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
								<Icon
									icon="ri:facebook-fill"
									className=""
								/>
							</div>
							<div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
								<Icon icon="mdi:twitter" />
							</div>
							<div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
								<Icon icon="mdi:linkedin" />
							</div>
							<div className="text-white bg-[#123C12] w-fit p-3 cursor-pointer rounded-lg text-xl transition-all duration-[0.6s] ease-in-out hover:bg-[#017D03]">
								<Icon icon="ic:baseline-whatsapp" />
							</div>
						</div>
					</div>
					<div className="lg:w-1/4">
						<div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
							<img
								src={titleIcon}
								className=""
								alt=""
							/>
							<p className="text-xl lg:text-[1.38rem]">Categories</p>
						</div>
						<div className="space-y-2.5 lg:space-y-3.5">
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Fresh Vegetable</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Natural Fruits</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Dairy Products</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Tea & Coffee</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Meat and Fish</span>
							</a>
						</div>
					</div>
					<div className="lg:w-1/4">
						<div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
							<img
								src={titleIcon}
								className=""
								alt=""
							/>
							<p className="text-xl lg:text-[1.38rem]">Quick Links</p>
						</div>
						<div className="space-y-2.5 lg:space-y-3.5">
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>About Us</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Portfolio</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Help & FAQs</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Blog</span>
							</a>
							<a
								href="#"
								className="text-[#B5B5B5] text-[1rem] font-light flex items-center space-x-1.5 transition-all ease-in-out duration-500 cursor-pointer hover:text-[#FF9C00]">
								<Icon
									icon="tabler:arrow-right"
									className="text-xl"
								/>
								<span>Contact Us</span>
							</a>
						</div>
					</div>
					<div className="lg:w-1/4">
						<div className="flex h-[50px] mb-5 lg:mb-10 items-center space-x-2 text-white relative  after:content-[''] after:w-[106px] after:h-[3px] after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-[#017D03] after:to-transparent after:rounded-lg">
							<img
								src={titleIcon}
								className=""
								alt=""
							/>
							<p className="text-xl lg:text-[1.38rem]">Contact Us</p>
						</div>
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
			</div>

			<div className="w-full lg:h-[100px] py-6 lg:py-0 px-3 xl:px-0 bg-subFooterBg bg-top bg-no-repeat bg-cover relative z-50 font-lexend text-white font-light flex flex-col justify-center items-center">
				<div className="w-full min-h-fit flex flex-col lg:flex-row justify-between px-3 items-center mt-4 lg:mt-7 lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 lg:mx-auto">
					<p className="flex flex-col justify-center lg:justify-start items-center mb-3.5 leading-[1.2] text-[0.95rem] lg:text-md lg:mb-0">
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
					<div>
						<img
							src={paymentMethod}
							alt=""
							className="h-5 lg:h-auto"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};
