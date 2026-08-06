import { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
const Searchbox = () => {
    let { food_list } = useContext(StoreContext)
    let [searchBox, setSearchBox] = useState('')

    let FoodList = food_list.filter(items =>
        items.name.toLowerCase().includes(searchBox.toLowerCase())
    )

    function SearchItems() {
        if (!searchBox) {
            return null
        }
        else if (FoodList.length > 0) {
            return (
                <div className='flex justify-between '>
                    <div className='flex justify-between flex-col '>
                        {FoodList.map((item, i) => {
                            return (
                                <div key={i}>
                                    
                                    <Link to={`/product/${item._id}`}>

                                        <div className='flex  justify-start items-center w-[250px] mt-[5px] pl-[5px] h-[40px] bg-[#fbfbfb]'>
                                            <div className=''>
                                                <img className='flex justify-start w-[60px] h-[30px]' src={item.image} />
                                            </div>
                                            <div className='pl-[3px] text-[12px]'>
                                                {item.name}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )

                        }
                        )}
                    </div>
                </div>


            )

        } else {
            return (
                <div className='flex justify-center font-black text-[25px] mt-[5px]'>
                    Not found
                </div>
            )
        }

    }
    console.log(SearchItems)
    return (
        <div className='max-[1000px]:hidden max-[1240px]:w-[150px]'>
            <div className="flex flex-col">
                <label>
                    <input
                        type="text"
                        placeholder="Search foods"
                        value={searchBox}
                        autoFocus
                        onChange={(e) => setSearchBox(e.target.value)}
                        className="w-[250px] outline-none pl-[30px] h-[40px] bg-[#fbfbfb]"

                    />
                </label>

            </div>

            <div className='mt-[20px] absolute'>{SearchItems()}</div>
        </div>
    )
}

export default Searchbox
