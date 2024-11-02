/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { AllProducts } from "../components/AllProducts";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";

export const Shop = () => {
	const {
		bounceDown,
		slideRight,
		slideLeft,
		childrenVariants,
		parentVariant,
		bounceUp,
		zoomUp,
	} = useContext(ProductContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div className="mt-[50px] lg:mt-[70px] overflow-x-hidden">
			<Navbar />
			<AllProducts />
			<Footer />
		</motion.div>
	);
};
