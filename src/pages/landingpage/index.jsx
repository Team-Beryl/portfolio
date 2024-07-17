import {  carbon, customize, left, media, right, share } from "../../assets"



const LandingPage = () => {
  return (
    <div >

      <div>
        <div className="flex w-screen relative h-fit">
          <img className="w-1/2" src={left} alt="image" />
          <img className="w-1/2" src={right} alt="image" />
        </div>

        <div className="flex justify-center items-center ">
          <span className="text-8xl font-bold text-white absolute top-56 text-center " >Your online <br /> portfolio.</span>
          <p className="text-white text-[25px] absolute top-[490px]">The easiest and fastest way to Show Off Your Work® Free trial. No credit card required.</p>
        </div>
      </div>

      <div className="flex justify-center items-center  gap-48 pt-14">

        <div>
          <h1 className="text-[#3461C9] text-4xl font-bold pb-4">Customize your Portfolio</h1>
          <p className="flex flex-col justify-center text-[#273E5D] text-[18px]  gap-7">
          Highlight your skills and achievements with detailed <br /> project descriptions, high-quality images, and links <br />to live examples or code repositories. Add engaging sections <br /> like an "About Me" page and a contact form. <br /> Regularly update your portfolio to reflect new <br /> accomplishments and keep the content fresh.
          </p>
        </div>
        <img className="w-1/3" src={customize} alt="image" />
      </div>

      <div className="flex justify-center items-center  gap-48 pt-14  bg-purple-400">
        <img className="w-1/3  rounded-full" src={media} alt="image" />
        <div>
          <h1 className="text-[#3461C9] text-4xl font-bold pb-4"> Share Anywhere </h1>
          <p className="flex flex-col justify-center text-[#273E5D] text-[18px]  gap-7">
          Share your Portfolio with your readers no <br />matter where they (and you) are! Email it as a link to <br />open it straight away on social media.
          </p>
        </div>
      </div>

      <div className="w-screen h-fit">
        <img src= {carbon}  alt="image" />
      </div>


    </div>



  )
}

export default LandingPage