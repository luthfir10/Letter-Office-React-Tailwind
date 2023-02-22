import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { IoPersonAddSharp } from "react-icons/io5";

const TextAreaList = ({ arrays, setArrays, ...rest }) => {
  const [toAddaddress, setToAddaddress] = useState("");

  const addArrayAddres = (e) => {
    e.preventDefault();
    if (!toAddaddress) {
      return console.log("Isi Address dulu");
    }
    setToAddaddress("");
    arrays.push({
      address: toAddaddress,
    });
  };

  const deleteAddress = (value) => {
    setArrays((oldValues) => {
      return oldValues.filter((arrayAddress) => arrayAddress !== value);
    });
  };

  return (
    <>
      <div className="flex">
        <textarea
          value={toAddaddress}
          onChange={(e) => setToAddaddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 border-l-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full p-2.5 focus:ring-1"
          {...rest}
        />
        <button
          className="flex-shrink-0 z-10 inline-flex py-5 px-4 text-base font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
          onClick={addArrayAddres}
        >
          <IoPersonAddSharp />
        </button>
      </div>
      {arrays && (
        <ol className="ml-5 mt-2 list-decimal">
          {arrays.map((array, key) => (
            <li key={key}>
              {array.address}

              <button
                className="text-xl inline  ml-2 text-red-600 justify-center hover:text-red-900 hover:border-red-900"
                onClick={() => deleteAddress(array)}
              >
                <TiDeleteOutline />
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default TextAreaList;
