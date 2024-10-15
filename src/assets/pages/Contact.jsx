/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactInfo } from "../components/ContactInfo";
export const Contact = () => {
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
	return (
		<>
			<Navbar />
			<ContactInfo />
			<Footer />
		</>
	);
};
