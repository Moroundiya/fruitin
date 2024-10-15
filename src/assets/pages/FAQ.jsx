// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar'
import { AllFaq } from '../components/AllFaq'
import { Footer } from '../components/Footer'

export const FAQ = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    return (
        <div className="mt-[50px] lg:mt-[70px]">
            <Navbar />
            <AllFaq />
            <Footer />
        </div>
    )
}
