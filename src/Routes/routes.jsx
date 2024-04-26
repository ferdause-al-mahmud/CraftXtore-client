import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AddItem from "../Pages/AddItem";
import AllArts from "../Pages/AllArts";
import MyArtsCrafts from "../Pages/MyArtsCrafts";

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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/additem",
                element: <AddItem></AddItem>,
            },
            {
                path: "/allarts",
                element: <AllArts></AllArts>,
            },
            {
                path: "/myartscarts",
                element: <MyArtsCrafts></MyArtsCrafts>,
            },
        ]
    },
]);