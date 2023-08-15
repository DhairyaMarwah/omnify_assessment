import "jest-localstorage-mock"; // Add this line at the beginning of the file
import { errorToast, successToast } from "../../utils/toast";
import { login, signup } from "./index";
import apiCall from "../apiCall";

jest.mock("../apiCall", () => jest.fn());
jest.mock("../../utils/toast", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("login", () => {
  test("should call apiCall with correct arguments and handle success", async () => {
    const navigateMock = jest.fn();
    const apiCallMock = jest.fn().mockResolvedValue({ userData: "data" });

    apiCall.mockImplementation(apiCallMock);

    const formData = { email: "dhairyamarwah01@gmail.com", password: "demo" };
    await login(formData, navigateMock);

    expect(apiCallMock).toHaveBeenCalledWith("/login", "POST", formData);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movieUser",
      JSON.stringify({ userData: "data" })
    );
    expect(successToast).toHaveBeenCalledWith("Authenticated Successful"); 
  });

  test("should call apiCall and handle error", async () => {
    const navigateMock = jest.fn();
    const apiCallMock = jest.fn().mockRejectedValue(new Error("Login error"));

    apiCall.mockImplementation(apiCallMock);

    const formData = { email: "dhairyamarwah01@gmail.com", password: "demo" };
    await login(formData, navigateMock);

    expect(apiCallMock).toHaveBeenCalledWith("/login", "POST", formData);
    expect(errorToast).toHaveBeenCalledWith("Login error");
  });
});

describe("signup", () => {
  test("should call apiCall with correct arguments and handle success", async () => {
    const navigateMock = jest.fn();
    const apiCallMock = jest.fn().mockResolvedValue({ userData: "data" });

    apiCall.mockImplementation(apiCallMock);

    const formData = {
      email: "test@example.com",
      first_name: "John",
      last_name: "Doe",
      password: "password",
    };

    await signup(formData, navigateMock);

    expect(apiCallMock).toHaveBeenCalledWith("/register", "POST", formData);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movieUser",
      JSON.stringify({ userData: "data" })
    );
    expect(successToast).toHaveBeenCalledWith("Authenticated Successful"); 
  });

  test("should call apiCall and handle error", async () => {
    const navigateMock = jest.fn();
    const apiCallMock = jest.fn().mockRejectedValue(new Error("Signup error"));

    apiCall.mockImplementation(apiCallMock);

    const formData = {
      email: "test@example.com",
      first_name: "John",
      last_name: "Doe",
      password: "password",
    };

    // Call the signup function and await its result
    await signup(formData, navigateMock);

    // Expectations
    expect(apiCallMock).toHaveBeenCalledWith("/register", "POST", formData);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "movieUser",
      JSON.stringify({ userData: "data" })
    );
    expect(successToast).toHaveBeenCalledWith("Authenticated Successful"); 
  });
});
