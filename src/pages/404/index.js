import { useNavigate } from "react-router-dom";
import logocp from "../../assets/img/logo_instansi.png";

const Notfound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-10">
        <div className="flex items-center mb-2 font-semibold text-gray-900 dark:text-white">
          <img className="mr-2" src={logocp} alt="logo" />
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Page 404
            </h1>
            <p>The page you are looking for was not found.</p>
            <button
              onClick={goBack}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
