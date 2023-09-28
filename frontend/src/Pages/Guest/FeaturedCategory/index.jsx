import React from "react";
import { Link } from "react-router-dom";

import services from "../../../Data/services";


const FeaturedCategory = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Featured Category
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get Your Desired Product from Featured Category!
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {services.slice(0, 10).map((service, index) => (
              <Link to={`/service/${service.id}`} key={index} className="p-4 md:w-1/5 sm:w-1/2 w-full">
                <div className="border-2 border-gray-300 px-4 py-6 rounded-lg h-full">
                  <img
                    src={service.imageSrc}
                    className="h-12 mx-auto"
                    alt=""
                  />
                  <p className="leading-relaxed mt-2">{service.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCategory;
