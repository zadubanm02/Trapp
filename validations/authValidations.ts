export interface Validation {
  email: null | string;
  password: null | string;
  fullName?: null | string;
}

export const validateForm = ({ email, password, fullName }: Validation) => {
  let validationErorrs: Validation = {
    email: null,
    password: null,
    fullName: null,
  };

  if (email && !validateEmail(email)) {
    validationErorrs = {
      ...validationErorrs,
      email: "Email je v nespravnom formate",
    };
  }

  if (password && !validatePassword(password)) {
    validationErorrs = {
      ...validationErorrs,
      password: "Heslo je priliz kratke",
    };
  }

  if (fullName && !validateFullName(fullName)) {
    validationErorrs = {
      ...validationErorrs,
      fullName: "Meno je priliz kratke",
    };
  }
  return validationErorrs;
};

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
  return password.length > 8;
};

const validateFullName = (fullName: string) => {
  return fullName.length > 2;
};

export const isFormValid = (validation: Validation) => {
  if (validation.email || validation.password || validation.fullName) {
    return false;
  }
  return true;
};
