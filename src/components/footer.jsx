import { Facebook, Github, LinkedinIcon, Twitter } from "lucide-react"



const Footer = () => {
  return (
    <div className="pt-5" >

      <div className='bg-black w-screen h-[50vh] flex justify-evenly pt-20 gap-0 '>

      <div className="text-[18px] font-semibold text-white flex flex-col gap-4 pl-10  ">
        <h1 className="italic"> made by</h1>
       
        <div>
          <p>© Portfolio hub 2024 <br /> Made with 💜 from Tamale <br /> and Accra, Ghana</p>
        </div>

        <p>Show Off Your Work®</p>
      </div>


      <div className="text-[18px] font-semibold text-white flex flex-col ">
        <h1>LEGAL</h1>
        <ul>
          <li> Terms and Conditions </li>
          <li> Privacy Policy </li>
          <li>Cookie Policy </li>
        </ul>
      </div>

      <div className="text-[18px] font-semibold text-white flex flex-col ">
        <h1 className="uppercase">Talk to us</h1>
        
        <div className='flex gap-3 pt-3 justify-self-auto '>

        <div  className=' hover:bg-[#000000] w-[45px] shadow-md bg-white rounded-full flex justify-center' > <LinkedinIcon className='w-[30px] text-transparent h-10 fill-pink-600 text-center'  /></div>

        <div className='w-[45px] hover:bg-[#000000] shadow-md  bg-white rounded-full flex justify-center'>  <Twitter className=' w-[30px] text-transparent h-10  fill-blue-600 place-items-center '  /> </div>

        <div  className='w-[45px] hover:bg-[#000000] shadow-md  bg-white rounded-full flex justify-center' > <Facebook className=' w-[30px] text-transparent h-10  fill-blue-600 place-items-center '  />  </div>
      </div>
      </div>

    </div>

    </div>
  )
}

export default Footer