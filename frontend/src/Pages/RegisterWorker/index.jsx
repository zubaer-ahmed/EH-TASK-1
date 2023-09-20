import { Button, CircularProgress, Icon, IconButton, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material";
import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import useFileUpload from "../../Hooks/useFileUpload";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useAuth } from "../../Hooks/useAuth";

export default function Page() {
  const navigate = useNavigate();
  const [tempUser, setTempUser] = React.useState({});
  const [files, setFiles] = React.useState([]);
  const [selfie, setSelfie] = React.useState(null);
  const inputRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const { user, setUser, fetchUser } = useAuth();

  if (!user) {
    navigate("/login");
    return;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`files`, file); // these fields will be parsed into req.files
      });
      formData.append(`selfie`, tempUser.selfie); // these fields will be parsed into req.files
      for (let key in tempUser) {
        formData.append(key, tempUser[key]); // these fields will be parsed as request body
      }
      let res = await (await fetch(import.meta.env.VITE_BASE_URL + "/api/users/registerWorker", {
        method: "POST",
        credentials: "include",
        body: formData
      })).text();
      console.log("result", res);
      await fetchUser();
    } catch (e) { console.log(e) }
    setLoading(false);

  }
  async function revokeApplication(event) {
    event.preventDefault();
    setLoading(true);
    let res = await (await fetch(import.meta.env.VITE_BASE_URL + "/api/users/revokeWorkerApplication", {
      method: "GET",
      credentials: "include",
    })).text();
    console.log("result", res);
    await fetchUser();
    setLoading(false);
  }

  // const [file, error, handleFileChange] = useFileUpload(null);
  const docTypes = ["NID", "Passport", "Driving License", "Voter ID", "Birth Certificate", "Other"];
  const steps = ['Fill in Details', 'Review in Progress', 'Verified'];

  return (
    <div className="flex flex-col bg-white h-full w-full items-center py-12">
      <div className="flex flex-col w-full max-w-lg p-4">
        <Stepper activeStep={user.verificationStatus + 1} >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {user.verificationStatus == 0 && (
          <div className="flex flex-col w-full ">
            <div className="my-4"></div>
            <div className="">
              <label className="block mb-2 text-sm font-bold text-gray-900">Type of Document</label>
              <Select fullWidth displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                value={tempUser.documentType || ""} onChange={(event) => setTempUser({ ...tempUser, documentType: event.target.value })}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {docTypes.map((option, index) => (
                  <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
              </Select>
              <div className="my-2"></div>
            </div>
            <input type='file' className="hidden" multiple
              onChange={(evt) => { window.uploadAwaiter(evt.target.files) }}
              ref={inputRef} />
            <label className="block mb-2 text-sm font-bold text-gray-900">Documents</label>
            <div className="flex  flex-wrap justify-center">
              {(
                files.length > 0 && files.map((file, index) => (
                  <div className="flex flex-col" key={index}>
                    <div className="self-center w-60 h-40 ">
                      <img id="imagePreview" className="w-full h-full object-contain border shadow-lg" src={file ? URL.createObjectURL(file) : "/noimage.svg"} alt="Image Preview" />
                    </div>
                    <div className="flex justify-center h-12">
                      <IconButton onClick={
                        () => { setFiles(files.filter((f) => f !== file)); }
                      }>
                        <Icon>delete</Icon>
                      </IconButton>
                    </div>
                  </div>
                ))
              )}


              <div className="flex-flex-col">
                <div className="self-center w-60 h-40 flex flex-col items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={async () => {
                    inputRef.current?.click(); setFiles([...files,
                    ...(await new Promise(resolve => { window.uploadAwaiter = resolve; }))])
                  }}>
                  <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">Select a file</span>
                </div>
                <div className="h-12"></div>
              </div>
              <div className="my-2 "></div>

            </div>
            <div className="">
              <label className="block mb-2 text-sm font-bold text-gray-900">Name on Document</label>
              <TextField fullWidth variant="outlined" value={tempUser.name} onChange={(event) => setTempUser({ ...tempUser, name: event.target.value })} />
              <div className="my-2"></div>
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-bold text-gray-900">Date of Birth</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker orientation="landscape" defaultValue={tempUser.dateOfBirth || dayjs(new Date())} />
              </LocalizationProvider>
              <div className="my-2"></div>
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-bold text-gray-900">Selfie</label>
              {
                selfie && (
                  <>
                    <div className="self-center w-64 h-40 ">
                      <img id="imagePreview" className="w-full h-full object-contain border shadow-lg" src={selfie ? URL.createObjectURL(selfie) : "/noimage.svg"} alt="Image Preview" />
                    </div>
                    <div className="flex justify-center p-2">
                      <IconButton onClick={() => setSelfie(null)}>
                        <Icon>delete</Icon>
                      </IconButton>
                    </div>
                  </>
                )
              }

              {!selfie && (
                <div className="self-center w-64 h-40 flex flex-col items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={async () => {
                    inputRef.current?.click(); setSelfie((await new Promise(resolve => { window.uploadAwaiter = resolve; }))[0])
                  }}>            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">Select a file</span>
                </div>
              )}
              <div className="my-2"></div>
            </div>


            <div className="relative flex flex-col w-full">
              <Button
                variant="contained"
                disabled={loading}
                onClick={handleSubmit}>
                Submit
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
            </div>
          </div>
        )
          || user.verificationStatus == 1 &&
          (
            <div className="flex flex-col w-full ">
              <div className="text-4xl text-center text-blue-500 p-6">Your Application is under review. You will be notified through email once it is approved</div>
              <div className="relative flex flex-col w-full">
                <Button
                  variant="contained"
                  disabled={loading}
                  onClick={revokeApplication}>
                  Revoke Application
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
              </div>
            </div>
          )}

      </div>
    </div >
  );
};
