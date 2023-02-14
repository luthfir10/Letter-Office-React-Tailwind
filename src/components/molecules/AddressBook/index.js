import React, { useState } from "react";
import { Modals } from "../../atoms";

const AddressBook = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modals showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AddressBook;
