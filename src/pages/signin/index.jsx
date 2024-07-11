import { google, laptop, } from "../../assets";
import { useForm } from "react-hook-form";


const Signin = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="flex">

      <div className="flex flex-col justify-center items-center h-screen w-1/2 ">
        <div className="pb-7 font-['Indie'] text-center ">
          <h1 className="text-4xl">Where did you go?</h1>
          <p className="text-2xl">Lets get you back in</p>
        </div>

        <form className="w-full max-w-xs mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input type="text" id="email"
              {
              ...register("email", { required: "Email is required" })
              }
              name="email" placeholder="Email address" className ="w-[350px] px-4 py-2 border-2  border-pink-600 text-gray-600 rounded-full outline-none" />
         { errors.email && (<p className="text-red-500">{errors.email.message}</p>) }
          </div>
         

          <div className="mb-4">
            <input type="password" id="password"
              {
              ...register("password", { required: "Password is required", minLength: "6" })
              }
              name="password" placeholder="Password" className="w-[350px] px-4 py-2 border-2  border-pink-600 text-gray-600 rounded-full  outline-none" />
               { errors.password && (<p className="text-red-500">{errors.password.message}</p>) }
          </div>

          <button type="submit" className="w-[350px] h-10 mt-2 bg-blue-900 text-white rounded-full border border-blue-900 hover:bg-blue-800 transition duration-200">Sign In</button>

          <div className="flex items-center my-4 w-[350px]">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-zinc-800">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button className ="flex items-center justify-center w-[350px] h-10 border border-pink-600 rounded-full text-gray-600 hover:bg-gray-100 transition duration-200">
            <img className ="w-5 h-5 mr-10" src={google} alt="Google Logo" />
            Sign in with Google
          </button>
        </form>
      </div>

      <div className="w-1/2 ">
        <img className="h-screen w-full" src={laptop} alt="img" />
      </div>


    </div>
  );
};

export default Signin;
