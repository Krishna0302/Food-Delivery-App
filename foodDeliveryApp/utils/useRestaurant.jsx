import { useState, useEffect } from "react"
import { app_menu_api_URL } from "../src/constants";

const useRestaurant = (resId) =>{
const [restaurant, setRestaurant] = useState()

useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
      const response = await fetch(app_menu_api_URL + resId);
      const json = await response.json();

      setRestaurant(json.data);
    }


    return restaurant
}

export default useRestaurant