import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex w-full">
        <footer className="body-font w-full text-black">
          <div className="md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start">
            <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
              <a className="title-font flex items-center justify-center font-medium text-black md:justify-start">
                {
                  /*<MdOutlineHotelClass className='text-3xl text-[#EB5148]' />*/
                  <div className="flex items-center">
                    {/* <MdOutlineHotelClass className='text-3xl' /> */}
                    <svg
                      fill="#4f46e5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"></path>
                      <circle cx="10" cy="8" r="2"></circle>
                      <circle cx="18" cy="12" r="2"></circle>
                      <circle cx="11.5" cy="13.5" r="1.5"></circle>
                      <circle cx="16.5" cy="6.5" r="1.5"></circle>
                    </svg>

                    <h2 className="ml-3 text-2xl font-bold">Engineer Hut</h2>
                  </div>
                }
              </a>
              <div className="mt-4">
                <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="cursor-pointer text-gray-500 hover:text-black">
                    <svg
                      fill="#4f46e5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 cursor-pointer">
                    <svg
                      fill="#4f46e5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
              <div className="w-full px-4 md:w-1/2 lg:w-1/5">
                <h2 className="title-font font-bold  mb-3 text-sm uppercase tracking-widest text-black">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      className="cursor-pointer text-gray-500 hover:text-black"
                      href={"/About"}
                    >
                      Company
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer text-gray-500 hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className="cursor-pointer text-gray-500 hover:text-black"
                      href={"/Blogs"}
                    >
                      Blog
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/5">
                <h2 className="title-font mb-3 text-sm font-bold uppercase tracking-widest text-black">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a
                      className="cursor-pointer text-gray-500 hover:text-black"
                      href={"/Contact"}
                    >
                      Contact Support
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer text-gray-500 hover:text-black">
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer text-gray-500 hover:text-black">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/5">
                <h2 className="title-font mb-3 text-sm font-bold uppercase tracking-widest text-black">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="cursor-pointer text-gray-500 hover:text-black">
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li className="mt-3">
                    <Link
                      href={"/FAQ"}
                      className="cursor-pointer text-gray-500 hover:text-black"
                    >
                      FAQ
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/5">
                <h2 className="title-font mb-3 text-sm font-bold uppercase tracking-widest text-black">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      href={"/ContactUs"}
                      className="cursor-pointer text-gray-500 hover:text-black"
                    >
                      Send a Message
                    </Link>
                  </li>
                  <li className="mt-3">
                    <a className="cursor-pointer text-gray-500 hover:text-black">
                      +123-456-7890
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/5">
                <h2 className="title-font mb-3 text-sm font-bold uppercase tracking-widest text-black">
                  Stay tuned
                </h2>
                <form onSubmit={(e) => e.preventDefault()} className="mt-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg p-2 text-gray-500 outline-indigo-600 border border-indigo-300"
                  />
                  <button
                    className="mt-4 rounded-lg bg-indigo-600 p-2 px-3 font-medium
                              text-white shadow-md outline-none duration-150 hover:bg-indigo-500 focus:shadow-none sm:px-4"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-indigo-600">
            <div className="container mx-auto px-5 py-4">
              <p className="text-center text-sm capitalize text-black">
                © 2023 All rights reserved by{" "}
                <span className="text-black">Engineer Hut</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
