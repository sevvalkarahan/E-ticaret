import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import MainLayout from '../layouts/main'
import Technology from '../pages/technology'
import Clothing from '../pages/clothing'
import Cosmetic from '../pages/cosmetic'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ProtectedRoute from "../components/ProtectedRoute";


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: (<ProtectedRoute><MainLayout /></ProtectedRoute>),
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