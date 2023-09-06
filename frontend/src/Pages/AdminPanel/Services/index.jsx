import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col px-12 container mx-auto mt-[1rem]">
      <div
        className="service-page-alert bg-zinc-100 border-t-4 border-teal-500 rounded-b text-zinc-700  px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Services Offerred by this Provider</p>
            <p className="text-sm">
              You will see all services you provide and be able to add/remove
              items
            </p>
          </div>
          <div className="grow"></div>
          <div
            className=""
            onClick={() =>
              document
                .querySelector(".service-page-alert")
                .classList.add("hidden")
            }
          >
            <div className="text-xl fa fa-window-close"></div>
          </div>
        </div>
      </div>
      <div className="buttons flex py-4 space-x-2">
        <button className="material-button">Add</button>
        <button className="material-button">Delete</button>
      </div>
      <h1 className="text-2xl font-bold my-2">Overview</h1>
      <div className="" id="example-table"></div>
      <h1 className="text-2xl font-bold mt-2">Services</h1>
    </div>
  );
};

export default Service;
