import React, { useState } from "react";
import { Modals } from "../../atoms";

const AddressBook = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="w-full h-11 p-2 text-left bg-gray-50 border-gray-300 text-gray-500 border rounded-lg hover:border-sky-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Select Functionary
      </button>
      <Modals showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AddressBook;
