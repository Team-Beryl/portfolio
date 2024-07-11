import google from "../../images/google.jpg";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className='flex '>
      <div className='bg-[#EE219A] w-1/2 flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-bold text-white pb-28'>Join Portfolio Hub</h1>
        <p className='top-7'>
           and get the opportunity to showcase your skills, <br /> projects and creativity to the world.
           A well-crafted portfolio is an essential tool for <br /> any developer, and it will help you stand <br /> out in the competitive tech industry.
        </p>
        <p className='text'>
          
        </p>
      </div>

      <div className='px-10 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold pt-32'>Register</h1>

        <div className='mx-auto'>
          <form className='bg-white rounded-full px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='First Name'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Last Name'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Middle Name'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Email'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Username'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-6'>
              <input
                type='password'
                placeholder='Password'
                className='shadow appearance-none border rounded-full w-[400px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-[#EE219A] hover:bg-white hover:text-[#EE219A] text-white font-bold w-[400px] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
                type='button'
              >
                SIGNUP FOR FREE
                
              </button>
            </div>

            <div className='flex items-center my-4'>
              <hr className='flex-grow border-gray-300' />
              <span className='mx-4 text-gray-500'>or</span>
              <hr className='flex-grow border-gray-300' />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-white hover:border-[#EE219A] hover:text-[#EE219A] text-black font-bold w-[400px] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
                type='button'
              >
                <img src={google} alt="Google logo" className="w-7 inline mr-2"  />
                SIGNUP WITH GOOGLE
              </button>
            </div>

            <p className='mt-4 text-center'>
              By creating an account you agree to our <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
            </p>

            <div className="container signin text-center pt-3">
              <p>Already have an account? <a href="#" className="text-blue-600" onClick={() => navigate("/sig")}>Sign in</a>.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


