import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import StoreListItems from "./StoreListItems";
import useStoreListMenu from "../utils/useStoreListMenu";

const StoreList = () => {
    const { resId } = useParams();
    console.log(resId);
    const itemList = useStoreListMenu(resId);

    if (itemList.length === 0)
        return <Shimmer />
    console.log(itemList);
    const { text } = itemList?.cards[0]?.card?.card;
    const { itemCards } = itemList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu-crad">
            <h1 className="text-center text-2xl text-amber-800 font-extrabold">{text}😋</h1>
            <section className="menu_list">
                <div className="menu-goods-container">
                    {itemCards.map((item) => <StoreListItems key={item.card.info.id} listItem={item} />)}
                </div>
            </section>
        </div>
    )
}

export default StoreList;