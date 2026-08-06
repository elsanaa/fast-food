import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import Searchbox from '../searchBox/Searchbox';

const Navbar = ({ setShowLogin }) => {
  let { getTotalItems, getTotalCartAmount } = useContext(StoreContext);

  let [menu, setMenu] = useState("home")
  return (
    <div className='px-[20px] flex justify-between items-center h-[100px] max-[1050px]:flex max-[1050px]:justify-between max-[1050px]:items-center max-[1050px]:w-[900px] max-[900px]:w-[800px] max-[750px]:w-[400px]'>
      <Link to='/'><div className='w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[140px]'><img className='mt-[10px]' src={assets.logo}/></div></Link>
      <ul className='flex list-none gap-[20px] text-[#49557e] font-[18px] max-[1050px]:gap-[20px] max-[1050px]:text-[17px] max-[900px]:gap-[15px] max-[900px]:text-[16px] max-[750px]:hidden '>
        <Link
          to="/" onClick={() => setMenu("home")} className={menu === "home" ? "pb-[2px] border-b-[1px] border-solid border-[#49557e]" : "" + "cursor-pointer"}>home</Link>
        <a onClick={() => {
          setMenu("menu");
          document
            .getElementById("explore_menu")
            ?.scrollIntoView({ behavior: "smooth" });
        }} className={menu === "menu" ? "pb-[2px] border-b-[1px] border-solid border-[#49557e]" : "" + "cursor-pointer"}>menu</a>
        <a onClick={() => {
          setMenu("mobile-app");
          document
            .getElementById("app-download")
            ?.scrollIntoView({ behavior: "smooth" });
        }} className={menu === "mobile-app" ? "pb-[2px] border-b-[1px] border-solid border-[#49557e]" : "" + "cursor-pointer"}>mobile app</a>
        <a onClick={() => {
          setMenu("contect-us");
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" });
        }} className={menu === "contect-us" ? "pb-[2px] border-b-[1px] border-solid border-[#49557e]" : "" + "cursor-pointer"}>contect us</a>
      </ul>
      <div className='flex items-center gap-[40px] max-[1050px]:gap-[30px] max-[900px]:gap-[20px]'>
        <div className='flex justify-between items-center '>
          <img className='max-[1050px]:w-[22px] max-[900px]:w-[20px]  mr-[5px]' src={assets.search_icon} />
         <Searchbox/>
        </div>


        <Link to='/cart'><img src={assets.basket_icon} /></Link>
        <div>
          {getTotalCartAmount() > 0 && (
            <div className="w-[20px] h-[20px] flex justify-center items-center mt-[-35px] ml-[-30px] rounded-full text-[14px] bg-red-500 text-white">
              {getTotalItems()}
            </div>
          )}
        </div>

        <button className='max-[1050px]:py-[8px] max-[1050px]:px-[21x] max-[900px]:text-[15px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px] bg-transparent font-[16px] text-[#49557e] border-1 border-solid border-[tomato] rounded-[50px] cursor-pointer w-[90px] h-[40px]'
          onClick={() => setShowLogin(true)}>
          sign in
        </button>

      </div>

    </div>
  )
}

export default Navbar


