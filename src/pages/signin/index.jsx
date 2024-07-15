import { google, laptop, quality } from "../../assets";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log(data); 
    setIsSubmitting(true);
   
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response: ", res.data)
      // redirect user to dashboard
      navigate("/dash")

    } catch (error) {
     console.log(error)

    }
    finally{
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex">
      {/* Left Section: Sign-in Form */}
      <div className="flex flex-col justify-center items-center h-screen w-3/5 p-10">
        <div className="pb-7 font-sans text-center">
          <h1 className="text-4xl font-bold">Where did you go?</h1>
          <p className="text-2xl">Let's get you back in</p>
        </div>

        <form className="w-full max-w-xs mx-auto" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="text"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email address"
              className="w-full px-4 py-2 border-2 border-pink-600 text-gray-600 rounded-lg outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-pink-600 text-gray-600 rounded-lg outline-none"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full h-10 mt-2 bg-pink-600 text-white rounded-lg border border-white hover:bg-[#E59E81] transition duration-200"
          >
           
           {isSubmitting? "Loading....." : "Sign In"} 
          </button>

          {/* Divider */}
          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Sign In with Google Button */}
          <button
            className="flex items-center justify-center w-full h-10 border border-pink-600 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200"
          >
            <img className="w-5 h-5 mr-2" src={google} alt="Google Logo" />
            Sign in with Google
          </button>
        </form>
      </div>

      {/* Right Section: Image */}

      <div className="relative w-2/5">
  <img className="h-screen w-full object-cover" src={quality} alt="image" />
  <div className="absolute inset-0 bg-black opacity-30"></div>
</div>

    </div>
  );
};

export default Signin;
