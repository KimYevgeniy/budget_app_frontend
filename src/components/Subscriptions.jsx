import React from "react";

const Subscriptions = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Button
        </button>
        <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          Save changes
        </button>
      </div>
    </>
  );
};

export default Subscriptions;
