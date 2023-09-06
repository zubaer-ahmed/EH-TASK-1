import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";

const rows = [];

const Service = () => {
  const [users, setUsers] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    console.log(rowModesModel);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setUsers(users.filter((row) => row.id !== id));
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = users.find((row) => row.id === id);
    if (editedRow.isNew) {
      setUsers(users.filter((row) => row.id !== id));
    }
  };
  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setUsers(users.map((row) => (row.id == newRow.id ? updatedRow : row)));

    return updatedRow;
  };
  const columns = [
    {
      editable: true,
      field: "name",
      headerName: "Name",
      width: 350,
    },
    {
      editable: true,
      field: "cost",
      headerName: "Cost",
      width: 350,
    },
    { editable: true, field: "workers", headerName: "Worker", width: 350 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Add"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  React.useEffect(() => {
    (async () => {
      let fetchedJobs = await (
        await fetch("http://localhost:8000/api/services/getServices")
      ).json();
      setUsers(fetchedJobs.map((e, i) => ({ ...e, id: i })));
      console.log("users fetched");
    })();
    return () => {};
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full h-full p-4 overflow-auto">
      <h1 className="text-2xl font-bold my-2 text-gray-700">Services</h1>
      <div className="flex space-x-2 m-2">
        <div className=" material-button flex items-center">
          <AddIcon />
          <span>Add</span>
        </div>
        <div
          className="material-button"
          onClick={() => {
            setUsers(
              users.filter((row) => !rowSelectionModel.includes(row.id))
            );
          }}
        >
          <DeleteIcon />
          Delete
        </div>
      </div>
      <div className="h-80 w-full">
        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5]}
          editMode="row"
          checkboxSelection
          rowSelectionModel={rowSelectionModel}
          disableRowSelectionOnClick
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          processRowUpdate={processRowUpdate}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          slots={{
            toolbar: ({ setUsers, setRowModesModel }) => <></>,
          }}
          slotProps={{
            toolbar: { setUsers, setRowModesModel },
          }}
        />
      </div>{" "}
    </div>
    </div>
  );
};

export default Service;
