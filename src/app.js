import React,{lazy,Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import StoreList from "./components/StoreList";
import Shimmer from "./utils/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./components/Cart";


//    Lazy Loading
//    On Demand Loading
//    Chunking
//    Dynamic import
//    Code Splitting
//    Dynamic Bundling
//The Below With dynamic import(), you can split your code into separate bundles(creates seperate JS file to optimize) that are loaded only when needed. 
//Suspense allows you to show a fallback (like a loading spinner) while the new code is being loaded.
//const About = lazy(()=>import("./components/About"));


const AppLayout = () => {
const [userName,setUserName] = useState();
const {loggedInUser} = useContext(UserContext);

useEffect(()=>{
//API call to get User details
const data = {name:"Ram Chowdary"}
setUserName(data.name);
},[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
         <Header/>
         <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
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
            //     element:(<Suspense fallback={<Shimmer />}>
            //         <About />
            //         </Suspense>),
            // },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurents/:resId",
                element:<StoreList />,
            },
            {
                path:"/cart",
                element:<Cart />,
            },
        ],
        errorElement:<Error />,
    },])

// const createRoot = ReactDOM.createBrowserRouter()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render((<RouterProvider router={appRouter}/>));