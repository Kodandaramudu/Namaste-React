import { MENU_LOGO_URL } from "../utils/constant";
import Shimmer from "../utils/Shimmer";
const StoreListItems = (props) => {
    const { listItem } = props;
    const { name, imageId, itemAttribute, price, description } = listItem.card.info;
    <Shimmer />
    return (
        <div className="m-12 border-b-4">
            <h2 className="m-4 font-mono font-semibold" >{description}</h2>
            <div className="m-4 p-4 bg-gray-300">
                <img className="m-4 w-16 float-right" src={MENU_LOGO_URL + imageId} />
                <h3 className="font-bold font-sans">{name}</h3>
                <h4 className="font-sans font-semibold">{itemAttribute.vegClassifier}</h4>
                <h5 className="font-sans font-semibold">{"Rs." + price / 100+".00"}</h5>
            </div>
        </div>
    )
}

export default StoreListItems;