import { useDispatch } from "react-redux";
import { MENU_LOGO_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const StoreListItemsMenu =({itemData})=>{
    //console.log(itemData);
    const {name,description,imageId,itemAttribute,price} = itemData?.card?.info;

    const dispatch = useDispatch();
    const handleClick =(itemData)=>{
        dispatch(addItem(itemData));
    }

    return(
        <div className="m-2 p-2 flex rounded-xlg border-b-4">
            <div className="text-left w-9/12">
                <label className="my-2 font-bold font-sans">{name}</label>
                <label className="my-2 font-sans font-semibold">{" - "+"Rs." + price / 100 + ".00"}</label>
                <p className="font-sans font-semibold">{itemAttribute.vegClassifier}</p>
                <p className="font-mono text-sm text-left" >{description}</p>
            </div>
            <div className="w-3/12 m-auto flex">
            <img className="m-auto w-28" src={MENU_LOGO_URL + imageId} />
            <button className="px-2 absolute bg-black text-white m-16 rounded-lg " onClick={()=>handleClick(itemData)}>Add➕</button>
            </div>
        </div>
    )
}

export default StoreListItemsMenu;