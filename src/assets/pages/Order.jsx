import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { OrderCompleted } from "../components/OrderCompleted";

export const Order = () => {
	return (
		<>
			<Navbar />
			<OrderCompleted />
			<Footer />
		</>
	);
};
