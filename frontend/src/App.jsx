import Admin from "./Pages/AdminPanel/Profile";
import AdminPanel from "./Pages/AdminPanel";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Pages/AdminPanel/Profile/SideBar";
import Service from "./Pages/AdminPanel/Service";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NavBar from "./Pages/AdminPanel/Profile/SideBar";
import TopNav from "./Components/TopNav";

import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="overflow-auto flex flex-col w-full h-full">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="admin"
          element={
            <div className="flex w-full h-full">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route path="profile" element={<Admin />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
