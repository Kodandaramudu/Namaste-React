import Store from "./Store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useStoreList from "../utils/useStoreList";

const Body = () => {

    const onlineStatus = useOnlineStatus();
    const restaurants = useStoreList();

   if(onlineStatus === false)
    return <h1>Looks likeyou are offline!! Please do check your internet connection</h1>

    if(restaurants.length === 0 )
        return <Shimmer />
   
    return (
        <div className="body">
            <div >
                <input className="m-4 border-4"/>
                <button className="m-2 px-2 bg-orange-300">search</button>
                <button className="m-2 px-2 bg-orange-300" onClick={()=>
                {  filteredList=restaurantData.filter(store=>store.avgRating>4);
                    setrestaurantData(filteredList);
                }
                }>Toprated Stores</button>
                {/* <input className="search-input" type="text" placeholder="search for store"></input> */}
            </div>
            <div className="flex flex-wrap">
            {restaurants.map((restaurant)=> (<Link  to={"/restaurents/"+ restaurant.info.id} className="link" key={restaurant.info.id}><Store resData={restaurant}/></Link>))}
            </div>
        </div>
    );
};

export default Body;