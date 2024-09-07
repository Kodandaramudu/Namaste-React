import {CDN_URL} from "../utils/constant";


const Store = (props) => {
    const {resData} = props;
   //console.log(props);
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}= resData.info;   //=>De-Structuring
    return (
        <div className="m-4 my flex w-[250px] h-[450px] break-all bg-gray-300">
            <section className="p-4">
                <img className="m-4 size-36 " src={CDN_URL+cloudinaryImageId} />
                <h3 className="font-bold font-serif my-2 break-all">{name}</h3>
                <h4 className="break-all">{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>
                <h5>{costForTwo}</h5>
            </section>
        </div>
    );
};

export default Store;