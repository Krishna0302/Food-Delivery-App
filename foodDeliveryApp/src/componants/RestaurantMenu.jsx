import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import useRestaurant from "../../utils/useRestaurant";
import Shimmer from "./shimmer";
import {
  app_menu_api_URL,
  IMG_CDN_URL,
} from "../constants";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  // const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res

  const restaurant = useRestaurant(resId)

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {resId}</h1>
        <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurant?.menu?.item).map(item=>(
                <li key = {item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;