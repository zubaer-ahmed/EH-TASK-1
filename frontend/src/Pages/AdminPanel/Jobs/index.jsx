import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "title", headerName: "Column 1", width: 150 },
  { field: "description", headerName: "Column 2", width: 150 },
  { field: "salary", headerName: "Column 2", width: 150 },
  { field: "location", headerName: "Column 2", width: 150 },
];

const Service = () => {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let fetchedJobs = await (
        await fetch("http://localhost:8000/api/jobs/getJobs")
      ).json();
      setJobs(fetchedJobs);
      return () => {};
    })();
  });
  return (
    <div className="flex flex-col w-full h-full p-4">
      <h1 className="text-2xl font-bold my-2 text-gray-700">Services</h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>{" "}
    </div>
  );
};

export default Service;
