import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputs, Skills } from "../../typeing";
import { BiHide, BiShow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";
import { Countrypicker } from "./Countrypicker";
import { Skill } from "./Skill";
import newRequest from "../../utils/Axiosapi";
import { Switchbtn } from "./Switchbtn";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { isValidEmail,checkPasswordStrength } from "../../hooks/validemail";
type Props = {
  query: any;
};

export const Signupform = ({ query }: Props) => {
  let countryData = Country.getAllCountries();
  const [Submitloading, setSubmitloading] = useState(false);
  const [country, setCountry] = useState(countryData[0]);
  const [skill, setskill] = useState<Skills[]>([]);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>();
  const [formIndex, setformIndex] = useState(0);
  const [visiable, setvisiable] = useState(false);
  const [company, setcompany] = useState(false);
  // to check 1st all input valid or not..
  const { firstName, lastName, email, username, password, birthday } = watch();

 useEffect(()=>{
if(password){
  console.log(  checkPasswordStrength(password));
  console.log(password !="");
  
}

 },[password])

  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setSubmitloading(true);
    try {
      const response = await newRequest.post("/auth/register", data);
      toast.success("Account created", {
        position: "bottom-right",
      });
      //push to login...
      router.push("/login");
      setSubmitloading(false);
    } catch (err: any) {
      toast.error(`${err?.response.data}`, {
        position: "bottom-right",
      });
      setSubmitloading(false);
    }
  };

  //send all data to backend server,,

  const HandleSender = () => {
    if (formIndex == 0) {
  
      if (firstName && lastName && email && username && password && birthday) {
        if(!isValidEmail(email)) return toast.info("Enter your valid email",{
          position: "bottom-right",
        })
        if(!checkPasswordStrength(password)) return toast.info("Your password is weak, please choose a stronger password",{
          position: "bottom-right",
        })
        setformIndex(1);
      } else {
        //we will push toast...
        toast.info(`Fill all input correctly `, {
          position: "bottom-right",
        });
      }
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const HandlePasswordVisiable = () => {
    setvisiable(!visiable);
  };
  const handleDateChange = (date: Date) => {
    setValue("birthday", date);
  };

  const handleCountryChange = (data: any) => {
    setCountry(data);
    setValue("country", data.name);
  };
  const handleSkillChange = (data: Skills) => {
    //if its sellected....
    const isSelected = skill.some((skillItem) => skillItem.name === data.name);
    if (isSelected) {
      setskill((prevSkills) => prevSkills.filter((skill) => skill !== data));
    } else {
      setskill((pv) => [...pv, data]);
    }
  };
  const handlesetCompany = () => {
    setcompany(!company);
    setValue("company", !company);
  };

  useEffect(() => {
    setValue("skills", skill);
  }, [skill]);
  useEffect(() => {
    if (query.id === "freelancer") {
      setValue("userType", "freelancer");
    } else {
      setValue("userType", "buyer");
    }
  }, []);

  useEffect(() => {
    setValue("company", company);
    setValue("country", country.name);
    setValue("profession", "");
    setValue('nofemployees', "");
    setValue('nofregistration', "");
    setValue("rusername", query?.referralCode ? query?.referralCode : "");
  }, []);

  return (
    <div className="max-w-[700px] pt-10">
      {/* form input with all level */}
      {formIndex == 0 ? (
        <div className=" flex flex-col gap-5 md:grid md:grid-cols-2">
          <Switchbtn enabled={company} handleChange={handlesetCompany} />
          <div className="mb-6">
            <label className="lebel">First Name</label>
            <input
              {...register("firstName", { required: true, maxLength: 80 })}
              type="text"
              defaultValue=""
              id="firstName"
              className="input"
              placeholder="Insert your first name"
              required
              name="firstName"
            />
          </div>

          <div className="mb-6">
            <label className="lebel">Last Name</label>
            <input
              {...register("lastName", { required: true, maxLength: 80 })}
              type="text"
              defaultValue=""
              id="lastName"
              className="input"
              placeholder="Insert your last name"
              required
              name="lastName"
            />
          </div>
          <div className="mb-6">
            <label className="lebel">E-mail Address</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              id="email"
              defaultValue=""
              className="input"
              placeholder="Insert your e-mail adress"
              required
            />
          </div>
          <div className="mb-6">
            <label className="lebel">Username</label>
            <input
              {...register("username", { required: true, maxLength: 80 })}
              type="text"
              id="username"
              defaultValue=""
              className="input"
              placeholder="Create your username"
              required
            />
          </div>
          <div className="mb-6 ">
            <label className="lebel">Password</label>
            <div className="flex flex-row items-center relative">
              <input
                {...register("password", { required: true, maxLength: 80 })}
                type={`${visiable ? "text" : "password"}`}
                id="lebel"
                className="input"
                // defaultValue=""
                placeholder="Create a password"
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
            <p className={`${checkPasswordStrength(password)?"text-green-500":"text-red-500"} p-2`}>{password ==="" ?"":checkPasswordStrength(password)?"":"Your password is weak, please choose a stronger password"}</p>
          </div>
          <div className="mb-6">
            <label className="lebel">Birthday</label>
            <DatePicker
              {...register("birthday", { required: true })}
              selected={watch("birthday")}
              className="input"
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              isClearable
              showYearDropdown
              nextYearAriaLabel="next"
              scrollableYearDropdown
              showFourColumnMonthYearPicker
              yearDropdownItemNumber={1000}
              showTimeInput
              scrollableMonthYearDropdown
              showTwoColumnMonthYearPicker
              placeholderText="Enter your Birthday"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-x-5 md:grid md:grid-cols-2">
          <div className="mb-6">
            <label className="lebel">Country</label>
            <Countrypicker
              {...register("country", { required: true })}
              data={countryData}
              selected={country}
              setSelected={handleCountryChange}
            />
          </div>

          <div className="mb-6">
            <label className="lebel">Profession</label>
            <input
              {...register("profession", { required: true })}
              type="text"
              id="profession"
              defaultValue=""
              className="input"
              placeholder="Insert your profession"
              required
              name="profession"
            />
          </div>
          <div className="mb-6">
            <label className="lebel">Reffer</label>
            <input
              {...register("rusername", { required: false })}
              type="text"
              id="rusername"
              defaultValue=""
              className="input"
              placeholder="optional"
              required
            />
          </div>

          {company && (
            <div className="mb-6">
              <label className="lebel">{`N° Registration`}</label>
              <input
                {...register("nofregistration", { required: company })}
                type="text"
                id="nofregistration"
                className="input"
                defaultValue=""
                placeholder={`Insert N° registration`}
                required
              />
            </div>
          )}

          {company && (
            <div className="mb-6">
              <label className="lebel">{`N°. of employees`}</label>
              <input
                {...register("nofemployees", { required: company })}
                type="text"
                id="nofemployees"
                defaultValue=""
                className="input"
                placeholder={`Insert N° employees`}
                required
              />
            </div>
          )}

          {/*  here is the skill */}
          {!company && (
            <Skill
              userType={query.id}
              selectedSkills={skill}
              handleSkillChange={handleSkillChange}
            />
          )}
        </div>
      )}
      {/* form input with all level */}

      {/* next and Submit button  */}
      <div>
        <button
          disabled={Submitloading}
          onClick={() => HandleSender()}
          className="next_submit_btn"
        >
          {formIndex == 0 ? "Next" : "Sign up"}
        </button>
      </div>

      {/* next and Submit button  */}
    </div>
  );
};
