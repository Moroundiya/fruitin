/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../App";
import { CartSlideoutItem } from "./CartSlideoutItem";

export const CartSidebar = ({ setShowCart, showCart, showMenu }) => {
	if (showCart || showMenu) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	const { storeCart, setStoreCart } = useContext(ProductContext);

	const remProd = (val) => {
		const newStore = storeCart.filter((item) => {
			return item.name !== storeCart[val].name;
		});
		setStoreCart(newStore);
	};

	return (
		<div
			className={`w-full h-full bg-[#000b00c9] fixed z-50 top-0 transition-all ease-in-out overflow-hidden ${
				showCart
					? "left-0 opacity-100 duration-[0.8s]"
					: "left-full opacity-0 delay-300 duration-[1s]"
			} flex justify-end font-lexend`}>
			<div
				className={`w-10/12 lg:w-[440px] h-full bg-white px-5 lg:px-7 pb-5 relative transition-all ease-in-out   ${
					showCart
						? "left-0 opacity-100 delay-100 duration-[1s]"
						: "left-full opacity-0 duration-[0.8s]"
				} `}>
				<Icon
					icon="material-symbols-light:cancel-outline-rounded"
					className="absolute right-5 top-5 text-4xl cursor-pointer text-red-700"
					onClick={() => setShowCart(false)}
				/>
				<p className="text-xl font-bold pt-14 lg:text-[1.45rem]">
					Shopping Cart
				</p>
				<div className="w-full h-[2px] mt-2 bg-[#D9D9D9] rounded-3xl overflow-hidden">
					<div className="h-full w-[50px] bg-[#017D03]"></div>
				</div>
				<div className="mt-8 mb-5 border-t h-[70%] md:h-[700px] lg:h-[70%] overflow-y-auto">
					{storeCart[0] == undefined ? (
						<p className="my-10 text-sm text-gray-500">
							Cart is empty, please go to shop and add item(s)
						</p>
					) : (
						storeCart.map((prod, i) => {
							return (
								<CartSlideoutItem
									key={i}
									{...prod}
									index={i}
									remProd={remProd}
								/>
							);
						})
					)}
				</div>
				<div className="w-full flex justify-end">
					<Link
						to="/cart"
						className={`w-fit justify-center items-center ${
							storeCart[0] == undefined
								? "pointer-events-none bg-gray-300"
								: "bg-[#017D03] pointer-events-auto"
						} ms-4 text-center flex text-sm py-2 ps-4 pe-3 rounded-full text-white 2xl:text-md z-40 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]`}>
						View Cart
						<Icon
							icon="typcn:shopping-cart"
							className="text-white text-xl ms-1 pe-0"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
