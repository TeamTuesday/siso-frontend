import {isEmail, isStrongPassword} from 'validator';

export const checkEmail = (email: AuthModule.TEmail, callback = () => ({})) => {
  if (!isEmail(email)) {
    callback();
    throw new Error('Email is not valid');
  }
};

export const checkPassword = (
  password: AuthModule.TPassword,
  callback = () => ({})
) => {
  if (!isStrongPassword(password)) {
    callback();
    throw new Error('Password is not strong enough');
  }
};

export const checkConfirmPassword = (
  password: AuthModule.TPassword,
  confirmPassword: AuthModule.TConfirmPassword,
  callback = () => ({})
) => {
  if (password !== confirmPassword) {
    callback();
    throw new Error('Passwords do not match');
  }
};

export const viewPassword = (refs: AuthModule.Tref[]) => {
  refs.forEach((ref: AuthModule.Tref) => {
    if (ref) {
      ref.type = ref.type === 'password' ? 'text' : 'password';
    }
  });
};
