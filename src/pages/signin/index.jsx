import { google, laptop,} from "../../assets";


const Signin = () => {
  return (
    <div className="flex">




      <div class="flex flex-col justify-center items-center h-screen w-1/2 ">
      <div className="pb-7 font-['Indie'] text-center ">
      <h1 className="text-4xl">Where did you go?</h1>
      <p className="text-2xl">Lets get you back in</p>
      </div>
       
        <form class="w-full max-w-xs mx-auto">
          <div class="mb-4">
            <input type="text" id="email" name="email" placeholder="Email address" class="w-[350px] px-4 py-2 border-2  border-pink-600 text-gray-600 rounded-full outline-none" />
          </div>
          <div class="mb-4">
            <input type="password" id="password" name="password" placeholder="Password" class="w-[350px] px-4 py-2 border-2  border-pink-600 text-gray-600 rounded-full  outline-none" />
          </div>
          <button type="submit" class="w-[350px] h-10 mt-2 bg-blue-900 text-white rounded-full border border-blue-900 hover:bg-blue-800 transition duration-200">Sign In</button>
          <div class="flex items-center my-4 w-[350px]">
            <hr class="flex-1 border-gray-300" />
            <span class="mx-2 text-zinc-800">or</span>
            <hr class="flex-1 border-gray-300" />
          </div>
          <button class="flex items-center justify-center w-[350px] h-10 border border-pink-600 rounded-full text-gray-600 hover:bg-gray-100 transition duration-200">
            <img class="w-5 h-5 mr-10" src={google} alt="Google Logo" />
            Sign in with Google
          </button>
        </form>
      </div>

      <div className="w-1/2 ">
        <img  className="h-screen w-full" src={laptop} alt="img" />
      </div>


    </div>
  );
};

export default Signin;
