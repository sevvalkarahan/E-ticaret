import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import MainLayout from '../layouts/main'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },

])

export default routes