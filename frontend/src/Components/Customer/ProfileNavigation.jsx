import * as React from "react";
import { useLocation, Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import SideBar from "../SideBar";

import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
export default function ProfileNavigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();

  const { user, setUser } = useAuth();
  return (
    <>
    <aside class="flex flex-col w-64 h-[96vh] px-5 pb-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
    <div class="flex flex-col justify-between flex-1 mt-4">
        <nav class="flex-1 -mx-3 space-y-3 ">
            <Link
            className={`${location.pathname == "/settings/profile" && "bg-blue-100"}`}
            to="/settings/profile" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700">
                <svg fill="#757575" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                <span class="mx-2 text-sm font-medium">Information</span>
            </Link>

            <Link
            to="/settings/billing" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <svg fill="#757575" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5"><path d="M20 4H4c-1.103 0-2 .897-2 2v2h20V6c0-1.103-.897-2-2-2zM2 18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6H2v6zm3-3h6v2H5v-2z"></path></svg>

                <span class="mx-2 text-sm font-medium">Billing</span>
            </Link>

            <Link
            to="/settings/appearance" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <svg fill="#757575" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5"><path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"></path><circle cx="7.5" cy="14.5" r="1.5"></circle><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="10.5" cy="7.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle></svg>

                <span class="mx-2 text-sm font-medium">Appearance</span>
            </Link>

            <Link
            to="/settings/notifications" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <svg fill="#757575" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5"><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path></svg>

                <span class="mx-2 text-sm font-medium">Notification</span>
            </Link>

            <Link
            to="/settings/privacy" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <svg fill="#757575" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5"><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z"></path></svg>

                <span class="mx-2 text-sm font-medium">Privacy</span>
            </Link>
        </nav>

        <div class="mt-6">
            <div class="p-3 bg-gray-100 rounded-lg">
                <h2 class="text-sm font-medium text-gray-800">New Service available!</h2>

                <p class="mt-1 text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                <img class="object-cover w-full h-32 mt-2 rounded-lg" src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80" alt=""/>
            </div>

            <div class="flex items-center justify-between mt-6">
                <a class="flex items-center gap-x-2">
                    <img class="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
                    <span class="text-sm font-medium text-gray-700 ">{user.firstName}</span>
                </a>
                
                <a class="text-gray-500 transition-colors duration-200 rotate-180  rtl:rotate-0 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</aside>
              </>
  );
};