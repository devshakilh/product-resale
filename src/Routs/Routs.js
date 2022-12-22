import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AdvertisedItems from "../Pages/AdvertisedItems/AdvertisedItems";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Shared/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Category from "../Pages/Product/Category";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../Pages/Product/AddService";
import MyProduct from "../Pages/Product/MyProduct";
import DashboardLayout from "../Layout/DashboardLayout";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`https://product-seller-server.vercel.app/product/${params.id}`)
            },
            {
                path: 'advertiseditems',
                element: <AdvertisedItems></AdvertisedItems>
            },
            {
                path: 'addservice',
                element: <AddService></AddService>
            },
            {
                path: 'myproduct',
                element: <MyProduct></MyProduct>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
])
export default router;