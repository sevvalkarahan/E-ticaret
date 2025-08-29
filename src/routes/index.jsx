import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import MainLayout from '../layouts/main'
import Technology from '../pages/technology'
import Clothing from '../pages/clothing'
import Cosmetic from '../pages/cosmetic'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/technology",
                element: <Technology />
            },
            {
                path: "/clothing",
                element: <Clothing />
            },
            {
                path: "/cosmetic",
                element: <Cosmetic />
            }
        ]
    },

])

export default routes