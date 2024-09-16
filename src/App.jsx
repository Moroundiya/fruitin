import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from "./assets/pages/About";
import { Homepage } from "./assets/pages/Homepage"
import { Error } from './assets/pages/Error';


const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <Error />,
      element: <Homepage />
    },

    {
      path: '/about-us',
      element: <About />
    }
  ]
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
