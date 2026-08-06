
import { menu_list } from '../../../assets/frontend_assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-[20px] min-[900px]:mt-[50px] max-[900px]:mt-[20px]' id='explore_menu'>
            <h1 className='text-[30px] text-[#262626] font-[500] max-[1050]:max-w-full max-[1050]:text-[14px] '>Explore our menu</h1>
            <p className='max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes crted with the finest ingredients and culinary expertise . Our missioView menun is to satisfy your craxings and elevate your dining experince, one delicious meal at a time.</p>
            <div className='flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll scrollbar-hide'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='mb-[40px]'>
                            <div className={category === item.menu_name ? "border-1 border-solid border-[red] p-[2px] rounded-[50%]" : ""}>
                                <img className=' min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 w-[100px] h-[100px]' src={item.menu_image} alt='' />
                            </div>
                            <p className='mt-[10px] text-[#747474] font-[1.4vw] cursor-pointer '>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
