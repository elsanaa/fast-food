import { createContext, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

let StoreContextProvider = (props) => {
    let [cartItems, setCartItems] = useState({})

    let addToCart = (itemId) => {

        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    let RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    let getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemsInfo = food_list.find((product) => product._id === item);
                totalAmount += itemsInfo.price * cartItems[item];

            }

        }
        return totalAmount
    }
 let getTotalItems = () => {
        let totalItem = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem+= cartItems[item]
            }
        }
        return totalItem;

    }

    let contexValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        RemoveFromCart,
        getTotalCartAmount,
        getTotalItems
    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;