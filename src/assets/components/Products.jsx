// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Icon } from "@iconify/react";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import titleIcon from "../images//title_icon.svg";
import product1 from "../images/product_1_1.jpg";
import product2 from "../images/product_1_2.jpg";
import product3 from "../images/product_1_3.jpg";
import product4 from "../images/product_1_4.jpg";
import product5 from "../images/product_1_5.jpg";
import product6 from "../images/product_1_6.jpg";
import product7 from "../images/product_1_7.jpg";
import product8 from "../images/product_1_8.jpg";

export const Products = () => {
    return (
        <div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-10 lg:px-12 lg:py-16 xl:py-20 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative">
            <img
                src={productBg1}
                className="absolute top-0 left-0 -z-0 xl:h-full"
                alt=""
            />
            <img
                src={productBg2}
                className="absolute bottom-0 right-0 xl:h-full"
                alt=""
            />
            <div className="flex items-center justify-center lg:justify-start">
                <img
                    src={titleIcon}
                    className="h-5"
                    alt=""
                />
                <p className="font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl">
                    Organic Products
                </p>
            </div>
            <div className="mt-2 w-4/5 mb-3 text-center text-2xl lg:text-3xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5">
                <h1 className="text-center">Organic & Fresh Products Daily!</h1>
            </div>
            <div className="spache-x-9 text-[0.8rem] lg:text-[0.95rem] px-3 spacje-y-8 lg:space-y-0 mt-4 lg:mt-0 grid grid-cols-3 gap-5 lg:flex">
                <button className='bg-[#017D03] text-white block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    ALL
                </button>
                <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    FRUITS
                </button>
                <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    VEGETABLE
                </button>
                <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    MEAT AND FISH
                </button>
                <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    FRUIT JUICE
                </button>
                <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>
                    SALADS
                </button>
            </div>

            <div className="mt-10 w-full xl:w-11/12 2xl:w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-x-[6px] gap-y-[15px] lg:gap-6 xl:gap-7 2xl:gap-10 relative z-20 px-0 lg:px-0">
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            Hot
                        </p>
                        <img
                            src={product1}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Bosco Apple Fruit
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $177.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            New
                        </p>
                        <img
                            src={product2}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Vegetables
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Green Cauliflower
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $39.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            Hot
                        </p>
                        <img
                            src={product3}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Mandarin orange
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $96.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            Sale
                        </p>
                        <img
                            src={product4}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Vegetables
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Shallot Red onion
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">$8.85</p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            New
                        </p>
                        <img
                            src={product5}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Sour Red Cherry
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $32.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            Hot
                        </p>
                        <img
                            src={product6}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Strawberry Fruits
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $30.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            New
                        </p>
                        <img
                            src={product7}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Six Ripe Banana
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $232.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer">
                    <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                        <p className="bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light">
                            Hot
                        </p>
                        <img
                            src={product8}
                            className="w-3/4 lg:w-auto pointer-events-none"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <p className="text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2">
                            Fresh Fruits
                        </p>
                        <p className="font-semibold text-[1.05rem] lg:text-xl">
                            Sausage Ribs Beef
                        </p>
                        <p className="text-[#54595F] lg:my-2 text-md lg:text-lg">
                            $30.85
                        </p>
                        <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                            <span className="me-1 lg:me-2 ps-1">Add to Cart</span>
                            <Icon
                                icon="icons8:add-shopping-cart"
                                className="text-xl lg:text-3xl"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
