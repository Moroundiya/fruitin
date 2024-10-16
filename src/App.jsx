import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./assets/pages/About";
import { Homepage } from "./assets/pages/Homepage";
import { Error } from "./assets/pages/Error";
import { Shop } from "./assets/pages/Shop";
import { FAQ } from "./assets/pages/FAQ";
import { Contact } from "./assets/pages/Contact";
import { Cart } from "./assets/pages/Cart";
import { Checkout } from "./assets/pages/Checkout";
import { createContext, useState } from "react";
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
	const [productList, setProductList] = useState(allproducts);
	const [storeCart, setStoreCart] = useState([]);
	const [cartItems, setCartItems] = useState(0);



	return (
		<>
			<ProductContext.Provider value={{ productList, setProductList, storeCart, setStoreCart, cartItems, setCartItems }}>
				<RouterProvider router={router} />
			</ProductContext.Provider>
		</>
	);
}

export default App;
