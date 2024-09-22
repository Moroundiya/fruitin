import React from "react";
import titleIcon from "../images/title_icon.svg";
import productBg1 from "../images/vector_shape_1.png";
import productBg2 from "../images/vector_shape_2.png";
import { Navbar } from "../components/Navbar";

export const Cart = () => {
	return (
		<>
			<Navbar />

			<div className="w-full min-h-full font-lexend mt-0 py-16 px-3 lg:px-12 bg-[#F5F7EB] xl:mx-auto xl:px-0 relative ">
				<img
					src={productBg1}
					className="absolute top-0 left-0 pointer-events-none h-full"
					alt=""
				/>
				<img
					src={productBg2}
					className="absolute bottom-0 right-0 pointer-events-none h-full"
					alt=""
				/>
				<div className="w-full xl:w-11/12 2xl:w-4/5 mx-auto z-20 relative top-10 lg:top-[72px] ">
					<div className="flex flex-col justify-center items-center">
						<div className="flex items-center justify-center lg:justify-start">
							<img
								src={titleIcon}
								className="h-5"
								alt=""
							/>
							<p className="font-lobster text-[#FF9C00] ms-1 text-lg sm:text-xl">
								Cart
							</p>
						</div>
						<div className="mt-2 mb-3 w-full mx-auto lg:mb-8 lg:mt-5">
							<h1 className="text-2xl lg:text-3xl font-bold 2xl:text-[2.5rem] 2xl:leading-[1.15] text-center">
								Cart Details
							</h1>

							<table className="table-auto align-middle mt-20 w-full border-[3px] border-[#eaf0f2] ">
								<thead className="">
									<tr className="bg-[#ECF0F1] p-10">
										<th className="p-2.5 lg:p-5">Image</th>
										<th className="">Product Name</th>
										<th className="">Price</th>
										<th className="">Quantity</th>
										<th className="">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr className="text-center">
										<td className="p-5">Witchy Woman</td>
										<td>The Eagles</td>
										<td>1972</td>
									</tr>
									<tr className="text-center">
										<td>Shining Star</td>
										<td>Earth, Wind, and Fire</td>
										<td>1975</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
