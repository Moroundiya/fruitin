/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export const AllQuestions = ({
    question,
    answer,
    index,
    open,
    showAnswerHandle,
}) => {



    return (
        <div
            className="w-full h-full bg-white cursor-pointer shadow-md rounded-lg inline-block align-middle mb-5"
            onClick={() => showAnswerHandle(index)}>
            <div className="">
                <div className="flex justify-between items-center cursor-pointer py-3 px-2.5 lg:px-6">
                    <p className="text-[0.96rem] font-semibold lg:text-[1.09rem]">
                        {question}
                    </p>
                    <Icon
                        icon={`${open == index ? "clarity:eye-hide-line" : "hugeicons:view"
                            }`}
                        className="text-xl lg:text-[1.4rem] text-[#017D03]"
                    />
                </div>
                <div
                    className={`${open == index
                        ? "max-h-[300px] pt-4 pb-5 border-t"
                        : "max-h-0"
                        } font-normal  text-[#54595F] border-[#D9D9D9] bg-white overflow-hidden max-h-0 leading-[1.5] px-6 text-[0.91rem] lg:text-[0.95rem] transition-all ease-in-out duration-500`}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};
