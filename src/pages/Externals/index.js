import React from "react";
import { Editor } from "../../components";

const Externals = () => {
  return (
    <div className="p-4 bg-white rounded-lg dark:border-gray-700 mt-14">
      External
      <form>
        <div className="h-96 overflow-auto">
          <Editor />
        </div>
      </form>
    </div>
  );
};

export default Externals;
