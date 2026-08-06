import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodIteem/FoodItem'

const FoodDisplay = ({ category }) => {
    let { food_list } = useContext(StoreContext)

    return (
        <div className='mt-[30px] ' id='food_Display'>
            <div className='text-[2vw] font-[600] '>Top dihes near you</div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[50px] '>
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <div >
                                <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                            </div>
                        )
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay
