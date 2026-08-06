import { useState } from "react"
import { assets } from "../../../assets/frontend_assets/assets"

const LoginPopUp = ({ setShowLogin }) => {
    let [currState, setCurrState] = useState("Login")
    return (
        <div className="absolute w-full h-full bg-[#00000090] grid ">
            <form className="place-self-center w-[30vw] text-[#808080] bg-white flex flex-col gap-[25px] fy-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn_1s_ease-in-out]">
                <div className="flex flex-col items-center text-black">
                    <div className="w-full flex justify-end mt-[10px]">
                        <img className="w-[16px] cursor-pointer" onClick={() => setShowLogin(false)} src={assets.cross_icon} />
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        {currState}
                        <h2>{currState === "Login" ? <></> : <input className="outline-none w-[280px]  border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]" type="text" placeholder="Your name" required />}</h2>
                        <input className="outline-none w-[280px]  border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]" type="email" placeholder="Your email" required />
                        <input className="outline-none w-[280px]  border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]" type="password" placeholder="Password" required />
                    </div>
                    <button className="border-none p-[10px] rounded-[4px] text-white bg-[red] tex-[15px] cursor-pointer w-[280px] mt-[10px]">{currState === "sig up" ? "Create account" : "Login"}</button>
                    <div className="">
                        <div className="flex items-start w-[280px] gap-[7px] mt-[10px]">
                            <input className="" type="checkBox" required /> <p className="w-[250px] ml-[10px]">By continuing , i agree to the terms of use & privacy policy.</p>
                        </div>
                    </div>
                </div>
                <div className="my-[20px] flex justify-center">
                    <div className="w-[270px]">
                        {currState === "Login" ? <p> Create a new account? <span className="text-[red] font-[500] cursor-pointer px-[5px]" onClick={() => setCurrState("sign up")}>Click here</span></p> :
                            <p>Aleardy have an account<span className="text-[red] font-[500] cursor-pointer px-[5px]" onClick={() => setCurrState("Login")}>Login here</span></p>
                        }
                    </div>

                </div>

            </form>
        </div>
    )
}

export default LoginPopUp
