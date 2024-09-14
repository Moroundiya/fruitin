import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from "./assets/pages/About";
import { Homepage } from "./assets/pages/Homepage"


const router = createBrowserRouter(
  [
    {
      path: '/',
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
