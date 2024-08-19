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
            <nav className='flex justify-between items-center w-full absolute z-10 top-0 left-0 px-3 py-4 lg:py-5 lg:px-12 2xl:py-10 xl:px-40 font-lexend'>
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
                    clickable: true,
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
                    <div className='w-full lg:w-4/5 mx-auto min-h-fit lg:h-full flex flex-col items-center relative'>
                        <img src={heroShape1} className='h-12 absolute top-[46%] left-12 md:left-28 md:top-[40%] lg:hidden xl:block xl:top-[70%] xl:-left-10 2xl:-left-20 2xl:top-[75%]  ' alt="" />
                        <img src={heroShape2} alt="" className='h-16 absolute top-32 right-3 md:right-[15%] lg:right-[55%] xl:right-[60%] lg:top-[30%] lg:hidden xl:block' />
                        <img src={heroShape3} alt="" className='h-14 absolute top-[85px] left-6 md:left-[12%] lg:top-36 lg:left-24 xl:left-0 xl:top-[30%] lg:hidden xl:block' />
                        <div className='lg:flex lg:mt-[150px] 2xl:mt-[190px]'>
                            <div className='font-lexend mb-14 mt-[140px] lg:mt-0 relative lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-1/2'>
                                <img src={heroArrow} className='absolute bottom-1 right-0 h-[32px] sm:right-24 md:right-40 lg:hidden xl:block lg:h-14 lg:-right-5 lg:bottom-20 xl:h-12 xl:bottom-[] xl:-right-16 2xl:block 2xl:h-20 2xl:-bottom-3 2xl:-right-28' alt="" />
                                <div className='flex items-center justify-center'>
                                    <img src={titleIcon} className='h-5 lg:h-6' alt="" />
                                    <p className='font-lobster text-[#FF9C00] ms-2 text-xl sm:text-2xl'>100% Quality Foods</p>
                                </div>
                                <p className='text-white text-[3rem] text-center px-3 leading-tight sm:px-0 md:w-2/3 mx-auto font-bold my-6 sm:mx-auto sm:text-7xl sm:leading-[1.1] lg:text-6xl lg:w-full lg:mt-8 lg:mb-14 2xl:mb-10 lg:leading-[1.2] 2xl:leading-[1.1] 2xl:text-8xl'>Our Organic Collection.</p>

                                <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.9rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto lg:text-lg lg:ps-7 lg:pe-5'>Shop Now
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
            </Swiper>

            <div className='w-full min-h-fit flex flex-col-reverse font-lexend py-10 bg-aboutBg bg-center bg-cover bg-no-repeat lg:flex-row lg:w-4/5 lg:py-14 lg:mx-auto'>
                <div className='bg-orangeUnderlajy bg-center bg-cover hidden lg:flex bg-no-repeat h-1/2 justify-center lg:justify-start items-center py-8 lg:w-1/2'>
                    <img src={aboutBg} className='w-3/3' alt="" />
                </div>
                <div className='px-3 lg:w-1/2 flex flex-col justify-center'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                        <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>About Us Company</p>
                    </div>
                    <h1 className='mt-2 text-center text-2xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mt-5'>Organic Integrity Durable Impact Frutin's Story</h1>
                    <p className='text-md leading-[1.5] my-4 text-[#54595F] lg:my-6 lg:leading-[1.6]'>Some studies suggest that organic foods may have higher levels of certain nutrients and antioxidants compared to conventionally grown foods. However, this can vary depending on factors like soil quality and growing conditions.</p>
                    <ul className='text-black font-semiold space-y-2 lg:columns-2'>
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
                    <a href='#' className='bg-[#017D03] w-fit flex justify-center items-center text-[0.8rem] text-center py-2.5 ps-5 pe-3 rounded-full text-white mx-auto mt-10 lg:mx-0 lg:text-[0.95rem] lg:ps-7 lg:pe-5'>DISCOVER MORE
                        <Icon icon="solar:double-alt-arrow-right-linear" className='text-white text-2xl pe-0' />
                    </a>
                </div >
            </div>


            <div className='w-full min-h-fit flex flex-col justify-center items-center font-lexend py-10 bg-abojutBg lg:py-16 lg:bg-transparent bg-center bg-cover bg-no-repeat'>
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
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}

                    className="mySwiper w-full min-h-fit py-5 px-3 lg:w-4/5"
                >
                    <SwiperSlide>
                        <div className='bg-[#F5F7EB] relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
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
                        <div className='bg-[#F5F7EB] relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
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
                        <div className='bg-[#F5F7EB] relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
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
                        <div className='bg-[#F5F7EB] relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
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

                        <div className='bg-[#F5F7EB] relative rounded-lg flex justify-center items-center flex-col pt-10 pb-14 cursor-pointer hover:bg-[#017D03] hover:text-white group transition-all duration-700 ease-in-out'>
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


                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}
            </div>


            <div className='w-full min-h-fit justify-center px-3 items-center lg:w-4/5 mt-12 font-lexend lg:mx-auto relative pb-36'>
                <img src={chooseImg} className='absolute right-0 top-0' alt="" />
                <div className='flex'>
                    <div className='lg:w-1/2'>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <img src={titleIcon} className='h-5 lg:h-7' alt="" />
                            <p className='font-lobster text-[#FF9C00] ms-2 text-lg sm:text-xl'>Why Choose Us</p>
                        </div>
                        <h1 className='mt-2 mb-3 text-center text-2xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] lg:text-left lg:mb-5 lg:mt-5 lg:w-5/6'>Nourish Your Body with Pure Organic Goodness!</h1>
                        <p className='text-md leading-[1.5] text-[#54595F] lg:leading-[1.6] lg:w-5/6'>
                            Governments have regulations in place to ensure that products labeled as organic meet specific standards. Regular inspections and audits are conducted to maintain the integrity of the organic label.
                        </p>

                    </div>
                    <div className="w-1/2 relative">
                        <img src={rotateImg} className='absolute -top-20 right-12 -z-10 ' alt="" />
                    </div>
                </div>

                <div className='flex w-full bottom-0 min-h-fit left-0 bg-[#F5F7EB] rounded-[30px] mt-8'>
                    <div className='w-full lg:w-1/2 ps-6 py-7'>
                        <div className='grid grid-cols-2 gap-x-6 gap-y-7 rounded-xl w-fit'>

                            <div className='bg-white rounded-xl flex overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] relative -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg1} alt="" />
                                    </div>
                                </div>
                                <div className='py-5 pe-3'>
                                    <p className='font-bold text-xl mb-2'>100% Organic</p>
                                    <p className='text-[15px] leading-[1.5] text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] relative -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg2} alt="" />
                                    </div>
                                </div>
                                <div className='py-5 pe-3'>
                                    <p className='font-bold text-xl mb-2'>Fresh Products</p>
                                    <p className='text-[15px] leading-[1.5] text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] relative -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg3} alt="" />
                                    </div>
                                </div>
                                <div className='py-5 pe-3'>
                                    <p className='font-bold text-xl mb-2'>Biodynamic Food</p>
                                    <p className='text-[15px] leading-[1.5] text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl flex overflow-hidden shadow-lg'>
                                <div className='relative min-w-fit'>
                                    <div className=' bg-[#017D03] rounded-full flex justify-end items-end p-2 w-[70px] h-[70px] relative -top-4 -left-3 border-[10px] border-[#F5F7EB]'>
                                        <img className='w-5/5' src={chooseImg4} alt="" />
                                    </div>
                                </div>
                                <div className='py-5 pe-3'>
                                    <p className='font-bold text-xl mb-2'>Secured Payment</p>
                                    <p className='text-[15px] leading-[1.5] text-[#54595F] lg:leading-[1.6]'>Our products are certified by reputable organic. </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}
