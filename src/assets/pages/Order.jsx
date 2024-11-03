import React, { useContext, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { OrderCompleted } from "../components/OrderCompleted";

export const Order = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<OrderCompleted />
			<Footer />
		</>
	);
};
