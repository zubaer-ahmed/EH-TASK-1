import React from "react";
import AlertView from "../../../Components/AlertView";

const Service = () => {
  return (
    <div className="flex flex-col w-full px-4 py-4">
      <AlertView
        title="Services Offerred by this Provider"
        message="You will see all services you provide and be able to add/remove items"
      />
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
