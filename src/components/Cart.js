import { useSelector } from "react-redux";
import { MENU_LOGO_URL } from "../utils/constant";

const Cart =()=>{


    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    //const {name,description,imageId,itemAttribute,price} = cartItems?.card?.info;


    return (
        <div>
        <h1 className="align-middle">Cart Items</h1>
        {cartItems.map((i)=>(
            <div key={i?.card?.info?.id} className="m-auto w-6/12 p-2 flex rounded-xlg border-b-4">
            <div className="text-left w-9/12">
                <label className="my-2 font-bold font-sans">{i?.card?.info?.name}</label>
                <label className="my-2 font-sans font-semibold">{" - "+"Rs." + i?.card?.info?.price / 100 + ".00"}</label>
                <p className="font-sans font-semibold">{i?.card?.info?.itemAttribute.vegClassifier}</p>
                <p className="font-mono text-sm text-left" >{i?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 m-auto flex">
            <img className="m-auto w-28" src={MENU_LOGO_URL + i?.card?.info?.imageId} />
            </div>
            </div>
        ))}
        </div>
    )
}

export default Cart;