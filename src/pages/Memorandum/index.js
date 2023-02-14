import React from "react";
import {
  AddressBook,
  BoxUpload,
  Editor,
  Selects,
  Tabs,
} from "../../components";
import { FcCancel, FcCheckmark } from "react-icons/fc";

const Memorandum = () => {
  return (
    <div className="p-4 bg-white rounded-lg dark:border-gray-700 mt-14">
      <form>
        <Tabs>
          <div label="Information Letter" icons={<FcCancel />}>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="to_external"
                  className="before:content-['*'] before:ml-0.5 before:text-red-500 block text-sm font-medium text-gray-900 "
                >
                  To External
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="to_external"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="type the recipient of the letter, then click the (+) icon beside to add the recipient"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="to_internal"
                  className="block text-sm font-medium text-gray-900 "
                >
                  To Internal
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="to_internal"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Select Office"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="cc_external"
                  className="block text-sm font-medium text-gray-900 "
                >
                  CC External
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="cc_external"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="type the recipient of the letter, then click the (+) icon beside to add the recipient"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="cc_internal"
                  className="block text-sm font-medium text-gray-900 "
                >
                  CC Internal
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="cc_internal"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Select Office"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="desti_City"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Destination City
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="desti_City"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="destination city"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="signer"
                  className="before:content-['*'] before:ml-0.5 before:text-red-500 block text-sm font-medium text-gray-900 "
                >
                  Signer
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="signer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Select Office"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="examiner"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Examiner
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="examiner"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Select Office"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="sps_Output"
                  className="before:content-['*'] before:ml-0.5 before:text-red-500 block text-sm font-medium text-gray-900 "
                >
                  SPS Output
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <textarea
                    type="text"
                    id="sps_Output"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Select Office"
                    required
                  />
                  <button className="flex-shrink-0 z-10 inline-flex py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mb-6 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="regarding"
                  className="before:content-['*'] before:ml-0.5 before:text-red-500 block text-sm font-medium text-gray-900 "
                >
                  Regarding
                </label>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <input
                    type="text"
                    id="regarding"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
                    placeholder="Regarding"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div label="Content" icons={<FcCancel />}>
            <div className="mb-6">
              <label className="before:content-['*'] before:ml-0.5 before:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Letter Content
              </label>
              <div className="h-80 overflow-auto">
                <Editor />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Attachment
              </label>
              <div className="w-full">
                <BoxUpload />
              </div>
            </div>
          </div>
          <div label="Attribute" icons={<FcCheckmark />}>
            <div className="mb-6">
              <div className="h-14 p-4 bg-zinc-300/50 rounded">
                Letter Attribute Details
              </div>
              <div className="p-4">
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Mail Code</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Characteristic</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Year</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Number Letter</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Date Create</div>
                  <div>
                    <Selects />
                  </div>
                </div>
              </div>
              <div className="h-14 p-4 bg-zinc-300/50 rounded">
                Letter Signatory Data
              </div>
              <div className="p-4">
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Units Code</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Name Office</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>Deputy</div>
                  <div>
                    <Selects />
                  </div>
                </div>
                <div className="grid gap-4 mb-6 grid-cols-2 border-b-2 border-gray-400/50">
                  <div>SubDeputy</div>
                  <div>
                    <AddressBook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Memorandum;
