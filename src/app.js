import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import StoreList from "./components/StoreList";
import Shimmer from "./utils/Shimmer";


//    Lazy Loading
//    On Demand Loading
//    Chunking
//    Dynamic import
//    Code Splitting
//    Dynamic Bundling

// const About = lazy(()=>import("./components/About"));


const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Outlet />
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            // {
            //     path:"/about",
            //     element:<Suspense fallback={<Shimmer />}>
            //         <About />
            //         </Suspense>,
            // },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurents/:resId",
                element:<StoreList />,
            },
        ],
        errorElement:<Error />,
    },])

// const createRoot = ReactDOM.createBrowserRouter()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render((<RouterProvider router={appRouter}/>));