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
		retrievedList.map((item) => ({
			...item,
			total: eval("(" + item.total + ")"),
		})) || "[]";

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
	}, [storeCart, cartItems]);

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
				}}>
				<RouterProvider router={router} />
			</ProductContext.Provider>
		</>
	);
}

export default App;
