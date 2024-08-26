import React, { useRef, useState } from 'react'
import logoWhite from '../images/logo-white.svg';
import titleIcon from '../images//title_icon.svg'
import heroImg1 from '../images/hero_2_1.png'
import heroImg2 from '../images/hero_2_2.png'
import heroImg3 from '../images/hero_2_3.png'
import aboutBg from '../images/about_img.png'
import bullet from '../images/bullet.svg'
import cardBg from '../images/card-bg.png'
import vegetable from '../images/vegetable.svg'
import circleBg from '../images/circle-bg.png';
import fruits from '../images/fruit.svg'
import productsImg from '../images/product.svg';
import tea from '../images/tea.svg';
import meat from '../images/meat.svg';
import rotateImg from '../images/choose-rotate.png'
import chooseImg from '../images/why-choose-us.png'
import chooseImg1 from '../images/choose1.svg'
import chooseImg2 from '../images/choose2.svg'
import chooseImg3 from '../images/choose3.svg'
import chooseImg4 from '../images/choose4.svg'
import counter1 from '../images/counter_card_1.svg';
import counter2 from '../images/counter_card_2.svg';
import counter3 from '../images/counter_card_3.svg';
import counter4 from '../images/counter_card_4.svg';
import productBg1 from '../images/vector_shape_1.png'
import productBg2 from '../images/vector_shape_2.png'
import product1 from '../images/product_1_1.jpg'
import product2 from '../images/product_1_2.jpg'
import product3 from '../images/product_1_3.jpg'
import product4 from '../images/product_1_4.jpg'
import product5 from '../images/product_1_5.jpg'
import product6 from '../images/product_1_6.jpg'
import product7 from '../images/product_1_7.jpg'
import product8 from '../images/product_1_8.jpg'

import heroImg4 from '../images/hero_1_1.png'
import heroImg5 from '../images/hero_1_2.png'
import heroImg6 from '../images/hero_1_3.png'

