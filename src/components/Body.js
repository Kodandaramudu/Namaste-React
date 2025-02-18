import Store,{withOpenedRestaurent} from "./Store";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useStoreList from "../utils/useStoreList";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {

    const onlineStatus = useOnlineStatus();
    const restaurants = useStoreList();
    const StoreOpened = withOpenedRestaurent(Store);
    const {loggedInUser,setUserName} = useContext(UserContext);
   if(onlineStatus === false)
    return <h1>Looks likeyou are offline!! Please do check your internet connection</h1>

    if(restaurants.length === 0 )
        return <Shimmer />
   
    return (
        <div className="body">
            <div >
                <input className="m-4 border-4 focus:ring-2 rounded-md"/>
                <button className="search m-2 px-2 bg-orange-300 rounded-md">search</button>
                <button className="m-2 px-2 bg-orange-300 rounded-md" onClick={()=>
                {  filteredList=restaurantData.filter(store=>store.avgRating>4);
                    setrestaurantData(filteredList);
                }
                }>Toprated Stores</button>
                 <label>User Name: </label>
                 <input className="m-2 px-2 font border-2 border-b-gray-200 rounded-md" value={loggedInUser} onChange={
                    (e)=>setUserName(e.target.value)}/>
            </div>
            <div className="flex flex-wrap">
            {restaurants.map((restaurant)=> (<Link  to={"/restaurents/"+ restaurant.info.id} className="link" key={restaurant.info.id}>
             {restaurant.info.isOpen ? <StoreOpened resData= {restaurant}/>: <Store resData= {restaurant}/>}
             </Link>))}
            </div>
        </div>
    );
};

export default Body;