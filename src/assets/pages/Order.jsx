import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Order = () => {
  return (
		<>
			<Navbar />
			<div className="w-full min-h-fit flex flex-col justify-center items-center font-lexend mt-0 py-16 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative top-10 lg:top-[72px]">
				<Icon
					icon="icon-park-solid:check-one"
					className="text-[#017D03] text-7xl lg:text-8xl mt-5 lg:mt-10"
				/>
				<p className="text-[1.4rem] lg:text-3xl font-bold mt-5 mb-1">
					Your order is completed!
				</p>
				<p className="text-[#767676] text-sm">
					Thank you. Your order has been received.
				</p>

				<div className="border-2 border-dashed border-[#FF9C00] p-5 lg:px-10 my-10 w-4/5 lg:w-2/4 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0">
					<div className="flex flex-col justify-center space-y-1">
						<p className="text-[#767676] text-sm">Order Number</p>
						<p className="font-semibold">13119</p>
					</div>
					<div className="flex flex-col justify-center space-y-1">
						<p className="text-[#767676] text-sm">Date</p>
						<p className="font-semibold">27/10/2023</p>
					</div>
					<div className="flex flex-col justify-center space-y-1">
						<p className="text-[#767676] text-sm">Total</p>
						<p className="font-semibold">$81.40</p>
					</div>
					<div className="flex flex-col justify-center space-y-1">
						<p className="text-[#767676] text-sm">Payment Method</p>
						<p className="font-semibold">Direct Bank Transfer</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
