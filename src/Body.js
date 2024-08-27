import Store from "./Store";
import { RESTAURANT_DATA } from "./utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [restaurantData, setrestaurantData] = useState([RESTAURANT_DATA]);
    console.log(restaurantData);
    const [restaurants,setrestaurants] = useState([]);
    
    useEffect(()=>{
       const restaurantObj = restaurantData[0][0].data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;
       console.log(restaurantObj);
       setrestaurants(restaurantObj);
    },[restaurantData]);
    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick={()=>
                {  filteredList=restaurantData.filter(store=>store.avgRating>4);
                    setrestaurantData(filteredList);
                }
                }>Toprated Stores</button>
                {/* <input className="search-input" type="text" placeholder="search for store"></input> */}
            </div>
            <div className="store-goods-container">
            {restaurants.map((restaurant)=> (<Store key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    );
};

export default Body;