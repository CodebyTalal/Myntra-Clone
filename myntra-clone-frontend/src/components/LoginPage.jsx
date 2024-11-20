import { useState } from "react";
import Header from "./Header";
import loginImage from "/images/loginImage.jpg";

const LoginPage = () => {
  const [placeholder, setPlaceholder] = useState("Mobile Number*");
  return (
    <>
      <Header />
      <main className="d-flex justify-content-center bg_pink mt-5 pt-4 min-vh-100">
        <div className="form-signin mt-5 ">
          <img src={loginImage} alt="" className="w-100" />
          <form className="p-5">
            <h4 className="mb-4 fs-5">
              <strong>Login</strong> <small>or</small> <strong>Signup</strong>
            </h4>

            <div className="border login_input p-2 mb-3 d-flex  align-items-center">
              <small
                className={`${
                  placeholder === "" ? "text-dark" : "text-secondary"
                } ms-3`}
              >
                +91 &nbsp;| &nbsp; &nbsp;
              </small>
              <input
                type="text"
                className="w-75 float-end floatingInput"
                placeholder={placeholder}
                onFocus={() => setPlaceholder("")}
                onBlur={() => setPlaceholder("Mobile Number*")}
              />
            </div>
            <p className="fs-8 my-4 ">
              By conitnuing, I agree to the{" "}
              <a className="text-pink fw-bold me-1">Terms of Use</a>&{" "}
              <a className="text-pink fw-bold">Privacy Policy</a>
            </p>
            <button className="btn-place-order">
              <div className="css-xjhrni fw-bold">CONTINUE</div>
            </button>
            <p className="fs-8 my-4 ">
              Have trouble logging in?{" "}
              <a className="text-pink fw-bold me-1">Get Help</a>{" "}
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
