import * as React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "@/Hooks/useAuth";
import SideBar from "@/Components/SideBar";

import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
export default () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const { user, setUser } = useAuth();
  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex w-full grow items-stretch ">
        <div className="flex flex-col basis-3/12 grow w-full h-full border-r p-4 text-blue-700">
          <Link
            to="/profile"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">info</Icon>
            <div className="text-gray-500 font-bold">Information</div>
          </Link>
          <Link
            to="/billing"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">payment</Icon>
            <div className="text-gray-500 font-bold">Billing</div>
          </Link>
          <Link
            to="/appearance"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">brush</Icon>
            <div className="text-gray-500 font-bold">Appearance</div>
          </Link>
          <Link
            to="/notifications"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">notifications</Icon>
            <div className="text-gray-500 font-bold">Notifications</div>
          </Link>
          <Link
            to="/privacy"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">security</Icon>
            <div className="text-gray-500 font-bold">Privacy</div>
          </Link>
        </div>
        <div className="flex flex-col basis-9/12 grow w-full h-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};