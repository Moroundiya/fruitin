import React from 'react'
import counter1 from "../images/counter_card_1.svg";
import counter2 from "../images/counter_card_2.svg";
import counter3 from "../images/counter_card_3.svg";
import counter4 from "../images/counter_card_4.svg";

export const Counter = () => {
    return (
        <div className="bg-counterBg bg-cover bg-no-repeat bg-center w-full py-10 lg:pt-20 lg:pb-18 font-lexend text-white">
            <div className="grid grid-cols-2 xl:grid-cols-4 px-3 lg:px-0 xl:w-11/12 2xl:w-4/5 mx-auto lg:divide-x divide-[#ffffff66]">
                <div className="flex flex-col items-center justify-center border-b border-r xl:border-b-0 border-[#ffffff66] xl:flex-row xl:justify-start py-6 xl:py-0">
                    <div className="">
                        <img
                            src={counter1}
                            className="h-14 xl:h-auto mb-4 xl:mb-0"
                            alt=""
                        />
                    </div>
                    <div className="lg:ms-4 flex flex-col justify-center items-center">
                        <p className="text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold">
                            15663+
                        </p>
                        <p className="text-sm lg:text-lg">Our Total Products</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center border-b xl:border-b-0 border-[#ffffff66] xl:flex-row py-6 xl:py-0">
                    <div className="">
                        <img
                            src={counter2}
                            className="h-14 xl:h-auto mb-4 xl:mb-0"
                            alt=""
                        />
                    </div>
                    <div className="lg:ms-4 flex flex-col justify-center items-center">
                        <p className="text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold">
                            356+
                        </p>
                        <p className="text-sm lg:text-lg">Team Members</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-r  border-[#ffffff66] xl:flex-row py-6 xl:py-0">
                    <div className="">
                        <img
                            src={counter3}
                            className="h-14 xl:h-auto mb-4 xl:mb-0"
                            alt=""
                        />
                    </div>
                    <div className="lg:ms-4 flex flex-col justify-center items-center">
                        <p className="text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold">
                            2365+
                        </p>
                        <p className="text-sm lg:text-lg">Satisfied Customers</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center  border-[#ffffff66] xl:flex-row py-6 xl:py-0">
                    <div className="">
                        <img
                            src={counter4}
                            className="h-14 xl:h-auto mb-4 xl:mb-0"
                            alt=""
                        />
                    </div>
                    <div className="lg:ms-4 flex flex-col justify-center items-center">
                        <p className="text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold">
                            156+
                        </p>
                        <p className="text-sm lg:text-lg">Awards Winning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
