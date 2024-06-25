
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import CountContext from "../../store/count-context";
import { Count,RegistrationDetails } from "../../Type";
import { useNavigate } from 'react-router-dom';




const Participationdetails = (props : {list : RegistrationDetails[]}  ) => {

  const ctx = useContext<Count>(CountContext);
  const detailsNavigate = useNavigate();

  

 

    const columns: GridColDef<(typeof rows)[number]>[] = [

        { field: 'id', headerName: 'ID', width: 90 },
 
        {
          field: 'name',
          headerName: 'Full Name',
          width: 150,
         
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable : true
        
         
        },
        {
          field: 'interested',
          headerName: 'Interested',
          width: 110,
      
        },
        {
          field: 'number',
          headerName: 'No of Games',
          width: 110,
         
        },
        {
          field: 'checked',
          headerName: 'Games',
          width: 200,
         
        },

        {
          field: 'action',
          headerName: 'Action',
          width: 200,
          renderCell: (params) => (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          ),
        },
      ];

      const handleDelete = (id: number) => {

        ctx.count = ctx.count - 1;
        const updatedRows = JSON.parse(localStorage.getItem('participantsarray') || '[]').filter((row : RegistrationDetails) => row.id !== id);
   
    localStorage.setItem('participantsarray', JSON.stringify(updatedRows));
   
    detailsNavigate('/Details');
    
        
      };
      
      const rows = JSON.parse(localStorage.getItem('participantsarray') || '[]')

  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
  );
}

export default Participationdetails