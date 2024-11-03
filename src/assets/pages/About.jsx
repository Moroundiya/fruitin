/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HowItWorks } from "../components/HowItWorks";
import { Counter } from "../components/Counter";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonial } from "../components/Testimonial";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Team } from "../components/Team";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ProductContext } from "../../App";

export const About = () => {
	const { bounceUp } = useContext(ProductContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="">
			<Navbar />
			<motion.div
				variants={bounceUp}
				initial="hidden"
				animate="visible">
				<Experience />
				<HowItWorks bgcolor="[#F5F7EB]" />
				<Counter
					counterbg="bg-counterBgReverse"
					className="relative -top-8"
				/>
				<div className="py-2 lg:py-9"></div>
				<WhyChooseUs />
				<div className="-my-10 lg:-my-8">
					<Testimonial />
				</div>
				<Team />
				<Footer />
			</motion.div>
		</div>
	);
};
