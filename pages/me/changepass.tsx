import React, { useState } from "react";
import { Sidebar } from "../../components/Me/Sidebar";
import { Dashboardheader } from "../../components/Header/Dashboardheader";
import { useForm, SubmitHandler } from "react-hook-form";
import { Changepassword } from "../../typeing";
import { BiHide, BiShow } from "react-icons/bi";
import newRequest from "../../utils/Axiosapi";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const Changepass = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<Changepassword>();
  const [visiable, setvisiable] = useState({
    oldpassword: false,
    password: false,
    confirmPassword: false,
  });

  /// this will send a OTP for login...
  const Changepassword: SubmitHandler<Changepassword> = async (data) => {

    try {
      const response = await newRequest.post("/auth/passwordchange", data);
      toast.success(`${response?.data.message}`, {
        position: "bottom-right",
      });
      console.log(response);
    } catch (err: any) {
      console.log(err);
      toast.error(`${err?.response.data}`, {
        position: "bottom-right",
      });
    }
  };

  //handleChange
  const handleChange = () => {
    handleSubmit(Changepassword)();
  };

  return (
    <>
      <div className="main_cotent">
        <Sidebar />

        <div className="w-full">
          <div className="m-auto max-w-[500px] p-10">
            <div className="mb-6 ">
              <label className="lebel">Previous password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("oldpassword", {
                    required: true,
                    maxLength: 80,
                  })}
                  type={`${visiable.oldpassword ? "text" : "password"}`}
                  id="password"
                  className="input"
                  placeholder="Previous password"
                  required
                />
                <div
                  className="absolute right-3 z-10 "
                  onClick={() => {
                    setvisiable((prevState) => ({
                      ...prevState,
                      oldpassword: !prevState.oldpassword,
                    }));
                  }}
                >
                  {visiable.oldpassword ? (
                    <BiShow className="cursor-pointer w-[30px] text-xl" />
                  ) : (
                    <BiHide className="cursor-pointer w-[30px] text-xl" />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6 ">
              <label className="lebel">New Password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("password", { required: true, maxLength: 80 })}
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
                    <BiShow className=" cursor-pointer w-[30px] text-xl" />
                  ) : (
                    <BiHide className=" cursor-pointer w-[30px] text-xl" />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6 ">
              <label className="lebel">Confirm password</label>
              <div className="flex flex-row items-center relative">
                <input
                  {...register("confirmPassword", {
                    required: true,
                    maxLength: 80,
                  })}
                  type={`${visiable.confirmPassword ? "text" : "password"}`}
                  id="password"
                  className="input"
                  placeholder="confirm password"
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
                    <BiShow className=" cursor-pointer w-[30px] text-xl" />
                  ) : (
                    <BiHide className=" cursor-pointer w-[30px] text-xl" />
                  )}
                </div>
              </div>
            </div>
            <button onClick={() => handleChange()} className="next_submit_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Changepass;
