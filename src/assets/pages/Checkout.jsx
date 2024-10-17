import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'

import { Footer } from '../components/Footer';
import { CheckoutItems } from '../components/CheckoutItems';

export const Checkout = () => {

    const [paymentMethod, setPaymentMethod] = useState(null)
    useEffect(() => {
		// window.scrollTo(0, 0);
    }, [paymentMethod]);

    return (
        <>
            <Navbar />
                <CheckoutItems paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            <Footer />
        </>
    )
}
