import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { Login } from "../../typeing";
import { Logout, Loginuser } from "../../Reduxhelper/usercall";
import { BiHide, BiShow } from "react-icons/bi";
import newRequest from "../../utils/Axiosapi";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { Loginstaticcomponent } from "../../components/Login/Loginstaticcomponent";
import Link from "next/link";
const Login = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<Login>();
  const [visiable, setvisiable] = useState(false);
  const [otpstate, setotpstate] = useState<boolean>(false);
  const { username, password, otp } = watch();
  const { active, user, isauthenticateuser } = useAppSelector(
    (state) => state.userSlice
  );

  const dispath = useAppdispatch();

  //router..
  const router = useRouter();
  useEffect(() => {
    if (isauthenticateuser) {
      router.push("/me");
    }
  }, [isauthenticateuser]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors", // enable CORS
  };
  /// this will send a OTP for login...
  const SendOTP: SubmitHandler<Login> = async (data) => {
    try {
      const response = await newRequest.post("/auth/loginotp", data,config);
      toast.success(`${response.data.message}`, {
        position: "bottom-right",
      });
       console.log(response);
       
      setotpstate(true);
    } catch (err: any) {
      console.log(err);
      
      toast.error(`${err?.response.data}`, {
        position: "bottom-right",
      });
    }
  };
  /// this will login user
  const loginser: SubmitHandler<Login> = async (data) => {
    dispath(
      Loginuser({
        data: data,
      })
    );
  };

  const HandleLogin = () => {
    if (username && password && otp) {
      handleSubmit(loginser)();
    } else {
      //we will push toast...
      window.alert("plz input all field");
    }
  };

  const HandleSender = () => {
    if (username && password) {
      handleSubmit(SendOTP)();
    } else {
      //we will push toast...
      toast.info(`Fill the input`, {
        position: "bottom-right",
      });
    }
  };

  //func
  const HandlePasswordVisiable = () => {
    setvisiable(!visiable);
  };

  return (
   <div className='bgcolor md:h-screen'>
     <div className=" items-center grid grid-cols-1 md:grid-cols-2 gap-x-10   md:h-[80vh] p-5 max-w-7xl m-auto">
      <Loginstaticcomponent />
      <div className="p-5 pt-24 w-full  ">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome Back!</h1>
        <div className="text-lg tracking-[1px] pt-10 pb-6">
          <p>{`Dont't have an account yet? create now`}</p>
          {/* here we will put signUp page */}
        </div>

        {/* all input  */}
        {!otpstate && (
          <div className="max-w-[500px]">
            <div className="mb-6">
              <label className="lebel">Username</label>
              <input
                {...register("username", { required: true, maxLength: 80 })}
                type="text"
                id="username"
                className="input"
                placeholder="username"
                required
              />
            </div>

            <div className="mb-6 ">
              <label className="lebel">Password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("password", { required: true, maxLength: 80 })}
                  type={`${visiable ? "text" : "password"}`}
                  id="password"
                  className="input"
                  placeholder="password"
                  required
                />
                {visiable ? (
                  <BiShow
                    onClick={() => HandlePasswordVisiable()}
                    className="absolute right-3 z-10 cursor-pointer w-[30px] text-xl"
                  />
                ) : (
                  <BiHide
                    onClick={() => HandlePasswordVisiable()}
                    className="absolute right-3 z-10 cursor-pointer w-[30px] text-xl"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-row justify-between py-3">
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" /> Remember me
              </div>
              <Link href="/forgetpassword">Forgot password</Link>
            </div>

            <button onClick={() => HandleSender()} className="next_submit_btn">
              Login
            </button>
          </div>
        )}
        {/* all input  */}

        {/* here is OTP part */}

        {otpstate && (
          <div className="max-w-[500px]">
            <div className="mb-6">
              <p className="py-5">      {`An 6 digit code has been send to your email`}</p>

              <h3 className="py-2">{`Didn't recive code?`} <span onClick={()=>HandleSender()} className='cursor-pointer font-medium'>Request again</span></h3>
              <input
                {...register("otp", { required: false, maxLength: 80 })}
                type="text"
                id="OTP"
                className="input"
                placeholder="OTP"
                required
              />
            </div>

            <button onClick={() => HandleLogin()} className="next_submit_btn">
              Login
            </button>
          </div>
        )}

        {/* here is OTP part */}
        <div className="py-5">
          <p className="text-center">
            {`Don't have an account?`}{" "}
            <Link className="text-[#1d2551] font-normal" href="/">
              Register Here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
