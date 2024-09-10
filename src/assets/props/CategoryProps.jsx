import React from 'react'
import cardBg from "../images/card-bg.png";
import circleBg from "../images/circle-bg.png";
export const CategoryProps = ({ img, desc, title }) => {
    return (
        <div className="bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out">
            <img
                src={cardBg}
                className="w-full h-full absolute left-0 top-0"
                alt=""
            />
            <div className="p-5 lg:p-6 rounded-full relative mb-5">
                <img
                    src={circleBg}
                    className="absolute top-0 left-0 w-full h-full"
                    alt=""
                />
                <img
                    src={img}
                    className="h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                    alt=""
                />
            </div>
            <p className="text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out">
                {desc}
            </p>
            <p className="text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out">
                {title}
            </p>
        </div>
    )
}
