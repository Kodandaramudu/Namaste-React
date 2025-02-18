import {CDN_URL} from "../utils/constant";
 
const Store = (props) => {
    const {resData} = props;
   //console.log(props);
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}= resData.info;   //=>De-Structuring
    return (
        <div className="m-4 flex w-[250px] h-[350px] rounded-lg break-all bg-gray-300 hover:bg-slate-300 cursor-pointer">
            <section className="m-4 p-4">
                <img className="m-4 size-36 rounded-lg align-middle " src={CDN_URL+cloudinaryImageId} />
                <h3 className="font-bold font-serif my-2 break-all">{name}</h3>
                <h4 className="text-sm break-all">{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>
                <h5>{costForTwo}</h5>
            </section>
        </div>
    );
};

// Higher Order Component (component)=> return a component with additional props or enhancement functionality
// contract is takes store as input and output is enhanced component
export const withOpenedRestaurent =(Store)=>{
    return ((props)=>{
        //console.log(props);
       return  <div>
            <label className="absolute bg-slate-400">Opened</label>
            <Store {...props}/>
        </div>
    })
}

export default Store;