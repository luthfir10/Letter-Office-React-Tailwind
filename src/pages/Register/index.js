import React from "react";
import { useFormik } from "formik";
import logocp from "../../assets/img/logo_instansi.png";
import { registerSchema } from "../../schemas";

import axios from "../../services/api/axios";
const Register_URL = "/users";

const onSubmit = async (values, actions) => {
  try {
    await axios.post(Register_URL, JSON.stringify({ values }));
  } catch (error) {}
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Register = () => {
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
      role: "user1",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="pb-5 px-4 max-w-2xl mx-auto my-20 bg-white rounded-xl shadow-lg">
      <div className="flex justify-center my-0 bg-white border-gray-200 rounded dark:bg-gray-900">
        <div className="flex justify-center w-3/4 mb-5 -mt-14 lg:-mt-16 lg:w-auto rounded-full border-b-8">
          <img src={logocp} alt="Logo Instansi" />
        </div>
      </div>
      <div className="justify-center flex mb-5 text-slate-500 text-xl">
        Form Register
      </div>
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

export default Register;
