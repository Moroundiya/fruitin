/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import titleIcon from "../images/title_icon.svg";
import { ProductsProps } from "../props/ProductsProps";
import { ProductContext } from "../../App";
import { motion } from "framer-motion";

export const AllProducts = () => {
	const {
		productList,
		storeCart,
		setProductList,
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);
	const [addItem, setAddItem] = useState(false);

	const addToCart = (prod) => {
	};
	const [activeCategory, setActiveCategory] = useState("all");
	const [products, setProducts] = useState(productList);

	useEffect(() => {}, [activeCategory, products, productList]);

	const fruitsProduct = () => {
		var updateProduct = productList.filter(
			(product) => product.desc == "Fresh Fruits"
		);
		setProducts(updateProduct);
	};

	const vegetableProduct = () => {
		var updateProduct = productList.filter(
			(product) => product.desc == "Vegetables"
		);
		setProducts(updateProduct);
	};

	const meatandfishProduct = () => {
		var updateProduct = productList.filter(
			(product) => product.desc == "Meat and Fish"
		);
		setProducts(updateProduct);
	};

	return (
		<div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative overflow-x-clip">
			<img
				src={productBg1}
				className="absolute top-0 left-0 -z-0 pointer-events-none"
				alt=""
			/>
			<img
				src={productBg2}
				className="absolute bottom-0 right-0 pointer-events-none"
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
					Shop
				</p>
			</motion.div>
			<motion.div
				className="mt-2 w-4/5 mb-3 text-center text-2xl lg:text-3xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5"
				variants={bounceUp}
				initial="hidden"
				whileInView="visible">
				<h1 className="text-center">Organic & Fresh Products!</h1>
			</motion.div>
			<div className="text-[0.8rem] lg:text-[0.95rem] px-3 lg:space-y-0 mt-4 lg:mt-0 grid grid-cols-2 gap-5 lg:flex">
				<motion.div
					variants={slideRight}
					initial="hidden"
					whileInView="visible"
					className="">
					<button
						className={`${
							activeCategory == "all"
								? "bg-[#017D03] text-white"
								: "bg-transparent text-black"
						}  block w-full px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]`}
						onClick={() => {
							setActiveCategory("all"), setProducts(productList);
						}}>
						ALL
					</button>
				</motion.div>

				<motion.div
					variants={slideLeft}
					initial="hidden"
					whileInView="visible"
					className="">
					<button
						className={`${
							activeCategory == "fruits"
								? "bg-[#017D03] text-white"
								: "bg-transparent text-black"
						} block w-full px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]`}
						onClick={() => {
							setActiveCategory("fruits"), fruitsProduct();
						}}>
						FRUITS
					</button>
				</motion.div>
				<motion.div
					variants={slideRight}
					initial="hidden"
					whileInView="visible"
					className="">
					<button
						className={`${
							activeCategory == "vegetable"
								? "bg-[#017D03] text-white"
								: "bg-transparent text-black"
						} block w-full px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]`}
						onClick={() => {
							setActiveCategory("vegetable"), vegetableProduct();
						}}>
						VEGETABLE
					</button>
				</motion.div>

				<motion.div
					variants={slideLeft}
					initial="hidden"
					whileInView="visible"
					className="">
					<button
						className={`${
							activeCategory == "meat-and-fish"
								? "bg-[#017D03] text-white"
								: "bg-transparent text-black"
						} block w-full px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]`}
						onClick={() => {
							setActiveCategory("meat-and-fish"), meatandfishProduct();
						}}>
						MEAT AND FISH
					</button>
				</motion.div>
			</div>

			<div className="mt-10 w-full xl:w-11/12 2xl:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[6px] gap-y-[20px] sm:gap-x-[25px] lg:gap-6 xl:gap-7 2xl:gap-10 relative z-20 px-2 lg:px-0">
				{products.map((item, i) => (
					<ProductsProps
						key={i}
						item={item}
						{...item}
						addToCart={addToCart}
						identify={item.name}
						product={productList}
					/>
				))}
			</div>
		</div>
	);
};
