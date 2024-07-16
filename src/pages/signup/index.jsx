import google from "../../images/google.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import bezz from "../../images/bezz.png";
import { useEffect, useState } from "react";
import { apiCheckUsernameExist, apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";
import { CirclesWithBar, } from "react-loader-spinner"

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setIsUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const checkUserName = async (userName) => {
    try {
      const res = await apiCheckUsernameExist(userName)
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);

      } else {
        setIsUsernameAvailable(true);
      }


    } catch (error) {
      console.log(error)

    }
  };



  const userNameWatch = watch("userName")
  console.log(userNameWatch);

  useEffect(() => {
    if (userNameWatch) {
      checkUserName(userNameWatch)
    }
  }, [userNameWatch])


  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password,
      email: data.email,
      confirmedPassword: data.password
    };

    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data);

      setTimeout(() => {
        navigate("/sig")
      }, 2000)

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      <div className="bg-[#EE219A] md:w-1/2 flex flex-col justify-center py-16 md:py-32 px-8 md:px-16 -mt-14">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Join Portfolio Hub</h1>
        <p className="text-white text-center mb-8 text-lg">
          and showcase your skills, projects, and creativity to the world. A well-crafted portfolio is an essential tool for any developer, helping you stand out in the competitive tech industry.
        </p>

        <div className="flex items-center">
          <div className="pr-14">
            <img src={bezz} alt="review img" className="w-20 h-20 mr-4 rounded-full" />
            <p className=" text-white">Sandra Amoanimaa</p>
          </div>
          <p className="text-white text-sm">
            "I am absolutely thrilled with my new portfolio website! The design is stunning, showcasing my work beautifully with a modern and professional look. Navigation is smooth, and the user experience is top-notch. The attention to detail is evident in every aspect, from the responsive layout to the interactive features. Communication throughout the project was excellent, with timely updates and a clear understanding of my vision. This website has exceeded my expectations and has already impressed many of my clients and colleagues. I highly recommend this service to anyone looking to create a standout online presence. Thank you for the fantastic work!"
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 flex flex-col justify-center items-center flex-grow py-10 md:py-0 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold pb-8">Register</h1>

        <form className="bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("firstName", { required: "First name is required" })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("lastName", { required: "Last name is required" })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Other Name"
              {...register("otherName",)}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("userName", { required: "Username is required" })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName && (<p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>)}

          {
            usernameAvailable && <p className="text-green-500">Username is Available!</p>
          }
          
          {
            usernameNotAvailable && <p className="text-red-500">Username is already taken!</p>
          }

          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", { required: "Password is required", minLength: { value: 9, message: "Password must be at least 9 characters" } })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-[#EE219A] hover:bg-white hover:text-[#EE219A] text-white font-bold w-full py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >

              {isSubmitting ? <CirclesWithBar
                height="30"
                width="30"
                color="#DB2777"
                outerCircleColor="#DB2777"
                innerCircleColor="#DB2777"
                barColor="#DB2777"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              /> : "Signup For Free"}
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-white border border-gray-300 hover:border-[#EE219A] hover:text-[#EE219A] text-black font-bold w-full py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => console.log('Sign up with Google')}
            >
              <img src={google} alt="Google logo" className="w-6 inline mr-2" />
              SIGN UP WITH GOOGLE
            </button>
          </div>

          <p className="mt-4 text-center text-sm">
            By creating an account, you agree to our <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
          </p>

          <div className="container signin text-center pt-3">
            <p className="text-sm">
              Already have an account? <a href="#" className="text-blue-600" onClick={() => navigate("/sig")}>Sign in</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
