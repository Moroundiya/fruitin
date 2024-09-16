/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "../components/Navbar";
import { HowItWorks } from "../components/HowItWorks";
import { Counter } from "../components/Counter";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonial } from "../components/Testimonial";
import { Experience } from "../components/Experience";
import { Team } from "../components/Team";

export const About = () => {
	return (
		<>
			<Navbar />
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
		</>
	);
};
