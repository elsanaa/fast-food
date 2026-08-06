import { assets } from "../../../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className="text-[#d9d9d9] mt-[50px] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] " id="footer">
            <div className="w-full grid grid-cols-[2fr_2fr_1fr] gap-[80px] max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-[35px] ">
                <div className="flex flex-col items-start gap-[20px]">
                   <div className='w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[140px]'><img className='' src={assets.logo}/></div>
                    <p>Lorem Ipsum is simly dummy text of thhe pinting and typesetting insuxtry. dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="flex flex-row ">
                        <img className="mx-[5px] w-[40px] ,mt-[15px]" src={assets.facebook_icon}/>
                        <img className="mx-[5px] w-[40px] ,mt-[15px]" src={assets.twitter_icon}/>
                        <img className="mx-[5px] w-[40px] ,mt-[15px]" src={assets.linkedin_icon}/>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                    <h2 className="text-white text-[15px] font-black">Company</h2>
                    <ul className="cursor-pointer">
                        <li className="mb-[5px]">Home</li>
                        <li className="mb-[5px]">About Us</li>
                        <li className="mb-[5px]">Delivery</li>
                        <li className="mb-[5px]">privacy policy</li>

                    </ul>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                    <h2 className="text-white text-[15px] font-black">GET IN TOUCH</h2>
                    <ul className="cursor-pointer">
                        <li className="mb-[5px]">09045158287</li>
                        <li className="mb-[5px]">elsana529@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className="w-full h-[2px] mt-[20px] bg-gray-500 border-none max-[750px]:text-center"/>
            <p>Copyright 2026 Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
