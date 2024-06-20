import { RegistrationDetails } from "../../Type";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';



const Participationdetails = (props : {list : RegistrationDetails[]}  ) => {

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
      ];
      
      const rows = props.list

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
        
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Participationdetails