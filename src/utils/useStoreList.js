import { useEffect, useState } from "react";

const useStoreList =()=>{
const [restaurantList, setRestaurentList] = useState([]);
 useEffect(()=>{
    fetchData();
 },[])

 const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5169014&lng=78.3428304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurentList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
 }

    return restaurantList;
}

export default useStoreList;