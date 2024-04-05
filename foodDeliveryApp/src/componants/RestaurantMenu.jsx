import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {IMG_CDN_URL, app_menu_api_URL, ITEM_IMG_CDN_URL, apiURL} from "../constants.jsx"
// import {MenuShimmer} from "./componant/shimmer"

const RestaurantMenu = () => {

    const params = useParams()

    useEffect(() => {
     getRestaurantMenu()
    }, [])

    async function getRestaurantMenu() {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=")
        const json = await data.json()
    }
    return (
        <div>
            <h1>
                Restaurant details:
            </h1>
        </div>
    )
}

export default RestaurantMenu