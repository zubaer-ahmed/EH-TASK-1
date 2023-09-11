import ReactCountryFlag from "react-country-flag";
import Icon from "@mui/material/Icon";
import * as React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { useAuth } from "@/Hooks/useAuth";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const TopNav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [visible, setVisible] = React.useState(false);
  const [language, setLanguage] = React.useState("gb");
  const languages = ["gb", "bd", "jp"];
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      <nav className="shrink-0 sticky top-0 h-14 w-full border-b bg-white/50 backdrop-blur-md space-y-8 z-10">
        <ul className="flex items-center h-full space-x-2 px-4 font-medium overflow-x-auto">
          <li>
            <div className="h-full flex items-center justify-center">
              <Link to="/" className="flex items-center">
                <svg
                  fill="#0000FF"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.824 16.675c-.105.726-1.587 2.609-2.269 2.882-.232.093-.457.07-.637-.068-.116-.09-.235-.272-1.833-2.866l-.475-.773c-.183-.277-.148-.642.078-.92.223-.27.549-.37.832-.262.016.008 1.195.397 1.195.397 2.688.883 2.775.917 2.891 1.002.17.139.249.356.214.608h.004zm-5.386-3.946c-.19-.289-.187-.63.01-.865l.746-1.019c1.642-2.235 1.732-2.353 1.843-2.431a.636.636 0 0 1 .652-.024c.651.316 1.966 2.269 2.045 3.019v.025a.623.623 0 0 1-.259.587c-.123.079-.235.125-3.291.866-.483.123-.752.19-.91.247l.021-.023c-.302.091-.64-.055-.831-.357l-.026-.025zm-1.875-1.159c-.146.046-.591.185-1.139-.702 0 0-3.694-5.813-3.78-5.992-.053-.201.011-.429.19-.613.55-.569 3.534-1.405 4.315-1.215.255.066.43.227.491.453.045.25.408 5.646.46 6.854.051 1.034-.392 1.171-.537 1.215zm.487 5.913c-.008 2.827-.015 2.922-.061 3.056-.079.211-.26.352-.51.398-.72.122-2.972-.71-3.441-1.267a.739.739 0 0 1-.157-.37c-.013-.09 0-.18.033-.259.057-.146.135-.259 2.158-2.63l.594-.706c.203-.26.563-.338.899-.204.325.124.528.405.506.708v1.259l-.021.015zm-6.13-1.808c-.222-.006-.42-.14-.535-.358-.083-.162-.142-.428-.18-.752-.102-.974.023-2.444.314-2.911.138-.214.338-.327.559-.319.146 0 .276.046 3.167 1.236l.848.337c.302.111.489.427.472.787-.022.348-.224.616-.521.696l-1.202.382c-2.689.864-2.778.888-2.919.877l-.003.025zm11.22 5.322h-.004l-.003.003.007-.003z"></path>
                </svg>

                <div className=" text-lg text-gray-800 font-extrabold mr-2">
                  Engineer<span className="text-red-700">Hut</span>
                </div>
              </Link>
            </div>
          </li>
          <li></li>
          {/* <li>
            <Link to="/profile">Profile</Link>
          </li>
           <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/worker">Worker</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li> */}
          <li className="hidden sm:block">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                  placeholder="Search Jobs/Services ..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </li>
          <div className="grow"></div>
          <li className="hidden sm:block">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                className="w-full"
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Language"
                value={language}
                onChange={({ target: { value } }) => {
                  setLanguage(value);
                }}
              >
                {languages &&
                  languages.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      <div className="flex items-center space-x-2">
                        <ReactCountryFlag countryCode={item} svg />
                        <div>{item}</div>
                      </div>
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </li>
          <li className={"hidden sm:block" + (user && "hidden")}>
            <Link className="material-button" to="/login">
              Login
            </Link>
          </li>
          <li className={"hidden sm:block" + (user && "hidden")}>
            <Link className="" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Tippy
              interactive={true}
              onClickOutside={hide}
              visible={visible}
              content={
                <div
                  className="flex flex-col bg-white border w-64 p-4 shadow-lg"
                  onClick={hide}
                >
                  <Link
                    className="flex items-center text-sm text-gray-500 space-x-1 hover:bg-gray-200 p-2 rounded"
                    to="/profile"
                  >
                    <Icon fontSize="inherit">person</Icon>
                    <div>Profile</div>
                  </Link>
                  <Link
                    className="flex items-center text-sm text-gray-500 space-x-1 hover:bg-gray-200 p-2 rounded"
                    to="/settings"
                  >
                    <Icon fontSize="inherit">settings</Icon>
                    <div>Settings</div>
                  </Link>
                  <Link
                    className="flex items-center text-sm text-gray-500 space-x-1 hover:bg-gray-200 p-2 rounded"
                    to="/search"
                  >
                    <Icon fontSize="inherit">search</Icon>
                    <div>Search</div>
                  </Link>
                  <Link
                    className="flex items-center text-sm text-gray-500 space-x-1 hover:bg-gray-200 p-2 rounded"
                    to="/language"
                  >
                    <Icon fontSize="inherit">language</Icon>
                    <div>Language</div>
                  </Link>
                  <Link
                    className="flex items-center text-sm text-gray-500 space-x-1 hover:bg-gray-200 p-2 rounded"
                    to="/logout"
                  >
                    <Icon fontSize="inherit">logout</Icon>
                    <div>Logout</div>
                  </Link>
                </div>
              }
            >
              <div
                className="text-xs flex items-center space-x-2"
                onClick={visible ? hide : show}
              >
                <div className="hidden sm:block">{user?.firstName}</div>
                <img
                  src={"noimage.svg"}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </Tippy>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
