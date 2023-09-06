import AdminPanel from "./Pages/AdminPanel";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import Profile from "./Pages/AdminPanel/Profile";
import Services from "./Pages/AdminPanel/Services";
import Jobs from "./Pages/AdminPanel/Jobs";
import Users from "./Pages/AdminPanel/Users";
import Comments from "./Pages/AdminPanel/Comments";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/SideBar";
import TopNav from "./Components/TopNav";

import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="admin"
          element={
            <div className="relative flex w-full h-full">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route
            path="profile
          "
            element={<AdminPanel />}
          />
          <Route path="" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
