import { useAuth } from "./Hooks/useAuth";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { Suspense, lazy } from 'react';
import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import Login from "./Pages/Login";

const AdminPanel = lazy(() => import("./Pages/AdminPanel"));
const CustomerHome = lazy(() => import("./Pages/CustomerHome"));
const RegisterWorker = lazy(() => import("./Pages/RegisterWorker"));
const Orders = lazy(() => import("./Pages/Orders"));
const CustomerOrders = lazy(() => import("./Pages/CustomerOrders"));
const WorkerJobs = lazy(() => import("./Pages/WorkerJobs"));
const Settings = lazy(() => import("./Pages/Settings"));
const Services = lazy(() => import("./Pages/AdminPanel/Services"));
const AdminPanelJobs = lazy(() => import("./Pages/AdminPanel/Jobs"));
const Users = lazy(() => import("./Pages/AdminPanel/Users"));
const Reviews = lazy(() => import("./Pages/AdminPanel/Comments/Reviews"));
const Suggestions = lazy(() => import("./Pages/AdminPanel/Comments/Suggestions"));
const Questions = lazy(() => import("./Pages/AdminPanel/Comments/Questions"));
const CommentById = lazy(() => import("./Pages/AdminPanel/Comments/CommentById"));
const ServiceById = lazy(() => import("./Pages/ServiceById"));
const Home = lazy(() => import("./Pages/Home"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const TopNav = lazy(() => import("./Components/TopBar"));
const Register = lazy(() => import("./Pages/Register"));
const Logout = lazy(() => import("./Pages/Logout"));
const Footer = lazy(() => import("./Components/Footer"));
const FAQ = lazy(() => import("./Pages/Guest/FAQ/FAQ"));
const Contact = lazy(() => import("./Pages/Guest/Contact"));
const Blog = lazy(() => import("./Pages/Guest/Blog"));
const Details = lazy(() => import("./Pages/Guest/Blog/details"));
const Profile = lazy(() => import('./Pages/Profile'));
const Jobs = lazy(() => import('./Pages/Jobs'));
import './i18n';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

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
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="registerWorker" element={
            <ProtectedRoute redirect="/login">
              <RegisterWorker />
            </ProtectedRoute>
          } />
          <Route
            path="/"
            element={
              <ProtectedRoute redirect={<LandingPage />}>
                <Home className="flex flex-col  w-full h-full overflow-auto" />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<CustomerHome />} />
            <Route path="*" element={<NotFound />} />

          </Route>
          <Route path="service/:slug" element={<ServiceById />} />
          <Route path="orders" element={
            <div className="flex flex-col w-full h-full">
              <Outlet />
            </div>
          } >
            <Route path="user" element={<CustomerOrders />} />
            <Route path="user/:slug" element={<CustomerOrders />} />
            <Route path="worker" element={<WorkerJobs />} />
            <Route path="worker/:slug" element={<WorkerJobs />} />
          </Route>
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:slug" element={<Jobs />} />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          >

            <Route path="profile" element={
              <Profile />
            } />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/details" element={<Details />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<AdminPanel />}>
            <Route path="" element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
            <Route path="services" element={<Services />} />
            <Route path="jobs" element={<AdminPanelJobs />} />
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
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
