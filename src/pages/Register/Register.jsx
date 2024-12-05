import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo1.png";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@material-tailwind/react";
import { useAuth } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { registerUser } from "../../features/authentication";
import "../Login/login.css"


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, updateUserProfile, setUser, error, setError } = useAuth();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  // const [error, setError] = useState({});
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

  //    Handle Image upload
  const handleImageUpload = (e) => {
    const imageLink = e.target.files[0];
    const imageData = new FormData();
    imageData.append("image", imageLink);
    fetch(
      "https://api.imgbb.com/1/upload?key=176775b308da684d8b761f7bdfe641cd",
      {
        method: "POST",
        body: imageData,
      }
    )
      .then((res) => res.json())
      .then((data) => setImageUrl(data.data?.display_url));
  };

  // Hanele Register 
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const gender = data.get("gender");
    const updataData = { displayName: name, photoURL: imageUrl };

    const checkPassword = passwordRegex.test(password)
    const userData = {
      name,
      email,
      gender,
      imageUrl,
      password
    };
    
    registerUser(userData, createNewUser, updateUserProfile, setUser, error, setError, navigate)
    
  };
  const handleGoogleRegister = () => {

    googleLogin(loginWithGoogle, setUser)
    
  };

  return (
    <div className="min-h-screen my-8 max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="w-full md:h-[800px] font-rubik flex flex-col md:flex-row border items-center rounded-2xl shadow-md">
        {/* Sign up info */}
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="flex-1 bg-[#252525] h-full w-full rounded-b-2xl md:rounded-r-none md:rounded-l-2xl p-6 order-2 md:order-1"
        >
          <div>
            <img src={logo} alt="" className="mx-auto" />
            <h3 className="text-4xl mb-3 font-black tracking-wide text-white font-inter text-center">
              Finest<span className="text-customGreen">Trip</span>
            </h3>
          </div>
          <p className="text-center text-white/75 font-jost font-bold text-2xl py-3">
            New user, <br /> Please create your account
          </p>
          {/* Error  */}
          {error?.alreadyUsed && (
            <p className="text-base text-red-500 text-center font-base">
              {error.alreadyUsed}
            </p>
          )}
          <div className="">
            <form
              onSubmit={handleRegister}
              className="w-full lg:max-w-[75%] mx-auto space-y-2"
            >
                {/* Name  */}
              {/* Email  */}
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor=""
                  className="text-white font-rubik text-sm font-normal my-px"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="px-6 py-2 rounded bg-white/85 shadow-md text-black font-rubik font-normal border-none focus:ring-1 focus:ring-primary focus:shadow-lg outline-none w-full placeholder-blue-gray-700"
                />
              </div>
              {/* Email  */}
              <div className="*:block xl:w-[75%] mx-auto">
                <label
                  htmlFor=""
                  className="text-white font-rubik text-sm font-normal my-px"
                >
                  Your Email
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
              <div className="*:block xl:w-[75%] mx-auto relative">
                <label
                  htmlFor=""
                  className="text-white font-rubik text-sm font-normal my-px"
                >
                  Create a password
                </label>
                {/* <Input label="Username" className="placeholder-white bg-red-500" /> */}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
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
              {/* Gender  */}
              <div className="xl:w-[75%] mx-auto">
                <p className="text-white font-rubik font-semibold">Gender</p>
                <div className="text-white font-raleway flex items-center gap-6">
                  <span>
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      id="male"
                      required
                    />
                    <label htmlFor="male" className="ml-2">
                      Male
                    </label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      id="female"
                      required
                    />
                    <label htmlFor="female" className="ml-2">
                      Female
                    </label>
                  </span>
                </div>
              </div>
              {/* Photo  */}
              <div className="*:block font-raleway xl:w-[75%] mx-auto">
                <input
                  onChange={handleImageUpload}
                  type="file"
                  id="photo"
                  className="file-input shadow-md border-none outline-none w-full bg-white/75"
                />
              </div>
              <div className="xl:w-[75%] mx-auto pt-3">
                <Button type="submit" variant="filled" className="bg-primary text-white font-semibold font-jost tracking-wider w-full text-sm hover:bg-primary-dark duration-300">Register</Button>                
              </div>
            </form>
            {/* Anoter option  */}
            <div className="divider divider-neutral text-white font-rubik text-sm w-full lg:w-[55%] mx-auto">
              Or Log in with Google
            </div>
            {/* Google Log in Sign in  */}
            <div className="my-3 text-center w-full lg:w-[55%] mx-auto">
              <button onClick={handleGoogleRegister} className="px-6 rounded py-2 border border-primary bg-gray-800 w-full flex justify-center" >
                <FcGoogle size={28} />
              </button>
            </div>
            <div>
              <p className="font-rubik text-white text-center my-2">
                Already have an account ?{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-400 hover:text-primary duration-300"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Login image  */}
        <div
          className="hero h-full w-full flex-1 rounded-t-2xl md:rounded-l-none  md:rounded-r-2xl order-1 md:order-2"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/hB1VwD5/Web-Photo-Editorr.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-30 rounded-t-2xl md:rounded-l-none  md:rounded-r-2xl"></div>
          <div className="text-neutral-content text-center">
            <div className="">
              <Link className="flex items-center gap-3 play-btn-auth w-fit">
                  <div className="relative h-[70px] flex items-center w-[70px]">
                      <a className="video-play-button-auth ">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 104 104" enable-background="new 0 0 104 104" xml:space="preserve">
                              <path fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" d="M26,35h52L52,81L26,35z"/>
                              <circle class="video-play-circle-auth" fill="none" stroke="#e11d48" stroke-width="4" stroke-miterlimit="10" cx="52" cy="52" r="50"/>
                          </svg>
                        <span class="video-play-outline-auth"></span>
                      </a>
                    </div>
                </Link>
            </div>
          </div>
        </div>
        {/* End login image  */}
      </div>
    </div>
  );
};

export default Register;
// w-full h-full flex-1 order-1 md:order-2