import { Icon } from '@iconify/react';
import heroArrow from '../images/hero_arrow.svg'
import heroShape1 from '../images/hero_shape_1_1.png'
import heroShape2 from '../images/hero_shape_1_2.png'
import heroShape3 from '../images/hero_shape_1_3.png'
import heroUnderlay from '../images/hero_shape_2_1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const Homepage = () => {
    const slideRef = useRef();
    const [handleSlide, setHandleSlide] = useState({
        isFirst: true,
        isLast: false
    })
    const slidechange = swiper => {
        setHandleSlide({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd
        })
    }
    return (
        <>
            <nav className='flex justify-between uppercase items-center w-full absolute z-10 top-0 left-0 px-3 py-4 lg:py-5 lg:px-12 xl:px-20 2xl:py-10 font-lexend'>
                <Icon icon="tabler:menu-4" className='text-white text-[2.1rem] lg:hidden' />
                <img src={logoWhite} className='h-8 lg:h-12 2xl:h-14' alt="" />
                <div className='hidden text-lg text-white space-x-9 lg:block'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                </div>
                <div className='flex justify-center items-center'>
                    <Icon icon="bitcoin-icons:cart-filled" className='text-white text-[2.1rem] lg:text-4xl' />
                    <a href="#" className='bg-[#FF9C00] w-fit justify-center items-center ms-4 text-center hidden lg:flex text-sm py-2 ps-4 pe-2.5 rounded-full text-white mx-auto 2xl:text-md z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[" "] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>SHOP NOW
                        <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                    </a>
                </div>
            </nav>
            <Swiper
                onTouchMove={(e) => e.preventDefault()}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true
                }}
                modules={[Pagination, EffectFade, Autoplay]}
                className=""
                id='heroSwiper'
                effect='fade'
                fadeEffect={{
                    crossfade: true
                }}
            // autoplay={{
            //     delay: 2500
            // }}
            >
                <SwiperSlide className='w-full flex justify-center items-center bg-heroBg bg-cover bg-center bg-no-repeat'>
                    <div className='w-full xl:w-5/5 2xl:4/5 mx-auto lg:mt-[170px] flex flex-col items-center relative pb-5'>
                        <img src={heroShape1} className='h-9 absolute top-[46%] left-11 md:left-28 md:top-[40%] lg:hidden xl:block xl:top-[70%] xl:-left-10 2xl:-left-20 2xl:top-[75%]  ' alt="" />
                        <img src={heroShape2} alt="" className='h-12 absolute top-32 right-3 md:right-[15%] lg:right-[55%] xl:right-[60%] lg:top-[30%] lg:hidden xl:block' />
                        <img src={heroShape3} alt="" className='h-10 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 xl:left-0 xl:top-[30%] lg:hidden xl:block' />
                        <div className='lg:flex justify-center items-center'>
                            <div className='font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2'>
                                <img src={heroArrow} className='absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hidden xl:block lg:h-14 lg:-right-5 lg:bottom-20 xl:h-12 xl:bottom-0 xl:right-16 2xl:h-20 2xl:-bottom-5 2xl:right-8' alt="" />
                                <div className='flex items-center justify-center'>
                                    <img src={titleIcon} className='h-5 lg:h-6' alt="" />
                                    <p className='font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl'>100% Quality Foods</p>
                                </div>
                                <p className='text-white text-[2.6rem] text-center px-3 leading-tight sm:px-0 sm:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-6xl sm:leading-[1.1] lg:text-[4.3rem] xl:text-7xl lg:w-full xl:mt-8 xl:mb-14 2xl:mb-10 xl:leading-[1.2] 2xl:leading-[1.1] 2xl:text-[5.4rem]'>Our Organic Collection.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.9rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5 z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>Shop Now
                                    <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                                </a>
                            </div>
                            <div className='lg:w-1/2 pb-8 lg:pb-0 relative flex justify-center items-center bg-red-40s0'>
                                <img src={heroUnderlay} className='absolute w-full h-full -z-10 top-0 left-0' alt="" />
                                <img src={heroImg1} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>


                    {/* <div className='w-full min-h-fit lg:h-full bg-heroBg bg-cover bg-center bg-no-repeat flex flex-col items-center relative'>
                        <img src={heroShape1} className='h-12 absolute top-[46%] left-12 md:left-28 md:top-[40%] xl:left-16 2xl:left-32 xl:top-[80%] lg:hidden xl:block' alt="" />
                        <img src={heroShape2} alt="" className='h-16 absolute top-32 right-3 md:right-[15%] lg:right-[55%] lg:top-[30%] lg:hidden xl:block' />
                        <img src={heroShape3} alt="" className='h-14 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 lg:hidden xl:block' />
                        <div className='lg:flex lg:mt-[150px]'>
                            <div className='font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2'>
                                <img src={heroArrow} className='absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hiddenk lg:h-14 lg:-right-5 lg:bottom-20 2xl:block 2xl:h-20 2xl:bottom-12 2xl:right-0' alt="" />
                                <div className='flex items-center justify-center'>
                                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                                    <p className='font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl 2xl:text-3xl'>100% Quality Foods</p>
                                </div>
                                <p className='text-white text-[3rem] text-center px-3 leading-tight sm:px-5 md:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-7xl sm:leading-[1.1] lg:text-6xl lg:w-full lg:mt-8 lg:mb-14 2xl:mb-20 lg:leading-[1.2] 2xl:leading-[1.1] 2xl:text-8xl'>Our Organic Collection.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.95rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5'>Shop Now
                                    <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                                </a>

                            </div>

                            <div className='pb-8 lg:pb-0'>
                                <img src={heroImg1} className='' alt="" />
                            </div>
                        </div>

                    </div> */}
                </SwiperSlide>
                {/* <SwiperSlide className='w-full min-h-fit lg:h-full bg-heroBg bg-cover bg-center bg-no-repeat'>
                    <div className='w-full min-h-fit lg:h-full flex flex-col items-center relative'>
                        <img src={heroShape1} className='h-12 absolute top-[46%] left-12 md:left-28 md:top-[40%] xl:left-16 2xl:left-32 xl:top-[80%] lg:hidden xl:block' alt="" />
                        <img src={heroShape2} alt="" className='h-16 absolute top-32 right-3 md:right-[15%] lg:right-[55%] lg:top-[30%] lg:hidden xl:block' />
                        <img src={heroShape3} alt="" className='h-14 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 lg:hidden xl:block' />
                        <div className='lg:flex lg:mt-[150px]'>
                            <div className='font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2'>
                                <img src={heroArrow} className='absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hiddenk lg:h-14 lg:-right-5 lg:bottom-20 2xl:block 2xl:h-20 2xl:bottom-12 2xl:right-0' alt="" />
                                <div className='flex items-center justify-center'>
                                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                                    <p className='font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl 2xl:text-3xl'>100% Quality Foods</p>
                                </div>
                                <p className='text-white text-[3rem] text-center px-3 leading-tight sm:px-5 md:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-7xl sm:leading-[1.1] lg:text-6xl lg:w-full lg:mt-8 lg:mb-14 2xl:mb-20 lg:leading-[1.2] 2xl:leading-[1.1] 2xl:text-8xl'>Our Organic Vegetables.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.95rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5'>Shop Now
                                    <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                                </a>

                            </div>

                            <div className='pb-8 lg:pb-0 relative'>
                                <img src={heroUnderlay} className='absolute -z-10 top-0 left-0' alt="" />
                                <img src={heroImg2} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full min-h-git bg-heroBg bg-cover bg-center bg-no-repeat'>
                    <div className='w-full min-h-fit lg:h-full flex flex-col items-center relative'>
                        <img src={heroShape1} className='h-12 absolute top-[46%] left-12 md:left-28 md:top-[40%] xl:left-16 2xl:left-32 xl:top-[80%] lg:hidden xl:block' alt="" />
                        <img src={heroShape2} alt="" className='h-16 absolute top-32 right-3 md:right-[15%] lg:right-[55%] lg:top-[30%] lg:hidden xl:block' />
                        <img src={heroShape3} alt="" className='h-14 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 lg:hidden xl:block' />
                        <div className='lg:flex lg:mt-[150px]'>
                            <div className='font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2'>
                                <img src={heroArrow} className='absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hiddenk lg:h-14 lg:-right-5 lg:bottom-20 2xl:block 2xl:h-20 2xl:bottom-12 2xl:right-0' alt="" />
                                <div className='flex items-center justify-center'>
                                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                                    <p className='font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl 2xl:text-3xl'>100% Quality Foods</p>
                                </div>
                                <p className='text-white text-[3rem] text-center px-3 leading-tight sm:px-5 md:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-7xl sm:leading-[1.1] lg:text-6xl lg:w-full lg:mt-8 lg:mb-14 2xl:mb-20 lg:leading-[1.2] 2xl:leading-[1.1] 2xl:text-8xl'>Our Organic Fruits.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.95rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5'>Shop Now
                                    <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                                </a>

                            </div>

                            <div className='pb-8 lg:pb-0 relative'>
                                <img src={heroUnderlay} className='absolute -z-10 top-0 left-0' alt="" />
                                <img src={heroImg3} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>

            <div className='w-full min-h-fit flex flex-col-reverse font-lexend py-10 bg-aboutBg bg-center bg-cover bg-no-repeat lg:flex-row lg:px-12 xl:w-4/5 lg:py-14 lg:mx-auto'>
                <div className='bg-orangeUnderlajy bg-center bg-cover hidden lg:flex bg-no-repeat h-1/2 justify-center lg:justify-start items-center py-8 lg:w-1/2'>
                    <img src={aboutBg} className='lg:w-4/5' alt="" />
                </div>
                <div className='px-3 lg:w-1/2 flex flex-col justify-center'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                        <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>About Us Company</p>
                    </div>
                    <h1 className='mt-2 text-center text-2xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mt-5'>Organic Integrity Durable Impact Frutin's Story</h1>
                    <p className='text-md leading-[1.5] my-4 text-[#54595F] lg:my-6 lg:leading-[1.6]'>Some studies suggest that organic foods may have higher levels of certain nutrients and antioxidants compared to conventionally grown foods. However, this can vary depending on factors like soil quality and growing conditions.</p>
                    <ul className='text-black font-semiold space-y-2 xl:columns-2'>
                        <li className='flex items-center space-x-2'>
                            <img src={bullet} className='' alt="" />
                            <span>100% Organic Products</span>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <img src={bullet} className='' alt="" />
                            <span>Always Fresh & Natural Foods</span>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <img src={bullet} className='' alt="" />
                            <span>Environmental Benefits</span>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <img src={bullet} className='' alt="" />
                            <span>No Synthetic Chemicals</span>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <img src={bullet} className='' alt="" />
                            <span>Best Prices</span>
                        </li>
                    </ul>
                    <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.8rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto mt-10 lg:mx-0 lg:text-[0.95rem] lg:ps-7 lg:pe-5 z-50 hover:text-white overflow-hidden relative transition-all duration-700 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>DISCOVER MORE
                        <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                    </a>
                </div >
            </div>


            <div className='w-full min-h-fit flex flex-col justify-center items-center font-lexend py-10 lg:px-12 lg:py-16 lg:bg-transparent xl:mx-auto xl:px-0'>
                <div className='flex items-center justify-center lg:justify-start'>
                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                    <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>Food Category</p>
                </div>
                <h1 className='mt-2 mb-3 text-center text-2xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5'>What We’re Offering</h1>


                <Swiper
                    slidesPerView={5}
                    // centeredSlides={true}
                    spaceBetween={20}
                    // navigation={true}
                    ref={slideRef}
                    loop={true}
                    onSlideChange={slidechange}
                    autoplay={{
                        delay: 2300
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1300: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}

                    className="mySwiper w-full min-h-fit py-5 px-3 xl:w-11/12 xl:px-0 2xl:w-4/5"
                >
                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
                            <img src={cardBg} className='w-full h-full absolute left-0 top-0' alt="" />
                            <div className='p-5 lg:p-6 rounded-full relative mb-5'>
                                <img src={circleBg} className='absolute top-0 left-0 w-full h-full' alt="" />
                                <img src={vegetable} className='h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out' alt="" />
                            </div>
                            <p className='text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>Product (01)</p>
                            <p className='text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out'>Fresh Vegetable</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
                            <img src={cardBg} className='w-full h-full absolute left-0 top-0' alt="" />
                            <div className='p-5 lg:p-6 rounded-full relative mb-5'>
                                <img src={circleBg} className='absolute top-0 left-0 w-full h-full' alt="" />
                                <img src={fruits} className='h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out' alt="" />
                            </div>
                            <p className='text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>Product (02)</p>
                            <p className='text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out'>Natural Fruits</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
                            <img src={cardBg} className='w-full h-full absolute left-0 top-0' alt="" />
                            <div className='p-5 lg:p-6 rounded-full relative mb-5'>
                                <img src={circleBg} className='absolute top-0 left-0 w-full h-full' alt="" />
                                <img src={productsImg} className='h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out' alt="" />
                            </div>
                            <p className='text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>Product (03)</p>
                            <p className='text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out'>Dairy Products</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
                            <img src={cardBg} className='w-full h-full absolute left-0 top-0' alt="" />
                            <div className='p-5 lg:p-6 rounded-full relative mb-5'>
                                <img src={circleBg} className='absolute top-0 left-0 w-full h-full' alt="" />
                                <img src={tea} className='h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out' alt="" />
                            </div>
                            <p className='text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>Product (04)</p>
                            <p className='text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out'>Tea & Coffee</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] shadow-md relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
                            <img src={cardBg} className='w-full h-full absolute left-0 top-0' alt="" />
                            <div className='p-5 lg:p-6 rounded-full relative mb-5'>
                                <img src={circleBg} className='absolute top-0 left-0 w-full h-full' alt="" />
                                <img src={meat} className='h-10 lg:h-full relative z-10 left-0 top-0 group-hover:scale-x-[-1] transition-all duration-700 ease-in-out' alt="" />
                            </div>
                            <p className='text-[#54595F] mb-2 text-[0.9rem] lg:text-[0.98rem] group-hover:text-gray-300 transition-all duration-700 ease-in-out'>Product (05)</p>
                            <p className='text-[1.1rem] lg:text-[1.18rem] font-semibold text-black group-hover:text-white transition-all duration-700 ease-in-out'>Meat and Fish</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='flex mt-3 space-x-5 lg:space-x-5'>
                    <button disabled={handleSlide.isFirst} className={`${handleSlide.isFirst ? 'bg-[#017d033e] p-2 rounded-full cursor-pointer' : 'bg-[#017D03] p-2 rounded-full cursor-pointer'}`} onClick={() => slideRef.current.swiper.slidePrev()}>
                        <Icon icon="ion:arrow-back" className='text-white rounded-full text-[1.3rem] lg:text-2xl' />
                    </button>
                    <button disabled={handleSlide.isLast} className={`${handleSlide.isLast ? 'bg-[#017d033e] p-2 rounded-full cursor-pointer' : 'bg-[#017D03] p-2 rounded-full cursor-pointer'}`} onClick={() => slideRef.current.swiper.slideNext()}>
                        <Icon icon="ion:arrow-forward" className='text-white rounded-full text-[1.3rem] lg:text-2xl' />
                    </button>
                </div>
            </div>

            <div className='w-full min-h-fit justify-center px-3 items-center lg:px-12 xl:px-0 xl:w-11/12 2xl:w-4/5 mt-24 lg:mt-3 font-lexend 2xl:mt-16 lg:mx-auto relative pb-16'>
                <div className="lg:hidden w-full flex flex-col justify-center items-center absolute top-0 left-0 -z-10">
                    <img src={rotateImg} className='w-4/5 -top-20 right-7 absolute sm:w-2/4 sm:left-1/4' alt="" />
                </div>
                <img src={chooseImg} className='right-0 top-0 sm:relative sm:w-3/4 sm:left-[50px] sm:top-auto lg:hidden lg:absolute lg:right-0 lg:left-auto xl:block xl:w-5/12 xl:top-16 2xl:w-auto 2xl:top-0  z-50' alt="" />
                <div className='flex flex-col lg:flex-row'>
                    <div className='xl:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center items-center xl:justify-start xl:items-start '>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                            <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>Why Choose Us</p>
                        </div>
                        <h1 className='mt-3 mb-4 text-center text-2xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-5 lg:mt-5 xl:w-5/6 mx-auto xl:mx-0'>Nourish Your Body with Pure Organic Goodness!</h1>
                        <p className='text-md leading-[1.5] text-[#54595F] lg:leading-[1.6] lg:w-5/6 mx-auto text-center xl:mx-0 xl:text-left'>
                            Governments have regulations in place to ensure that products labeled as organic meet specific standards. Regular inspections and audits are conducted to maintain the integrity of the organic label.
                        </p>
                    </div>
                    <div className="w-1/2 relative hidden xl:block">
                        <img src={rotateImg} className='absolute lg:w-3/5 xl:top-0 lg:right-8 xl:right-12 2xl:-top-20' alt="" />
                        <img src={chooseImg} className='absolute w-4/5 right-0 top-20 xl:hidden' alt="" />
                    </div>
                </div>
                <div className='flex w-full bottom-0 min-h-fit left-0 bg-[#F5F7EB] rounded-[30px] mt-8'>
                    <div className='w-full xl:w-7/12 2xl:w-1/2 mx-auto xl:mx-0 px-3 py-5 xl:pe-0 xl:ps-6 lg:py-7'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 justify-center items-center gap-x-6 gap-y-7 rounded-xl w-full lg-w-fit'>

                            {/* <div className='bg-white rounded-xl flex flex-col lg:flex-row justify-center items-center lg:items-start overflow-hidden shadow-lg py-6 lg:py-0'>
                                <div className='relative min-w-fit mb-5 lg:mb-0'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] lg:relative -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='pb-0 lg:py-5 pe-3 text-center lg:text-left'>
                                    <p className='font-bold text-xl mb-2'>100% Organic</p>
                                    <p className='text-md lg:text-[15px] w-4/5 lg:w-full mx-auto leading-[1.5] text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div> */}


                            <div className='bg-white rounded-xl flex lg:justify-center lg:items-center lg:flex-col xl:flex-row overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] absolute lg:relative xl:absolute lg:mt-4 xl:mt-0 lg:top-0 lg:left-0 xl:-top-[90px] xl:-left-4 -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='py-8 px-5 lg:pt-3 lg:pb-4 xl:py-8 '>
                                    <p className='font-bold text-xl mb-2 text-center'>100% Organic</p>
                                    <p className='text-[15px] leading-[1.5] text-center text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex lg:justify-center lg:items-center lg:flex-col xl:flex-row overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] absolute lg:relative xl:absolute lg:mt-4 xl:mt-0 lg:top-0 lg:left-0 xl:-top-[90px] xl:-left-4 -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='py-8 px-5 lg:pt-3 lg:pb-4 xl:py-8 '>
                                    <p className='font-bold text-xl mb-2 text-center'>Fresh Products</p>
                                    <p className='text-[15px] leading-[1.5] text-center text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex lg:justify-center lg:items-center lg:flex-col xl:flex-row overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] absolute lg:relative xl:absolute lg:mt-4 xl:mt-0 lg:top-0 lg:left-0 xl:-top-[90px] xl:-left-4 -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='py-8 px-5 lg:pt-3 lg:pb-4 xl:py-8 '>
                                    <p className='font-bold text-xl mb-2 text-center'>Biodynamic Food</p>
                                    <p className='text-[15px] leading-[1.5] text-center text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex lg:justify-center lg:items-center lg:flex-col xl:flex-row overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] absolute lg:relative xl:absolute lg:mt-4 xl:mt-0 lg:top-0 lg:left-0 xl:-top-[90px] xl:-left-4 -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='py-8 px-5 lg:pt-3 lg:pb-4 xl:py-8 '>
                                    <p className='font-bold text-xl mb-2 text-center'>Secured Payment</p>
                                    <p className='text-[15px] leading-[1.5] text-center text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-counterBg bg-cover bg-no-repeat bg-center w-full py-10 lg:pt-20 lg:pb-18 font-lexend text-white'>
                <div className='grid grid-cols-2 xl:grid-cols-4 px-3 lg:px-0 xl:w-11/12 2xl:w-4/5 mx-auto lg:divide-x divide-[#ffffff66]'>
                    <div className='flex flex-col items-center justify-center border-b border-r xl:border-b-0 border-[#ffffff66] xl:flex-row xl:justify-start py-6 xl:py-0'>
                        <div className=''>
                            <img src={counter1} className='h-14 xl:h-auto mb-4 xl:mb-0' alt="" />
                        </div>
                        <div className='lg:ms-4 flex flex-col justify-center items-center'>
                            <p className='text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold'>15663+</p>
                            <p className='text-sm lg:text-lg'>Our Total Products</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center border-b xl:border-b-0 border-[#ffffff66] xl:flex-row py-6 xl:py-0'>
                        <div className=''>
                            <img src={counter2} className='h-14 xl:h-auto mb-4 xl:mb-0' alt="" />
                        </div>
                        <div className='lg:ms-4 flex flex-col justify-center items-center'>
                            <p className='text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold'>356+</p>
                            <p className='text-sm lg:text-lg'>Team Members</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center border-r  border-[#ffffff66] xl:flex-row py-6 xl:py-0'>
                        <div className=''>
                            <img src={counter3} className='h-14 xl:h-auto mb-4 xl:mb-0' alt="" />
                        </div>
                        <div className='lg:ms-4 flex flex-col justify-center items-center'>
                            <p className='text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold'>2365+</p>
                            <p className='text-sm lg:text-lg'>Satisfied Customers</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center  border-[#ffffff66] xl:flex-row py-6 xl:py-0'>
                        <div className=''>
                            <img src={counter4} className='h-14 xl:h-auto mb-4 xl:mb-0' alt="" />
                        </div>
                        <div className='lg:ms-4 flex flex-col justify-center items-center'>
                            <p className='text-[1.8rem] lg:text-4xl xl:text-5xl lg:mb-2 font-bold'>156+</p>
                            <p className='text-sm lg:text-lg'>Awards Winning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-10 lg:px-12 lg:py-16 xl:py-20 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative'>
                <img src={productBg1} className='absolute top-0 left-0 -z-0 xl:h-full' alt="" />
                <img src={productBg2} className='absolute bottom-0 right-0 xl:h-full' alt="" />
                <div className='flex items-center justify-center lg:justify-start'>
                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                    <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>Organic Products</p>
                </div>
                <div className='mt-2 w-4/5 mb-3 text-center text-2xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5'>
                    <h1 className='text-center'>Organic & Fresh Products Daily!</h1>
                </div>
                <div className='spache-x-9 text-[0.8rem] lg:text-[0.95rem] px-3 spacje-y-8 lg:space-y-0 mt-4 lg:mt-0 grid grid-cols-3 gap-5 lg:flex'>
                    <button className='bg-[#017D03] text-white block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>ALL</button>
                    <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>FRUITS</button>
                    <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>VEGETABLE</button>
                    <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>MEAT AND FISH</button>
                    <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>FRUIT JUICE</button>
                    <button className='block px-1.5 lg:px-7 py-2 border border-[#D9D9D9] rounded-md hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#017D03] after:scale-y-0 after:hover:scale-y-[1]'>SALADS</button>
                </div>

                <div className='mt-10 w-full xl:w-11/12 2xl:w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-x-[6px] gap-y-[15px] lg:gap-6 xl:gap-7 2xl:gap-10 relative z-20 px-0 lg:px-0'>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>Hot</p>
                            <img src={product1} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Bosco Apple Fruit</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$177.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>New</p>
                            <img src={product2} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Vegetables</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Green Cauliflower</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$39.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>

                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>Hot</p>
                            <img src={product3} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Mandarin orange</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$96.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>

                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>Sale</p>
                            <img src={product4} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Vegetables</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Shallot Red onion</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$8.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>New</p>
                            <img src={product5} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Sour Red Cherry</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$32.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>Hot</p>
                            <img src={product6} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Strawberry Fruits</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$30.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>New</p>
                            <img src={product7} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Six Ripe Banana</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$232.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] shadow-lg p-1.5 lg:p-4 flex justify-center items-center flex-col cursor-pointer'>
                        <div className='w-full bg-[#F7F7F7] rounded-[20px] flex justify-center items-center overflow-hidden relative cursor-pointer after:content-[""] after:w-full after:h-full after:bg-[d#017d0346] after:absolute after:top-0 after:left-0'>
                            <p className='bg-[#017D03] text-white px-2.5 lg:px-4 rounded-md py-0.5 text-[10px] lg:text-[13px] absolute top-3 left-3 font-light'>Hot</p>
                            <img src={product8} className='w-3/4 lg:w-auto pointer-events-none' alt="" />
                        </div>
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[#54595F] text-sm lg:text-md font-light mb-1 lg:mb-2'>Fresh Fruits</p>
                            <p className='font-semibold text-[1.05rem] lg:text-xl'>Sausage Ribs Beef</p>
                            <p className='text-[#54595F] lg:my-2 text-md lg:text-lg'>$30.85</p>
                            <button className='text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem] flex justify-center items-center my-4 lg:mt-3 lg:mb-4 bg-[#017D03] text-white px-2.5 py-1.5 lg:px-4 lg:py-2  rounded-full hover:text-white overflow-hidden relative transition-all duration-700 z-10 after:transition-all after:duration-700 after:origin-bottom  after:content-[""] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:bg-[#FF9C00] after:scale-y-0 after:hover:scale-y-[1]'>
                                <span className='me-1 lg:me-2 ps-1'>Add to Cart</span>
                                <Icon icon="icons8:add-shopping-cart" className='text-xl lg:text-3xl' />
                            </button>
                        </div>
                    </div>






                </div>
            </div>






            <div className='w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 pb-10 pt-5 lg:px-12 lg:pb-16 lg:pt-6 xl:pb-20 xl:pt-6 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative'>
                <img src={productBg1} className='absolute top-0 left-0 -z-0 xl:h-full' alt="" />
                <img src={productBg2} className='absolute bottom-0 right-0 xl:h-full' alt="" />
                <div className='flex items-center justify-center lg:justify-start'>
                    <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                    <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>How We Make Quality Foods</p>
                </div>
                <div className='mt-2 w-4/5 mb-3 text-center text-2xl font-bold lg:w-full mx-auto  2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-8 lg:mt-5'>
                    <h1 className='text-center'>How We Work It?</h1>
                </div>

                <div className='mt-10 w-full xl:w-11/12 2xl:w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-x-[6px] gap-y-[15px] lg:gap-6 xl:gap-7 2xl:gap-10 relative z-20 px-0 lg:px-0'>

                   





                </div>
            </div>
        </>
    )
}
