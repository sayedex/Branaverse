import validator from 'email-validator';
import zxcvbn from 'zxcvbn';

export const isValidEmail = (email:string) => {
    return validator.validate(email);
  }

 export const checkPasswordStrength = (password:any) => {
    if(!password) return;
    const result = zxcvbn(password);
    return result.score >= 3;
  };