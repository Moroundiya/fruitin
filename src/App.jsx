import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./assets/pages/About";
import { Homepage } from "./assets/pages/Homepage";
import { Error } from "./assets/pages/Error";
import { Shop } from "./assets/pages/Shop";
import { FAQ } from "./assets/pages/FAQ";
import { Contact } from "./assets/pages/Contact";
import { Cart } from "./assets/pages/Cart";
import { Checkout } from "./assets/pages/Checkout";
import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

import { allproducts } from "./assets/data/allproducts";
import { Order } from "./assets/pages/Order";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error />,
		element: <Homepage />,
	},
	{
		path: "/about-us",
		element: <About />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
	{
		path: "/faq",
		element: <FAQ />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
	{
		path: "/order",
		element: <Order />,
	},
]);
function App() {
	const retrievedList = JSON.parse(localStorage.getItem("products"));
	const newCart =
		retrievedList?.map((item) => ({
			...item,
			total: eval("(" + item.total + ")"),
		})) || [];

	const [productList, setProductList] = useState(allproducts);
	const [storeCart, setStoreCart] = useState(newCart);
	const [cartItems, setCartItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [username, setUsername] = useState("");
	const [address, setAddress] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");

	useEffect(() => {
		setCartItems(storeCart.length);

		const functionsToStore = storeCart.map((item) => ({
			...item,
			total: item.total.toString(),
		}));
		localStorage.setItem("products", JSON.stringify(functionsToStore));

		if (localStorage.getItem("products")) {
			const totalAmount = storeCart.reduce((accumulator, item) => {
				return (Number(accumulator) + Number(item.total())).toFixed(2);
			}, 0);
			setTotalPrice(totalAmount);
		}
	}, [storeCart, cartItems, paymentMethod]);

	const bounceDown = {
		hidden: { opacity: 0, y: -60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.4,
				duration: 2,
				type: "spring",
				bounce: 0.7,
			},
		},
	};
	const bounceUp = {
		hidden: { opacity: 0, y: 70 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.4,
				duration: 2,
				type: "spring",
				bounce: 0.7,
			},
		},
	};

	const parentVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				delayChildren: 0.2,
				staggerChildren: 0.25,
				type: "spring",
			},
		},
	};

	const childrenVariants = {
		hidden: { x: 100, opacity: 0, scale: 0 },
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
	};

	const slideRight = {
		hidden: { opacity: 0, x: -70 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.5,
				duration: 2,
				type: "spring",
				bounce: 0.7,
			},
		},
	};
	const slideLeft = {
		hidden: { opacity: 0, x: 70 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.5,
				duration: 2,
				type: "spring",
				bounce: 0.7,
			},
		},
	};


	const zoomUp = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 2,
				bounce: 0.4,
				type: "spring",
			},
		}
	}

	return (
		<>
			<ProductContext.Provider
				value={{
					productList,
					setProductList,
					storeCart,
					setStoreCart,
					cartItems,
					setCartItems,
					totalPrice,
					setTotalPrice,
					username,
					setUsername,
					address,
					setAddress,
					paymentMethod,
					setPaymentMethod,
					number,
					setNumber,
					email,
					setEmail,
					bounceDown,
					slideRight,
					slideLeft,
					childrenVariants,
					parentVariant,
					bounceUp,
					zoomUp,
				}}>
				<RouterProvider router={router} />
			</ProductContext.Provider>
		</>
	);
}

export default App;
