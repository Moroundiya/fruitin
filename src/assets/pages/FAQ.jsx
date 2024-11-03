// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { AllFaq } from "../components/AllFaq";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ProductContext } from "../../App";
export const FAQ = () => {
	const { bounceUp } = useContext(ProductContext);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="mt-[50px] lg:mt-[70px] overflow-y-clip">
			<Navbar />
			<motion.div
				variants={bounceUp}
				initial="hidden"
				animate="visible">
				<AllFaq />
				<Footer />
			</motion.div>
		</div>
	);
};
