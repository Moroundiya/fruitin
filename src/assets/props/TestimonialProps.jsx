import React from 'react'

export const TestimonialProps = ({ name, review, img, desc }) => {
    return (
        <>
            <p className="italic text-md text-[#54595F] mb-7 lg:mb-12 leading-[1.8] lg:leading-[1.8] lg:text-xl">
                {review}
            </p>
            <div className="flex items-center">
                <img
                    src={img}
                    className="rounded-full h-[45px] lg:h-[60px]"
                    alt=""
                />
                <div className="ms-3">
                    <p className="text-black text-lg lg:text-2xl font-semibold">
                        {name}
                    </p>
                    <p className="text-[#017D03] text-sm">
                        {desc}
                    </p>
                </div>
            </div>
        </> 
    )
}
