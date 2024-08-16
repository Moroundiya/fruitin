import React from 'react'
import logoWhite from '../images/logo-white.svg';
import titleIcon from '../images//title_icon.svg'
import heroImg1 from '../images/hero_2_1.png'
import heroImg2 from '../images/hero_2_2.png'
import heroImg3 from '../images/hero_2_3.png'

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
    return (
        <>
            <nav className='flex justify-between items-center w-full fixed z-10 top-0 left-0 px-2 py-4 lg:py-5 lg:px-12 2xl:py-10 xl:px-40 font-lexend'>
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
                    <a href="#" className='bg-[#FF9C00] w-fit justify-center items-center ms-4 text-center hidden lg:flex text-sm py-2 ps-4 pe-2.5 rounded-full text-white mx-auto 2xl:text-md'>SHOP NOW
                        <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                    </a>
                </div>
            </nav>

            <Swiper
                onTouchMove={(e) => e.preventDefault()}
                direction={'vertical'}
                pagination={{
                    // dyn: true,
                    clickable: true,
                    // dynamicBullets: true
                    dynamicMainBullets: true
                }}
                modules={[Pagination, EffectFade, Autoplay]}
                className="mySwiper"
                effect='fade'
                fadeEffect={{
                    crossfade: true
                }}

                autoplay={{
                    delay: 2500
                }}
            >
                <SwiperSlide className='w-full min-h-fit lg:h-full bg-heroBg bg-cover bg-center bg-no-repeat'>
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
                                <p className='text-white text-[3rem] text-center px-3 leading-tight sm:px-5 md:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-7xl sm:leading-[1.1] lg:text-6xl lg:w-full lg:mt-8 lg:mb-14 2xl:mb-20 lg:leading-[1.2] 2xl:leading-[1.1] 2xl:text-8xl'>Our Organic Collection.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.95rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5'>Shop Now
                                    <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                                </a>

                            </div>

                            <div className='pb-8 lg:pb-0 relative'>
                                <img src={heroUnderlay} className='absolute -z-10 top-0 left-0' alt="" />
                                <img src={heroImg1} className='' alt="" />
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
                <SwiperSlide className='w-full min-h-fit lg:h-full bg-heroBg bg-cover bg-center bg-no-repeat'>
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
                <SwiperSlide className='w-full h-full bg-heroBg bg-cover bg-center bg-no-repeat'>
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
                </SwiperSlide>
                {/* <SwiperSlide className='w-full h-full bg-heroBg bg-cover bg-center bg-no-repeat'>
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
                                <img src={heroImg6} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>

            <div className='w-full h-full bg-red-300'>
                <h1>helo</h1>
            </div>

        </>

    )
}
