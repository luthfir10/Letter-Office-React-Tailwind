import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdClose } from "react-icons/md";

const Modals = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="lg:w-auto w-11/12 my-6 h-auto mx-auto max-w-3xl flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl">Address Book</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none hover:text-slate-400"
                  onClick={() => setShowModal(false)}
                >
                  <MdClose />
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="grid gap-2 mb-6 lg:grid-cols-2 lg:divide-x md:grid-cols-2 md:divide-x h-full">
                  <div className=" px-2 pt-2">
                    <div>Elected Officials</div>
                    <div>List</div>
                  </div>
                  <div className=" px-2 pt-2">
                    <div className="flex">
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1" />
                      <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                        <FcSearch />
                      </button>
                    </div>
                    <hr className="border border-sky-400 lg:my-2 sm:my-2" />
                    <div className="h-[336px] lg:h-96 md:h-[90px] overflow-auto">
                      <ol>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                        <li>sd</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className="opacity-25 fixed inset-0 z-50 w-full bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
};

export default Modals;
