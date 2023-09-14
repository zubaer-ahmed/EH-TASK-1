import * as React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import SideBar from "../../Components/SideBar";

import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
export default () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [sortType, setSortType] = React.useState("");
  const [sortTypes, setSortTypes] = React.useState([
    "Name Ascending",
    "Name Descending",
    "Price Ascending",
    "Price Descending",
  ]);
  const [limit, setLimit] = React.useState(10);
  const [limits, setLimits] = React.useState([5, 10, 20, 50]);
  const { user, setUser } = useAuth();

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex w-full grow items-stretch p-4">
        <div className="flex flex-col basis-3/12 grow w-full h-full border mx-8 rounded-xl p-4 text-blue-700 space-y-4">
          <Link
            to="/profile"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">info</Icon>
            <div className="text-gray-500 font-bold">Completed</div>
          </Link>
          <Link
            to="/billing"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">payment</Icon>
            <div className="text-gray-500 font-bold">Ongoing</div>
          </Link>
          <Link
            to="/appearance"
            className="space-x-2 rounded p-2 hover:bg-gray-100 flex items-center "
          >
            <Icon fontSize="inherit">brush</Icon>
            <div className="text-gray-500 font-bold">Cancelled</div>
          </Link>
        </div>
        <div className="relative flex flex-col basis-9/12 grow w-full h-full">
          <div className="flex items-center space-x-2 rounded px-4 border w-full h-16 p-2 sticky top-[4.5rem] bg-white z-10 shadow">
            {/* .25 * 18 = 4.5 */} {/* top-18 */}
            <div className="font-bold ">Sort By</div>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                className="w-40"
                label="Sort By"
                value={sortType}
                onChange={(event) => {
                  setSortType(event.target.value);
                }}
              >
                <MenuItem value="">
                  <em>Select One</em>
                </MenuItem>
                {sortTypes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="font-bold ">Limit</div>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                className="w-40"
                label="Sort By"
                value={limit}
                onChange={(event) => {
                  setSortType(event.target.value);
                }}
              >
                <MenuItem value="">
                  <em>Select One</em>
                </MenuItem>
                {limits.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="my-2"></div>
          <div className="flex flex-col space-y-4">
            {user &&
              user?.orders?.map((item, index) => (
                <Link to={`/service/${item.service._id}`} key={index}>
                  <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                    <div className="flex w-full h-full justify-center border rounded-lg shadow-sm p-4 button bg-opacity-50  space-x-4">
                      <img
                        src={"/noimage.svg"}
                        alt=""
                        className="w-28 h-28 object-cover self-start"
                      />
                      <div className="w-full h-full flex flex-col justify-center space-y-1">
                        <h3 className="text-xl font-bold text-blue-600">
                          {item.service.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 space-x-1">
                          <Icon fontSize="inherit">check</Icon>
                          <div>
                            Status:{" "}
                            {(() => {
                              switch (item.service.status) {
                                case -1:
                                  return "Cancelled";
                                case 0:
                                  return "Ongoing";
                                case 1:
                                  return "Complete";
                              }
                            })()}
                          </div>
                        </div>{" "}
                        <div className="flex items-center text-sm text-gray-500 space-x-1">
                          <Icon fontSize="inherit">access_time</Icon>
                          <div>Appointment At: </div>
                          <div>
                            {new Date(
                              item.service.availabilityStartTime
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}{" "}
                            -{" "}
                            {new Date(
                              item.service.availabilityEndTime
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-1">
                          <Icon fontSize="inherit">place</Icon>
                          <div>{item.service.locations.join(". ")}</div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-1">
                          <Icon fontSize="inherit">access_time</Icon>
                          <div>Location: </div>
                          <div>
                            {new Date(item.service.createdAt).toLocaleString()}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="p-2 border border-gray-500 font-medium self-start flex items-center space-x-1 bg-white hover:bg-green-100 hover:shadow-lg rounded">
                            <Icon fontSize="inherit">launch</Icon>
                            <div>View</div>
                          </div>
                          <div className="p-2 border border-gray-500 text-white font-medium self-start flex items-center space-x-1 bg-red-600 hover:bg-green-400 hover:shadow-lg rounded">
                            <Icon fontSize="inherit">cancel</Icon>
                            <div>Cancel</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
