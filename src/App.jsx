import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./assets/pages/About";
import { Homepage } from "./assets/pages/Homepage";
import { Error } from "./assets/pages/Error";
import { Shop } from "./assets/pages/Shop";

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
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
