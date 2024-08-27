import {CDN_URL} from "./utils/constant"


const Store = (props) => {
    const {resData} = props;
   //console.log(props);
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}= resData.info;   //=>De-Structuring
    return (
        <div className="store-crad">
            <section className="store">
                <img className="store-logo" src={CDN_URL+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>
                <h5>{costForTwo}</h5>
            </section>
        </div>
    );
};

export default Store;