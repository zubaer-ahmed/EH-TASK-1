import * as React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import SideBar from "../../Components/SideBar";
import WorkerPanel from "../Jobs";
import CustomerPanel from "../../Pages/CustomerPanel";
import AdminPanel from "../AdminPanel";
import { LineChart } from '@mui/x-charts/LineChart';

import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Popover,
  Select,
} from "@mui/material";
import servicesList from "@/Data/services";

export default function Page() {

  const { user, setUser } = useAuth();

  const [suggestions, setSuggestions] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const services = React.useMemo(() => {
    if (!suggestions) {
      return servicesList;
    }
    return suggestions;
  }, [suggestions]);
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    const newSuggestions = await (await fetch(import.meta.env.VITE_BASE_URL + `/api/services/search/${value}`)).json();
    setSuggestions(newSuggestions);
  };


  return (<div className="container">
    <div className="flex flex-col mx-6 p-6 bg-gray-900 text-white rounded-b-xl" >
      <nav>
        <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
          <div className="flex-none lg:flex-initial">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Categories
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
              <form className="flex items-center space-x-2 border rounded-md p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto bg-transparent"
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                    value={inputValue}
                />
              </form>
            </div>
          </div>
        </div>
       </nav>
    </div>
    <div className="flex flex-wrap -m-4 text-center p-6">
      {services.map((service, index) => (
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
  );
};


