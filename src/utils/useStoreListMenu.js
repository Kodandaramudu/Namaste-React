import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useStoreListMenu = (resId) => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setItemList(json.data);
    }

    return itemList;
}

export default useStoreListMenu;