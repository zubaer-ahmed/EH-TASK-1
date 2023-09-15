import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Link, Routes, Route, useNavigate } from "react-router-dom";
import * as React from "react";
import { useParams } from "react-router-dom";
import { Button, CircularProgress, Icon } from "@mui/material";
import { useHelpers } from "../../Hooks/useHelpers";

export default () => {
  const { getLocation } = useHelpers();
  const [serviceCategory, setServiceCategory] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [job, setJob] = React.useState({
    title: "",
    description: "",
    location: "",
    date: dayjs(new Date()),
    time: dayjs(new Date()),
    category: "",
  });
  const services = ["Electrician", "Plumber", "Mechanic"];
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [currentForm, setCurrentForm] = React.useState(0);

  async function submitForm() {
    setTimeout(async () => {
      console.log(job);
      let res = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/services/createService",
        {
          method: "POST",
          credentials: "include", // Required to allow setting of imcomming cookies
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...job,
            appointmentDate: job.appointmentDate?.toISOString(),
            locations: [job.location]
          }),
        }
      );
    }, 100);
  }
  return (
    <div className="flex py-8 items-center  bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        {!loaded && (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:h-auto md:w-1/2">
              {/* left side */}
              <div class="flex flex-col items-center justify-center p-12">
                <h3 className="py-8 text-xl font-bold text-blue-600">
                  Post Service
                </h3>
                <div class="mx-auto w-full max-w-[550px] bg-white">

                  <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div class="flex items-center justify-between text-gray-700">
                      <span class="truncate pr-3 text-base font-medium ">
                        photo-1.png
                      </span>
                      <div className="cursor-pointer">
                        <Icon fontSize="inherit">delete</Icon>
                      </div>
                    </div>
                  </div>  <form>
                    <div class="mb-6 pt-4">
                      <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                        Upload Photos
                      </label>

                      <div class="mb-8">
                        <input type="file" name="file" id="file" class="sr-only" />
                        <label
                          for="file"
                          class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <div>
                            <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                              Drop files here
                            </span>
                            <span class="mb-2 block text-base font-medium text-[#6B7280]">
                              Or
                            </span>
                            <span
                              class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                            >
                              Browse
                            </span>
                          </div>
                        </label>
                      </div>




                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">

                <div className="w-full bg-gray-200 rounded-full">
                  <div className=" w-1/3 p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full ">
                    Step 1
                  </div>
                </div>
                <div
                  className={`form-1 flex flex-col ${currentForm != 0 && "hidden"
                    }`}
                >
                  <div className="mt-4 mb-4">
                    <label className="text-gray-500 font-medium block text-sm">
                      Title
                    </label>
                    <input
                      value={job.title}
                      onChange={(event) => {
                        setJob({ ...job, title: event.target.value });
                      }}
                      type="text"
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="Title of the Service"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-500 font-medium block mb-2 text-sm">
                      Description
                    </label>
                    <textarea
                      value={job.description}
                      onChange={(event) => {
                        setJob({ ...job, description: event.target.value });
                      }}
                      type="text"
                      rows="3"
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="Description of the Service"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-500 font-medium block text-sm">
                      Job Location
                    </label>{" "}
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 flex items-center pr-1 right-0">
                        <div
                          className="button p-2 rounded-full cursor-pointer"
                          onClick={async () => {
                            const location = await getLocation();
                            setJob({
                              ...job,
                              location:
                                "lat: " +
                                location.latitude +
                                " long: " +
                                +location.longitude,
                            });
                          }}
                        >
                          <Icon fontSize="inherit">my_location</Icon>
                        </div>
                      </div>
                      <input
                        value={job.location}
                        onChange={(event) => {
                          setJob({ ...job, location: event.target.value });
                        }}
                        type="text"
                        id="simple-search"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-10 p-2.5  "
                        placeholder="Location for the Job"
                        required
                      />
                    </div>
                  </div>
                  <label className="text-gray-500 font-medium block mb-2 text-sm">
                    {" "}
                    Appointment Time{" "}
                  </label>
                  <div className="mb-4 space-y-4">
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale="bn"
                    >
                      <DatePicker
                        className="w-full"
                        label="Controlled picker"
                        value={job.date}
                        onChange={(newValue) => {
                          setJob({
                            ...job,
                            date: newValue,
                            appointmentDate: new Date(
                              newValue.$d?.toDateString() +
                              " " +
                              job.time?.$d?.toTimeString()
                            ),
                          });
                        }}
                      />

                      <TimePicker
                        value={job.time}
                        onChange={(newValue) => {
                          setJob({
                            ...job,
                            time: newValue,
                            appointmentDate: new Date(
                              job.date?.$d?.toDateString() +
                              " " +
                              newValue.$d?.toTimeString()
                            ),
                          });
                        }}
                        className="w-full"
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="mb-4">
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Job Category
                      </InputLabel>
                      <Select
                        className="w-full"
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Job Category"
                        value={job.category}
                        onChange={(event) => {
                          setJob({ ...job, category: event.target.value });
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {services.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-500 font-medium block mb-2 text-sm">
                      Contact Number
                    </label>
                    <input
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="Contact Number"
                      type="number"
                    />
                  </div>
                </div>

                {/* form 2 */}
                <div
                  className={`form-2 flex flex-col ${currentForm != 1 && "hidden"
                    }`}
                >
                  <div className="mt-4 mb-4">
                    <label className="text-gray-500 font-medium block text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-500 font-medium block mb-2 text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-500 font-medium block mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      className=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                      placeholder="Phone Number"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex">
                  <button
                    className={`${currentForm == 0 && "hidden"
                      } px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none `}
                    href="#"
                    onClick={() => {
                      setCurrentForm(currentForm - 1);
                    }}
                  >
                    Previous
                  </button>
                  <div className="grow"></div>
                  {/* <button
                  className=" px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none "
                  href="#"
                  onClick={() => {
                    if (currentForm == 0) {
                      submitForm();
                      return;
                    }
                    setCurrentForm(currentForm + 1);
                  }}
                >
                  POST
                </button> */}
                  <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                      variant="contained"
                      disabled={loading}
                      onClick={async (e) => {
                        e.preventDefault();
                        if (currentForm == 0) {
                          setLoading(true);
                          await submitForm();
                          setLoading(false);
                          setLoaded(true);
                          return;
                        }
                        setCurrentForm(currentForm + 1);
                      }}                  >
                      POST
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                </div>
              </div>
            </div>
          </div>) || (
            <div className="flex flex-col items-center justify-center h-96 ">
              <h3 className="py-8 text-xl font-bold text-blue-600">
                Posted Service Successfully!
              </h3>
            </div>
          )}
      </div>
    </div>
  );
};
