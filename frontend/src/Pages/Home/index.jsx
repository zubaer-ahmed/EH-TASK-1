import * as React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import SideBar from "../../Components/SideBar";
import WorkerPanel from "../../Pages/WorkerPanel";
import CustomerPanel from "../../Pages/CustomerPanel";
import AdminPanel from "../AdminPanel";

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
    <section className="flex flex-col w-full h-full  basis-full shrink-0">
      {(() => {
        if (user?.roles?.includes("customer")) {
          return <CustomerPanel />;
        } else if (user?.roles?.includes("worker")) {
          return <WorkerPanel />;
        } else if (user?.roles?.includes("admin")) {
          return <AdminPanel />;
        }
      })()}
    </section>
  );
};
