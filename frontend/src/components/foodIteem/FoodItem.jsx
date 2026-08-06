import { useContext } from "react"
import { assets } from "../../../assets/frontend_assets/assets"
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

    let { cartItems, addToCart, RemoveFromCart } = useContext(StoreContext);

    return (
        <div className="h-[400px]">
            <div className="w-full m-auto rounded-[0_0_15px_15px] shadow-[0_0_10px] shadow-[#00000015] transition duration-300 animate-[fadeIn_1s]">
                <div className="w-full">
                    <img src={image} className="rounded-[15px_15px_0_0] w-full h-[200px]" />
                </div>
                <div className="p-[20px]">
                    <div className="flex justify-between items-center mb-[10px]">
                        <p className="text-[15px] font-[500] ">{name}</p>
                        <img className="w-[70px]" src={assets.rating_starts} />
                    </div>
                    <p className="text-[#676767] text-[12px]">{description}</p>
                    <p className="text-[red] text-[22px] font-[500] my-[10px] ">${price}</p>
                    <div className="flex justify-end">
                        {!cartItems[id] ? <div className="left-[30%]">
                            <img onClick={() => addToCart(id)} src={assets.add_icon_white} />
                        </div> : <div className="flex flex-row justify-between">
                            <img onClick={() => RemoveFromCart(id)} src={assets.remove_icon_red} />
                            <p className="mx-[10px] flex items-center left-[30px]">{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
