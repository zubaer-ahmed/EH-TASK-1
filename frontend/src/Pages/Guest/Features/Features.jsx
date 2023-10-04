import React from "react";

const Features = () => {
  return (
    <div>
      <section className="bg-white mt-24">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl"><span className="underline decoration-blue-500">Features</span> we provide </h1>

          <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
              <span className="inline-block text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="4" r="2"></circle>
                  <path d="M12 18h2v-5h2V9c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4h2v5h2z"></path>
                  <path d="m18.446 11.386-.893 1.789C19.108 13.95 20 14.98 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.02.892-2.05 2.446-2.825l-.893-1.789C3.295 12.512 2 14.193 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-1.807-1.295-3.488-3.554-4.614z"></path>
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize">
                1 Stop service
              </h1>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:text-blue-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
              <span className="inline-block text-blue-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"></path>
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
                Fast Response
              </h1>

              <p className="text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
              <span className="inline-block text-blue-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.29 8.29 16 12.58l-1.3-1.29-1.41 1.42 2.7 2.7 5.72-5.7zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path>
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
                Verified Workers
              </h1>

              <p className="text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
