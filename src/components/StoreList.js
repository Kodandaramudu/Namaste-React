import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import StoreListItems from "./StoreListItems";
import useStoreListMenu from "../utils/useStoreListMenu";
import { useState } from "react";

const StoreList = () => {
    const { resId } = useParams();
    const itemList = useStoreListMenu(resId);
    const [expandItems,setExpandItems]=useState(null);

    if (itemList.length === 0)
        return <Shimmer />
    console.log(itemList);
    const { text } = itemList?.cards[0]?.card?.card;
    const itemListMenu = itemList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>
        c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(itemListMenu);
    return (
        <div className="my-6">
            <h1 className="text-center text-2xl text-amber-800 font-extrabold">{text}😋</h1>
            <section className="menu_list">
                <div className="menu-goods-container">
                    {itemListMenu.map((item,index) =>
                     <StoreListItems 
                     key={item?.card?.card?.title}   
                     listItem={item} 
                     showItems={index===expandItems ? true:false}
                     setExpandItems={()=>setExpandItems(index)}/>)}
                </div>
            </section>
        </div>
    )
}

export default StoreList;