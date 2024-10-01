/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import cartImg1 from '../images/cart-img1.jpg';
import cartImg2 from '../images/cart-img2.jpg';
import cartImg3 from '../images/cart-img3.jpg';
import cartImg4 from '../images/cart-img4.jpg';
import cartImg5 from '../images/cart-img5.jpg';
import { Link } from "react-router-dom";


export const CartSidebar = ({ setShowCart, showCart }) => {

	if (showCart) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
	return (
		<div className={`w-full h-full bg-[#000b00c9] fixed z-50 top-0 transition-all ease-in-out overflow-hidden ${showCart ? 'left-0 opacity-100 duration-[0.8s]' : 'left-full opacity-0 delay-300 duration-[1s]'} flex justify-end font-lexend`}>
			<div className={`w-10/12 lg:w-[440px] h-full bg-white px-5 lg:px-7 relative transition-all ease-in-out   ${showCart ? 'left-0 opacity-100 delay-100 duration-[1s]' : 'left-full opacity-0 duration-[0.8s]'} `}>
				<Icon icon="material-symbols-light:cancel-outline-rounded" className="absolute right-5 top-5 text-4xl cursor-pointer text-red-700" onClick={() => setShowCart(false)} />
				<p className="text-xl font-bold pt-14 lg:text-[1.45rem]">
					Shopping Cart
					{showCart}
				</p>
				<div className="w-full h-[2px] mt-2 bg-[#D9D9D9] rounded-3xl overflow-hidden">
					<div className="h-full w-[50px] bg-[#017D03]"></div>
				</div>
				<div className="my-8 border-t h-[70%] overflow-y-auto">
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg1} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Bosco Apple Fruit</p>
									<p className="text-[#54595F] text-sm">$940.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>

					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg2} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Green Cauliflower</p>
									<p className="text-[#54595F] text-sm">$899.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg3} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Mandarin orange</p>
									<p className="text-[#54595F] text-sm">$756.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg4} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Shallot Red onion</p>
									<p className="text-[#54595F] text-sm">$723.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg5} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Sour Red Cherry</p>
									<p className="text-[#54595F] text-sm">$1080.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg3} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Mandarin orange</p>
									<p className="text-[#54595F] text-sm">$756.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
					<div className="py-3 border-b flex w-full">
						<div className="flex justify-between items-center w-full">
							<div className="flex items-center">
								<img src={cartImg2} alt="" className="w-[75px] me-3" />
								<div>
									<p className="text-[#017D03] font-semibold">Green Cauliflower</p>
									<p className="text-[#54595F] text-sm">$899.00</p>
								</div>
							</div>
							<Icon icon="iconoir:cancel" className="text-[#FF9C00] text-2xl cursor-pointer" />
						</div>
					</div>
				</div>
				<div className="w-full flex justify-end">
					<Link
						to="/cart"
						className='bg-[#017D03] w-fit justify-center items-center ms-4 text-center flex text-sm py-2 ps-4 pe-3 rounded-full text-white 2xl:text-md z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
						View Cart
						<Icon
							icon="typcn:shopping-cart"
							className="text-white text-2xl ms-1 pe-0"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
