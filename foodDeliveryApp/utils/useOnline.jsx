import { useState, useEffect, useRef } from "react";

const useOnline = () => {
    const myRef = useRef(null);

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const onlineHandler = () => {
            setIsOnline(true);
        };
        const offlineHandler = () => {
            setIsOnline(false);
        };

        if(myRef.current){
            myRef.current.addEventListener("online", onlineHandler);
            myRef.current.addEventListener("offline", offlineHandler);
        }

        return () => {
            if(myRef.current){
                myRef.current.removeEventListener("online", onlineHandler);
                myRef.current.removeEventListener("offline", offlineHandler);
            }
        };
    }, []);

    return {isOnline, myRef};
};

export default useOnline;
