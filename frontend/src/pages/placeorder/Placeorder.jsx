import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  let { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='flex justify-between'>
      <div className='w-full max-w-[500px]'>
        <p className='text-[30px] font-[500] mb-[50px]'>Delivery information</p>
        <div className='flex gap-[10px]'>
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='First Name' />
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='Last Name' />
        </div >
        <input
          className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
          type='email'
          placeholder='Email Address' />
        <input
          className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
          type='text'
          placeholder='Street' />
        <div className='flex gap-[10px]'>
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='City' />
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='State' />
        </div>
        <div className='flex gap-[10px]'>
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='Zip code' />
          <input
            className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
            type='text'
            placeholder='Country' />
        </div>
        <input
          className='mb-[15px] outline-none w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-4px]'
          type='text'
          placeholder='Phone' />
      </div>
      <div className='flex items-start justify-between  mt-[50px] gap-[15px]'>
        <div className=' flex flex-col gap-[20px] w-full min-[990px]:w-[300px] min-[1200px]:w-[500px] ml-[30px]'>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0?0:2}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0?0:getTotalCartAmount() + 2}</b>
            </div>
            <button className='border-none bg-[red] text-white w-[15vw] max-[750px]:w-[200px] max-[1200px]:w-[200px] py-[12px] rounded-[4px] mt-[30px] cursor-pointer'>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
