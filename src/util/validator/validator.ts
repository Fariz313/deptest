import * as joi from 'joi';

export const commonValidateSchema = joi.object({
  string: joi.string().required()
});

export const userCheckValidateSchema = joi.object({
  email: joi.string().email().required()
});
export const confirmOTPValidateSchema = joi.object({
  token: joi.string().required(),
  otp: joi.string().required()
});
export const authValidateSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export const authForgotPasswordRequestValidateSchema = joi.object({
  email: joi.string().email().required()
});
export const verificationRequstValidateSchema = joi.object({
  requester: joi.string().required()
});

export const authChangePasswordVRequestValidateSchema = joi.object({
  newPassword: joi.string().required(),
  oldPassword: joi.string().required()
});

export const authForgotPasswordConfirmationValidateSchema = joi.object({
  token: joi.string().required(),
  password: joi.string().required(),
  otp: joi.string().required()
});
export const deviceTokenRegistrationvalidateSchema = joi.object({
  deviceToken: joi.string().required()
});

export const userRegistrationValidateSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required()
});
