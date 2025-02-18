
import { useState } from "react";
import Shimmer from "../utils/Shimmer";
import StoreListItemsMenu from "./StoreListItemsMenu";


const StoreListItems = ({listItem,showItems,setExpandItems}) => {
    // console.log(listItem);
    const listItemMenu = listItem?.card?.card?.itemCards;
    const handleClick=()=>{
        setExpandItems();
    }
    
    <Shimmer />
    return (
        <div className="w-6/12 mx-auto my-2 rounded-lg bg-slate-300 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <label className="mx-4 text-lg font-bold">{listItem?.card?.card?.title}({listItem?.card?.card?.itemCards.length})</label>
           <label>⬇️</label>
           </div>
           {listItemMenu.map((i)=>showItems && <StoreListItemsMenu key={i.card.info.id} itemData={i}/>)}
        </div>
    )
}

export default StoreListItems;