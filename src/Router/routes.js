import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Fontend/Home/Home/Home";
import AddToy from "../components/Backend/AddToy/AddToy";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtoys',
                element: <AddToy></AddToy>
            }
        ]

    }
])