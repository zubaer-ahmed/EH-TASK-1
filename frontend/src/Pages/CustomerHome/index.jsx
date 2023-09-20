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
      <div className="relative flex gap-2 mb-4 w-full max-w-xs">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Type something..."
          className="border border-gray-300 p-1 rounded w-full text-black px-2"
        />
        <div className="material-button">Search</div>
      </div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
        Categories
      </h1>
      <p className="lg:w-2/3 leading-relaxed text-base">
        Get Your Desired Product from Categories!
      </p>
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


