import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

import AddItem from "../Pages/AddItem";
import AllArts from "../Pages/AllArts";
import MyArtsCrafts from "../Pages/MyArtsCrafts";
import ItemDetails from "../Components/ItemDetails/ItemDetails";
import PrivateRoute from "../Components/Private/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/items/:id",
                element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/additem",
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>,
            },
            {
                path: "/allarts",
                element: <AllArts></AllArts>,
            },
            {
                path: "/myartscarts",
                element: <PrivateRoute><MyArtsCrafts></MyArtsCrafts></PrivateRoute>,
            },

        ]
    },
]);