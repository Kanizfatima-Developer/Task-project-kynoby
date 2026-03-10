export const validateName = (name) => {
  const regex = /^[A-Za-z ]+$/;
  return regex.test(name) && name.trim() !== "";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

export const validateText = (text) => {
  return text.trim().length > 0;
};