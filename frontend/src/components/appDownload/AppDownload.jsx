import { assets } from '../../../assets/frontend_assets/assets'


const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] font-[3vw] text-center font-[500] ' id='app-download'>
      <p>for Better experince Donwload <br/> Tomato App</p>
      <div className='flex justify-center gap-[2vw] mt-[40px]'>
        <img className='max-w-[180px] cursor-poiner trsnsition duration-[500] transform hover:scale-105' src={assets.play_store}/>
        <img className='max-w-[180px] cursor-poiner trsnsition duration-[500] transform hover:scale-105' src={assets.app_store}/>
      </div>
    </div>
  )
}

export default AppDownload
