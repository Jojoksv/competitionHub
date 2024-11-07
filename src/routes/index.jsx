import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../components/layouts/auth/index.jsx";
import authRoutes from "./authRoutes.jsx";
import CommonLayout from "../components/layouts/common/index.jsx";
import commonRoutes from "./commonRoutes.jsx";

const NotFound = React.lazy(() => import('../pages/notFound/index.jsx'))

const createRoutesElements = (element) => {
    const Element = element;
    return(
        <React.Suspense fallback={""} >
            <Element />
        </React.Suspense>
    );
}

const renderRoutes = createBrowserRouter([
    {
        path: '/',
        element: <CommonLayout />,
        children: commonRoutes.map(({index, path, element}) => ({
            ...(index ? {index} : {path}),
            element: createRoutesElements(element),
        }))
    },
    {
        path: '/login',
        element: <AuthLayout />,
        children: authRoutes.map(({index, path, element}) => ({
            ...(index ? {index} : {path}),
            element: createRoutesElements(element),
        }))
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export const AppRoutes = () => (<RouterProvider router={renderRoutes} />)