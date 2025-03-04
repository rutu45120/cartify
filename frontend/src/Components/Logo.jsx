import logo from '../Assets/Img/logoMain.png'

const Logo = () => {

    const handleLogo=()=>{
        console.log("Cartify");
        
    }

  return (
    <div className='flex items-center'>
<img src={logo} alt="Cartify" className='w-35 cursor-pointer   ' onClick={()=>handleLogo()} />

    </div>
  )
}

export default Logo