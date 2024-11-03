import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import { CheckoutItems } from "../components/CheckoutItems";

export const Checkout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<CheckoutItems />
			<Footer />
		</>
	);
};
