import React,{useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import newRequest from "../../utils/Axiosapi";
import { forgetpass } from "../../typeing";
import { ToastContainer, toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
type Props = {};

function ForgetPassword({}: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<forgetpass>();
  const [stage, setStage] = useState(1); // initialize stage to 1

  const { email } = watch();
  //show hide password state
  const [visiable, setvisiable] = useState({
    password: false,
    confirmPassword: false,
  });





  /// this will send a OTP for login...
  const SendOTP: SubmitHandler<forgetpass> = async (data) => {
    
    try {
      const response = await newRequest.post("/auth/OTP", data);
     toast.success(`${response.data.message}`, {
          position: "bottom-right",
       });
       setStage(2);
    } catch (err: any) {
       toast.error(`${err?.response.data}`, {
      position: "bottom-right",
        });
    }
  };

  /// this will send a OTP for login...
  const ValidOTP: SubmitHandler<forgetpass> = async (data) => {
    try {
      const response = await newRequest.post("/auth/validOTP", data);
     toast.success(`${response.data.message}`, {
          position: "bottom-right",
       });
       setStage(3);
    } catch (err: any) {
       toast.error(`${err?.response.data}`, {
      position: "bottom-right",
        });
    }
  };

  /// this will send a OTP for login...
  const Changepassword: SubmitHandler<forgetpass> = async (data) => {
    try {
      const response = await newRequest.post("/auth/resetpassword", data);
     toast.success(`${response.data.message}`, {
          position: "bottom-right",
       });
       setStage(1);
    } catch (err: any) {
      console.log(err);
      
       toast.error(`${err?.response.data}`, {
      position: "bottom-right",
        });
    }
  };


  const handleSendOTP = async () => {
    if(!email) return;
    handleSubmit(SendOTP)();
  };

  const handleValid = async () => {
    
    handleSubmit(ValidOTP)();
  };

  const submit = async () => {
    handleSubmit(Changepassword)();
  };




  return (
    <div className="my-auto flex justify-center align-middle items-center h-[80vh]">
      <div className="max-w-[500px] m-auto border p-8 rounded-xl">
      {stage === 1 && (
          <>
            <h1 className="text-3xl font-medium ">Forget password?</h1>
            <p className="py-5">
              {`No worries, we'll send you reset instructions.`}
            </p>
            <div className="mb-6">
              <label className="lebel">E-mail Address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                id="email"
                className="input"
                placeholder="Insert your e-mail adress"
                required
              />
            </div>
            <button onClick={() => handleSendOTP()} className="next_submit_btn">
              Submit
            </button>
          </>
        )}


{stage === 2 && (
          <>
            <h1 className="text-3xl font-medium ">Enter OTP </h1>
            <p className="py-5">
              {`An 6 digit code has been send to your email`}
            </p>
            <h3 className="py-2">{`Didn't recive code?`} <span onClick={()=>handleSendOTP()} className='cursor-pointer font-medium'>Request again</span></h3>

            <div className="mb-6">
              <input
                {...register('otp', {
                })}
                type="text"
                id="text"
                className="input"
                placeholder="Enter OTP"
                required
              />
            </div>
            <button onClick={() => handleValid()} className="next_submit_btn">
              Verify
            </button>
          </>
        )}

{stage === 3 && (
          <>
            <h1 className="text-3xl font-medium mb-6 ">Reset Password</h1>
    
            <div className="mb-6 ">
            <label className="lebel">New password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 80,
                  })}
                  type={`${visiable.password ? "text" : "password"}`}
                  id="password"
                  className="input"
                  placeholder="password"
                  required
                />
                <div
                  className="absolute right-3 z-10 "
                  onClick={() => {
                    setvisiable((prevState) => ({
                      ...prevState,
                      password: !prevState.password,
                    }));
                  }}
                >
                  {visiable.password ? (
                    <BiShow className="cursor-pointer w-[30px] text-xl" />
                  ) : (
                    <BiHide className="cursor-pointer w-[30px] text-xl" />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6 ">
              <label className="lebel">Confirm new password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("confirmPassword", {
                    required: true,
                    maxLength: 80,
                  })}
                  type={`${visiable.confirmPassword ? "text" : "password"}`}
                  id="password"
                  className="input"
                  placeholder="confirm"
                  required
                />
                <div
                  className="absolute right-3 z-10 "
                  onClick={() => {
                    setvisiable((prevState) => ({
                      ...prevState,
                      confirmPassword: !prevState.confirmPassword,
                    }));
                  }}
                >
                  {visiable.confirmPassword ? (
                    <BiShow className="cursor-pointer w-[30px] text-xl" />
                  ) : (
                    <BiHide className="cursor-pointer w-[30px] text-xl" />
                  )}
                </div>
              </div>
            </div>

            <button onClick={() => submit()} className="next_submit_btn">
              Submit
            </button>
          </>
        )}




      </div>
    </div>
  );
}

export default ForgetPassword;
