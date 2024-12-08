import { Link, useLocation, useNavigate } from "react-router";
import logo from "../../assets/logo1.png";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button, Checkbox} from "@material-tailwind/react";
import { useAuth } from "../../provider/AuthProvider";
import "./login.css"
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUserWithEmail, setUser, loginWithGoogle, error, setError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  // handle login 
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUserWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("User Successfully sing in");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Falied to Log in! Try again")
        if ((err = "auth/invalid-credential")) {
          setError({
            ...error,
            invalid: "Invalid email or password! try again",
          });
        }
        console.log(err);
      });
    
  };

  // handle google login 
  const handleGoogleLogin = () => {

    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("User Successfully Log in");
        navigate(location.state? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Warning!",
          text: "Failed!!  while Creating New user! try again",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen my-8 max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="w-full md:h-[800px] font-jost flex flex-col md:flex-row border items-center rounded-2xl shadow-md">
        <div
          className="hero h-full w-full flex-1 rounded-t-2xl md:rounded-r-none  md:rounded-l-2xl"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/hB1VwD5/Web-Photo-Editorr.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-30 rounded-t-2xl md:rounded-r-none  md:rounded-l-2xl"></div>
          <div className="text-neutral-content text-center">
            <div className="">
              <Link className="flex items-center gap-3 play-btn-auth w-fit">
                  <div className="relative h-[70px] flex items-center w-[70px]">
                      <p className="video-play-button-auth ">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 104 104" enableBackground="new 0 0 104 104" xmlSpace="preserve">
                              <path fill="none" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" d="M26,35h52L52,81L26,35z"/>
                              <circle className="video-play-circle-auth" fill="none" stroke="#e11d48" strokeWidth="4" strokeMiterlimit="10" cx="52" cy="52" r="50"/>
                          </svg>
                        <span className="video-play-outline-auth"></span>
                      </p>
                    </div>
                </Link>
            </div>
          </div>
        </div>

        {/* Sign up info */}
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className="flex-1 bg-[#252525] h-full w-full rounded-b-2xl md:rounded-l-none md:rounded-r-2xl p-6"
        >
          <div>
            <img src={logo} alt="" className="mx-auto" />
            <h3 className="text-4xl mb-3 font-black tracking-wide text-white font-inter text-center">
              Finest<span className="text-customGreen">Trip</span>
            </h3>
          </div>
          <p className="text-center text-white/75 font-jost font-bold text-2xl py-4">
            Welcome back, <br /> Please Log in to your account
          </p>
          {/* Error  */}
          {error?.invalid && (
            <p className="text-base text-red-500 text-center font-base">
              {error.invalid}
            </p>
          )}
          <div className="mt-2">
            <form
              onSubmit={handleLogin}
              className="w-full lg:max-w-[75%] mx-auto space-y-2"
            >
              {/* Email  */}
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor=""
                  className="text-white font-rubik text-sm font-normal my-px"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  className="px-6 py-2 rounded bg-white/85 shadow-md text-black font-rubik font-normal border-none focus:ring-1 focus:ring-primary focus:shadow-lg outline-none w-full placeholder-blue-gray-700"
                />
              </div>
              {/* Password  */}
              <div className="*:block xl:w-[75%] mx-auto relative -z-0">
                <label
                  htmlFor=""
                  className="text-white font-rubik text-sm font-normal my-px"
                >
                  Password
                </label>
                {/* <Input label="Username" className="placeholder-white bg-red-500" /> */}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="px-6 py-2 rounded bg-white/85 shadow-md text-black font-rubik font-normal border-none focus:ring-1 focus:ring-primary focus:shadow-lg outline-none w-full placeholder-blue-gray-700"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-8 right-3 text-black"
                >
                  {showPassword ? (
                    <FiEye size={18} className="text-black" />
                  ) : (
                    <FaRegEyeSlash size={18} className="text-black" />
                  )}
                </div>
              </div>
              {/* Remember & Forgot  */}
              <div className="text-white flex justify-between items-center xl:w-[75%] mx-auto">
                <label className="cursor-pointer label">
                    <Checkbox color="green" className="border-white" />
                    <span className="label-text text-white text-base">
                        Remember me
                    </span>
                </label>
                <p className="text-blue-400 font-medium cursor-pointer hover:text-blue-600 duration-300">
                  Forgot Password?
                </p>
              </div>
              <div className="xl:w-[75%] mx-auto pt-3">
                <Button type="submit" variant="filled" className="bg-primary text-white font-semibold font-jost tracking-widest w-full text-sm hover:bg-primary-dark duration-300">Log in</Button>
              </div>
            </form>
            {/* Anoter option  */}
            <div className="divider divider-neutral text-white font-rubik text-sm w-full lg:w-[75%] xl:w-[55%] mx-auto">
              Or Log in with Google
            </div>
            {/* Google Log in Sign in  */}
            <div className="my-3 text-center w-full lg:w-[75%] xl:w-[55%] mx-auto">
              <button onClick={handleGoogleLogin} className="px-6 rounded py-2 border border-primary bg-blue-gray-800 w-full flex justify-center">
                <FcGoogle size={28} />
              </button>
            </div>
            <div>
              <p className="font-rubik text-white text-center my-2">
                Don't have any account ?{" "}
                <Link to={"/auth/register"} className="text-blue-400 hover:text-primary duration-300">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;