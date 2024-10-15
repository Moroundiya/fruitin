/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { AllProducts } from "../components/AllProducts";
import { Footer } from "../components/Footer";

export const Shop = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
	return (
		<div className="mt-[50px] lg:mt-[70px]">
			<Navbar />
			<AllProducts />
			<Footer />
		</div>
	);
};
