

import React from 'react';
import { customize, lap, left, pub, right } from "../../assets";

import { left} from "../../assets"

const LandingPage = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className='w-[100vw]'>
        <div className="flex relative h-fit">
          <img className="w-2/4" src={left} alt="image" />
          <img className="w-2/4" src={right} alt="image" />
        </div>

        <div className="flex justify-center items-center pt-10">
          <span className="text-8xl font-bold text-white absolute top-56 text-center">Your online <br /> portfolio.</span>
          <p className="text-white text-[25px] absolute top-[490px]">The easiest and fastest way to Show Off Your Work® Free trial. No credit card required.</p>
        </div>
      </div>

      <h1 className="text-4xl text-center font-bold text-purple-600 pt-6">Portfolio Features</h1>

      <div className="flex justify-center items-center gap-48 pt-14">
        <div>

      <img src= {left} alt="" />

          <h1 className="text-[#3461C9] text-3xl font-medium pb-4">Customize your Portfolio</h1>
          <p className="flex flex-col justify-center text-[#273E5D] text-[18px] gap-7">
            Highlight your skills and achievements with detailed <br /> project descriptions, high-quality images, and links <br /> to live examples or code repositories. Add engaging sections <br /> like an "About Me" page and a contact form. <br /> Regularly update your portfolio to reflect new <br /> accomplishments and keep the content fresh.
          </p>
        </div>
        <img className="w-1/5" src={customize} alt="image" />
      </div>

      <div className="pt-14">
        <div className="flex justify-center items-center gap-48 pt-14">
          <img className="w-[400px]" src={pub} alt="image" />
          <div>
            <h1 className="text-[#3461C9] text-3xl font-medium pb-4">Share Anywhere</h1>
            <p className="flex flex-col justify-center text-[#273E5D] text-[18px] gap-7">
              Share your Portfolio with your readers no <br /> matter where they (and you) are! Email it as a link to <br /> open it straight away on social media.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen overflow-hidden" style={{
        backgroundImage: `url(${lap})`,
        backgroundSize: 'cover',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'blue',
          opacity: '0.9',
          zIndex: 1,
        }} className="flex flex-col justify-center items-center">
          <h1 className="font-medium text-white text-3xl flex justify-center items-center">How to create a portfolio</h1>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex justify-center items-center gap-7">
              <h2 className="text-white border-2 text-center text-3xl rounded-full w-14">1</h2>
              <div className="pt-24 flex flex-col gap-4">
                <h1 className="font-medium text-white text-2xl uppercase">Sign Up and Sign In</h1>
                <p className="text-white text-[16px] font-semibold">
                  To sign up, enter your first name, last name, <br /> email address, username, and password.<br /> For signing in, provide either your email address <br /> or username along with your password.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-7">
              <h2 className="text-white border-2 text-center text-3xl rounded-full w-14">2</h2>
              <div className="pt-24 flex flex-col gap-4">
                <h1 className="font-medium text-white text-2xl">CUSTOMIZE</h1>
                <p className="text-white text-[16px] font-semibold">Highlight your skills and achievements with detailed <br /> project descriptions, high-quality images, and links <br /> to live examples or code repositories. Add engaging <br /> sections like achievements, skills, and so on.</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-7">
              <h2 className="text-white border-2 text-center text-3xl rounded-full w-14">3</h2>
              <div className="pt-14 flex flex-col gap-4">
                <h1 className="font-medium text-white text-2xl">SHARE</h1>
                <p className="text-white text-[16px] font-semibold">
                Share your portfolio with as many people as <br /> you wish.  Publish on  social media or send as a link.
                </p>
              </div>
            </div>
          </div>
             </div>
      </div>
    </div>
  );
}

export default LandingPage;

     
