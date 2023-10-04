import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    // clearErrors();
    // if (!user.email || !user.password)
    //   return showErrorMessage("Please fill in all the fields");

    // if (user.password != user.passwordConfirmation)
    //   return showErrorMessage("Password confirmation doesn't match");

    let res = await fetch(
      import.meta.env.VITE_BASE_URL + "/api/users/register",
      {
        method: "POST",
        credentials: "include", // Required to allow setting of imcomming cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    let responseJSON = await res.json();
    console.log("response", responseJSON);
    if (res.status != 200) {
      // return showErrorMessage(responseJSON?.error);
    }
    localStorage.jwt = responseJSON.jwt;
    await fetchUser(); // load extra details of users like, order history

    const previousUrl = localStorage.getItem('previousUrl') || null;
    localStorage.removeItem('previousUrl'); // Remove after use
    if (previousUrl) return history.push(previousUrl);
    navigate("/");
  }
  function showErrorMessage(msg) {
    document.querySelector("#signup-error").textContent = msg;
    document.querySelector("#signup-error").classList.remove("hidden");
  }
  function clearErrors() {
    document.querySelector("#signup-error").classList.add("hidden");
  }

  return (
    <>
      {/*<div className="h-full overflow-auto bg-gray-100 flex flex-col py-8">
      <div className="h-full bg-gray-100 flex flex-col py-8">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-medium">Sign up</h1>
            <div
              id="signup-error"
              className="text-sm p-2 rounded bg-red-100 border my-4 text-red-500 text-center hidden"
            ></div>
            <input
              type="text"
              className="border w-full p-3 rounded mb-4"
              name="firstname"
              placeholder="First Name"
              value={user.firstName}
              onChange={(event) => {
                setUser({ ...user, firstName: event.target.value });
              }}
            />
            <input
              type="text"
              className="border w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(event) => {
                setUser({ ...user, lastName: event.target.value });
              }}
            />

            <input
              type="text"
              className="border w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
            />

            <input
              type="password"
              className="border w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
            <input
              type="password"
              className="border w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={user.passwordConfirmation}
              onChange={(event) => {
                setUser({ ...user, passwordConfirmation: event.target.value });
              }}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-700 mt-4">
              By signing up, you agree to the{" "}
              <a className="no-underline border-b text-gray-700" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="no-underline border-b text-gray-700" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-gray-700 mt-6">
            Already have an account?{" "}
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>*/}
      <div className="bg-white h-full">
        <div className="flex justify-center h-screen">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"></path><circle cx="10" cy="8" r="2"></circle><circle cx="18" cy="12" r="2"></circle><circle cx="11.5" cy="13.5" r="1.5"></circle><circle cx="16.5" cy="6.5" r="1.5"></circle></svg>
                </div>

                <p className="mt-3 text-dark-500">Sing up and connect with us</p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 ">First name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="John" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={user.firstName}
                      onChange={(event) => {
                        setUser({ ...user, firstName: event.target.value });
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 ">First name</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Doe" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={user.lastName}
                      onChange={(event) => {
                        setUser({ ...user, lastName: event.target.value });
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="engineerhut@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={user.email}
                      onChange={(event) => {
                        setUser({ ...user, email: event.target.value });
                      }}
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password" placeholder="**********" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={user.password}
                      onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                      }}
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600">Confirm Password</label>
                    </div>

                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword" placeholder="**********" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={user.passwordConfirmation}
                      onChange={(event) => {
                        setUser({ ...user, passwordConfirmation: event.target.value });
                      }}
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Create Account
                    </button>
                  </div>

                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Already have an account? <Link to="/login"><a className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign in</a></Link>.</p>
              </div>
            </div>
          </div>
          <div className="hidden bg-cover lg:block lg:w-3/6" style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1607923287346-24af932a5f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHx3b3JrZXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60)" }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Engineer Hut</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                  molestiae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
