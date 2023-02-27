import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";

import logocp from "../../assets/img/logo_instansi.png";
import { Alerts } from "../../components/atoms";
import { loginSchema } from "../../schemas";
import useAuth from "../../services/hooks/useAuth";
import axios from "../../configs/api/axios";

const Login_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();
  const [msg, setMsg] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/spde";

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(Login_URL, {
        email: values.email,
        password: values.password,
      });
      // console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = [response?.data?.role];
      const user = response.data.username;
      setAuth({ user, roles, accessToken });
      // console.log(from);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      navigate(from, { replace: true });
    } catch (error) {
      if (!error.response) {
        allertPop("Server No Response");
      } else {
        allertPop(error.response.data.msg);
      }
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  const allertPop = (e) => {
    setMsg(e);
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 3500);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-10">
        <Link
          to="/"
          className="flex items-center mb-2 font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2" src={logocp} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {alertShow && <Alerts msg={msg} />}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
                {errors.email && touched.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                {errors.password && touched.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="register"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?
                <Link
                  to="register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
