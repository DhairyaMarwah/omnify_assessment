import { errorToast, successToast } from "../../utils/toast";
import apiCall from "../apiCall";

function handleSuccess(data, navigate) {
  const userData = data;
  localStorage.setItem("movieUser", JSON.stringify(userData));
  successToast("Authenticated Successful");
  navigate("/");

  return data;
}

export const login = async (formData, navigate) => {
  try {
    const data = await apiCall("/login", "POST", formData);
    return handleSuccess(data, navigate);
  } catch (error) {
    errorToast(error.message);
  }
};

export const signup = async (formData, navigate) => {
  try {
    const data = await apiCall("/register", "POST", formData);
    return handleSuccess(data, navigate);
  } catch (error) {
    console.error(error);
    throw new Error(`Signup failed: ${error.message}`);
  }
};
