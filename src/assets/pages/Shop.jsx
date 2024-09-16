/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "../components/Navbar";
import { AllProducts } from "../components/AllProducts";

export const Shop = () => {
	return (
		<div className="mt-[50px] lg:mt-[70px] mb-10 lg:mb-12">
			<Navbar />
			<AllProducts />
		</div>
	);
};
