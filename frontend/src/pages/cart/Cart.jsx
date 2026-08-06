import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../../assets/frontend_assets/assets';

const Cart = () => {

  let { cartItems, food_list, RemoveFromCart, getTotalCartAmount, addToCart } = useContext(StoreContext)

  let navigate = useNavigate();
  return (
    <div className='mt-[100px]'>
      <div className=''>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] align-center text-[grey] text-[1vw]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-[1px] bg-[#e2e2e2] border-none' />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='my-[10px] text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] align-center text-[grey] text-[1vw]'>
                  <img className='w-[50px]' src={item.image} />
                  <p className='text-[13px]'>{item.name}</p>
                  <p className='text-[13px]'>${item.price}</p>
                  <p className='text-[13px]'>{cartItems[item._id]}</p>
                  <p className='text-[13px]'>${item.price * cartItems[item._id]}</p>
                  <div className='flex flex-row justify-between'>
                    <p onClick={() => RemoveFromCart(item._id)} className='cursor-pointer text-[13px]'><img src={assets.remove_icon_red} /></p>
                    <p onClick={() => addToCart(item._id)} className='cursor_pointer text-[13px]'><img src={assets.add_icon_green} /></p>
                  </div>

                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>
            )
          }

        })}
      </div>
      <div className='mt-[80px] flex justify-between gap-[2vw] max-[750px]:flex-col '>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <button onClick={() => navigate('/order')} className='mt-[30px] border-none bg-[red] text-white w-[15vw] max-[750px]:w-[200px] max-[1200px]:w-[200px] py-[12px] rounded-[4px] cursor-pointer'>
              PROCEED TO CHECK UP
            </button>
          </div>
        </div>
        <div className='flex-1 max-[750px]:justify-end'>
          <div>
            <p className='text-[#555]'>If you have promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input className='bg-transparent border-none outline-none pl-[10px]' type='text' placeholder='promo code' />
              <button className='w-[10vw] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px] max-[750px]:w-full'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
