import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
const [ononlineStatus, setOnlineStatus] = useState(true);
useEffect(()=>{
window.addEventListener("offline", ()=>{
    setOnlineStatus(false);
});
window.addEventListener("online", ()=>{
    setOnlineStatus(true);
});
},[]);

    return ononlineStatus;
}

export default useOnlineStatus;