import { useState } from 'react';
import { assets } from '../../../assets/frontend_assets/assets'

const Header = () => {
    let [menu, setMenu] = useState('')
    return (
        <div style={{ backgroundImage: `url(${assets.header_img})`, borderRadius: "30px", height: "34vw", paddingLeft: "10px", paddingRight: "10px" }} className='h-[480px] my-[30px] max-[1050px]:h-[37vw]'>
            <div className='flex justify-col items-end min-[750px]:pt-[50px] max-[750px]:pt-[20px] gap-[2vw] max-w-[50%] bottom-[12%] left-[6vw] animate-[fadeIn_2s_ease-in-out]'>
                <div className='w-[1000px] h-full max-[1050px]:max-w-full max-[750px]:max-w-full'>
                    <div className='max-[750px]:flex max-[750px]:justify-between'>
                        <h2 className='mb-[10px] font-[500] text-[4.5vw] text-white '>Order your favourite food here</h2>
                        <p className='max-[750px]:hidden  text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crted with the finest ingredients and culinary expertise . Our missioView menun is to satisfy your craxings and elevate your dining experince, one delicious meal at a time.</p>

                        <button className='max-[750px]:w-full max-[750px]:h-[50px] max-[750px]:text-[20px]border-none text-[#747474] font-[500] min-[751px]:py-[1vw] min-[751px]:px-[2.3vw] bg-white text-[1vw] rounded-[50px]  cursor-pointer'>
                            <a onClick={() => {
                                setMenu("menu");
                                document
                                    .getElementById("explore_menu")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }} className={menu === "menu" ? "pb-[2px]  border-none" : "" + "cursor-pointer"}>View menu</a>

                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
