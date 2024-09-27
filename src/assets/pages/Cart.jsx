/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
	return (
		<>
			<Navbar />
			<CartItem />
			<Footer />
		</>
	);
};
