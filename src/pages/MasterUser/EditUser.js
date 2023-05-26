import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alerts } from "../../components";
import axios from "../../configs/api/axios";
import { registerSchema } from "../../schemas";

const EDIT_USER_URL = "";

const EditUser = () => {
  const { uuid } = useParams();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [alertShow, setAlertShow] = useState(false);

  const onSubmit = async (values, actions) => {
    try {
      await axios.post(EDIT_USER_URL, {
        name: values.name,
        email: values.email,
        password: values.password,
        confPassword: values.confPassword,
        role: values.role,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      navigate("/");
    } catch (error) {
      allertPop(error.response.data.msg);
    }
  };

  const allertPop = (e) => {
    setMsg(e);
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 3500);
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
      name: "",
      email: "",
      password: "",
      confPassword: "",
      role: "user",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  return (
    <div className="p-2 bg-white rounded-lg dark:border-gray-700 mt-14">
      editUser {uuid}
      <div className="justify-center flex mb-5 text-slate-500 text-xl">
        Form Register
      </div>
      {alertShow && <Alerts msg={msg} />}
      <div className="lg:container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
            {errors.name && touched.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.name}
              </p>
            )}
          </div>
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
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              value={values.confPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confPassword"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.confPassword && touched.confPassword
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder=" "
            />
            <label
              htmlFor="confPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            {errors.confPassword && touched.confPassword && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.confPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
