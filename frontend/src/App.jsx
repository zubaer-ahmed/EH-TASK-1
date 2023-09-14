import { useAuth } from "@/Hooks/useAuth";
import AdminPanel from "./Pages/AdminPanel";
import PostJob from "./Pages/PostJob";
import PostService from "./Pages/PostService";
import Orders from "./Pages/Orders";
import Checkout from "./Pages/Checkout";
import Settings from "./Pages/Settings";
import Worker from "./Pages/WorkerPanel";
import Customer from "./Pages/Customer";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import AdminProfile from "./Pages/AdminPanel/Profile";
import Services from "./Pages/AdminPanel/Services";
import Jobs from "./Pages/AdminPanel/Jobs";
import Users from "./Pages/AdminPanel/Users";
import Comments from "./Pages/AdminPanel/Comments";
import Reviews from "./Pages/AdminPanel/Comments/Reviews";
import Suggestions from "./Pages/AdminPanel/Comments/Suggestions";
import Questions from "./Pages/AdminPanel/Comments/Questions";
import CommentById from "./Pages/AdminPanel/Comments/CommentById";
import JobById from "./Pages/JobById";
import ServiceById from "./Pages/ServiceById";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/SideBar";
import TopNav from "./Components/TopBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";
import Footer from "./Components/Footer";
import FAQ from "./Pages/Guest/FAQ/FAQ";
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState("1");
  const { user, setUser, fetchUser } = useAuth();
  React.useEffect(() => {
    (async () => {
      if (user) fetchUser();
      window.fetchUser = fetchUser;
    })();
    return () => { };
  }, []);
  return (
    <div className="relative flex flex-col w-full h-full">
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute redirect={<LandingPage />}>
              <Home className="flex flex-col  w-full h-full overflow-auto" />
              {/* renders either of customerHome, workerHome, adminHome */}
            </ProtectedRoute>
          }
        ></Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="job/:slug" element={<JobById />} />
        <Route path="service/:slug" element={<ServiceById />} />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="customer" element={<Customer />} />
        <Route path="postJob" element={<PostJob />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="postService" element={<PostService />} />
        <Route
          path="worker"
          element={
            <ProtectedRoute>
              <Worker />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<AdminPanel />}>
          <Route path="" element={<AdminProfile />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="comments/:slug" element={<CommentById />} />
          <Route
            path="comments"
            element={
              <div className="relative flex flex-col w-full h-full overflow-auto">
                <Tabs
                  variant="fullWidth"
                  value={tabValue}
                  onChange={(event, newValue) => {
                    setTabValue(newValue);
                    navigate(
                      `/admin/comments/${newValue == 1
                        ? "reviews"
                        : newValue == 2
                          ? "suggestions"
                          : "questions"
                      }`
                    );
                  }}
                  aria-label="icon label tabs example"
                >
                  <Tab iconPosition="start" value="1" label="Reviews" />
                  <Tab iconPosition="start" value="2" label="Suggestions" />
                  <Tab iconPosition="start" value="3" label="Questions" />
                </Tabs>{" "}
                <Outlet />
              </div>
            }
          >
            <Route path="" element={<Reviews />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="questions" element={<Questions />} />
          </Route>
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
