import React  from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import CountContext from "../../store/count-context";
import { Count, RegistrationDetails } from "../../Type";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { itemActions } from "../../store";
import Updatedetail from "./Updatedetail";

const Participationdetails = (props: { list: RegistrationDetails[] }) => {
  const ctx = useContext<Count>(CountContext);
  const detailsNavigate = useNavigate();
  const dispatch = useDispatch();
  

  const items = useSelector((state: RootState) => state.items);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "interested",
      headerName: "Interested",
      width: 110,
    },
    {
      field: "number",
      headerName: "No of Games",
      width: 110,
    },
    {
      field: "checked",
      headerName: "Games",
      width: 200,
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>

          <Button
            variant="contained"
            onClick={() => handleUpdate(params.row.id)}
          >
            Update
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = (id: number) => {
    dispatch(itemActions.removeItem(id));

    ctx.count = ctx.count - 1;
    //     const updatedRows = JSON.parse(localStorage.getItem('participantsarray') || '[]').filter((row : RegistrationDetails) => row.id !== id);

    // localStorage.setItem('participantsarray', JSON.stringify(updatedRows));

    detailsNavigate("/Details");
  };

  const handleUpdate = (id : number) => {

    dispatch(itemActions.updateItem(id));
  }

  const rows = items;

  return (
    <>
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

    

    <Updatedetail />
    </>
  );
};

export default Participationdetails;
