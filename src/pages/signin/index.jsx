
import { google, laptop, quality } from "../../assets";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import { HomeIcon } from "lucide-react";

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({reValidateMode: "onBlur", mode: "all"});
  const addToLocalStorage = (accessToken, User) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", User.firstName);
    localStorage.setItem("lastName", User.lastName);
    localStorage.setItem("useName", User.userName)
  }

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      
      addToLocalStorage(res.data.accessToken, res.data.User)
      

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/signup");
      }, 500);
        
     
    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex">
  <div className="flex flex-col justify-center items-center h-screen w-3/5 p-10">
    <div onClick={() => navigate('/') } className="pb-10">
    <HomeIcon className=""/>
    </div>
         
        <div className="pb-7 font-sans text-center">
          <h1 className="text-4xl font-bold">Where did you go?</h1>
          <p className="text-2xl">Let's get you back in</p>
        </div>
        <form className="w-full max-w-xs mx-auto" onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email address"
              className="w-full px-4 py-2 border-2 border-pink-600 text-gray-600 rounded-lg outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>


          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              {...register("password", { required: "Password is required", minLength: { value: 9, message: "Password must be at least 9 characters" } })}
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-pink-600 text-gray-600 rounded-lg outline-none"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-pink-600 text-white rounded-lg border border-white hover:bg-[#E59E81] transition duration-200"
          >

            {isSubmitting ? <Loader/> : "Sign In"}

          </button>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button
            className="flex items-center justify-center w-full h-10 border border-pink-600 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200" type="submit"
          >
            <img className="w-5 h-5 mr-2" src={google} alt="Google Logo" />
            Sign in with Google
          </button>
        </form>
      </div>



      <div className="relative w-2/5">
        <img className="h-screen w-full object-cover" src={quality} alt="image" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

    </div>
  );
};

export default Signin;
