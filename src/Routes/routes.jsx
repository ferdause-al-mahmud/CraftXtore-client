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
import Update from "../Components/Update/Update";
import SpecificSubcategory from "../Components/SpecificSubcategory/SpecificSubcategory";

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
                loader: () => fetch('http://localhost:3333/items')
            },
            {
                path: "/myartscarts",
                element: <PrivateRoute><MyArtsCrafts></MyArtsCrafts></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3333/items/${params.id}`)
            },
            {
                path: "/subcategory/:subcategory_Name",
                element: <SpecificSubcategory></SpecificSubcategory>,
            },


        ]
    },
]);