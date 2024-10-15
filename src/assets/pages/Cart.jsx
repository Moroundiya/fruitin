/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
	return (
		<>
			<Navbar />
			<CartItem />
			<Footer />
		</>
	);
};
