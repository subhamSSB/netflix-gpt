
export const CheckValidate = (emails, passwords) => {
  
  const formValidation = {
    isValid: {
      email: true,
      password: true,
    }, // Assume the form is valid by default
    errors: {},
  };

  const email = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    emails
  );
  const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    passwords
  );

  if (!email) {
    formValidation.isValid.email = false;
    formValidation.errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    formValidation.isValid.password = false;
    formValidation.errors.password =
      "Your password must contain between 4 and 60 characters.";
  }
  return formValidation;

};
