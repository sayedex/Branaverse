export type FormInputs = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  country: string;
  nofemployees?:string
  nofregistration?:string
  profession:string;
  birthday:any
  desc?: string;
  userType: 'freelancer' | 'buyer',
  company?:boolean;
  skills?: Skills[];
  portfolio?: any[];
  rusername?:string
  };


  export type Skills = {
    name:string
  }
  
  export type Login = {
    username:string,
    password:string,
    otp:string
  }

 export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  img?: string;
  country: string;
  profession:string;
  birthday:any
  desc?: string;
  refId:[]
  userType: 'freelancer' | 'buyer',
  company?:boolean;
  skills?: Skills[];
  portfolio?: any[];
 } 

 export type Changepassword = {
  oldpassword:string,
  password: string;
  confirmPassword:string
 }

 export type forgetpass = {
  email: string;
  password:string,
  confirmPassword:string,
  otp:string

 }