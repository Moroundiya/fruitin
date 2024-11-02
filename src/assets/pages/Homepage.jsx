// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { AboutUs } from "../components/AboutUs";
import { Category } from "../components/Category";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Counter } from "../components/Counter";
import { Products } from "../components/Products";
import { HowItWorks } from "../components/HowItWorks";
import { Faq } from "../components/Faq";
import { Testimonial } from "../components/Testimonial";
import { Footer } from "../components/Footer";

export const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<AboutUs />
			<Category />
			<WhyChooseUs />
			<Counter counterbg="bg-counterBg" />
			<Products />
			<HowItWorks bgcolor="[#fff]" />
			<Faq />
			<Testimonial />
			<Footer />
		</>
	);
};
