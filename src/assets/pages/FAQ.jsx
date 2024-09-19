import React, { useEffect, useState } from 'react'

import { Navbar } from '../components/Navbar'
import { AllFaq } from '../components/AllFaq'

export const FAQ = () => {

    return (
        <div className="mt-[50px] lg:mt-[70px]">
            <Navbar />
            <AllFaq />
        </div>
    )
}
