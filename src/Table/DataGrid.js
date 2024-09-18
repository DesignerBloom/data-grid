import * as React from 'react';
//import { DataGrid} from '@mui/x-data-grid';
import { 
    DataGridPremium, 
    GridToolbar, 
    useGridApiContext,
    GRID_DATE_COL_DEF,
    GRID_DATETIME_COL_DEF,
    getGridDateOperators, 
} from '@mui/x-data-grid-premium';

const rows = [
    { id: 1, col1: "20/08/2024", col2: "Mickey Mouse", col3:"1111111", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 2, col1: "20/08/2024", col2: "Tom Jerry", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 3, col1: "20/08/2024", col2: "Donald Duck", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:""},
    { id: 4, col1: "20/08/2024", col2: "Super man", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 5, col1: "20/08/2024", col2: "Bat man", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 6, col1: "20/08/2024", col2: "Test Case 1", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 7, col1: "20/08/2024", col2: "Mickey Mouse", col3:"2222222", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 8, col1: "20/08/2024", col2: "Test Case 2", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 9, col1: "20/08/2024", col2: "Donald Duck", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:""},
    { id: 10, col1: "20/08/2024", col2: "Mickey Mouse", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
    { id: 11, col1: "20/08/2024", col2: "Test Case 3", col3:"0000000000", col4:"12/12/2000", col5:"Bloomsbury General Hospital", col6:"Test working dio", col7:"Consultant", col8:"Not-Urgent", col9:"New Referral", col10:"Accepted Immediate", col11:"" },
  ];
  
  const columns = [
    { field: "col1", headerName: "Date/Time", width: 150, editable: true, },
    { field: "col2", headerName: "Patient Name", width: 150, editable: true, },
    { field: "col3", headerName: "NHS Number", width: 150, editable: true, },
    { field: "col4", headerName: "DOB", width: 150, editable: true, },
    { field: "col5", headerName: "Referring Hospital", width: 150, editable: true, },
    { field: "col6", headerName: "Diagnosis", width: 150, editable: true, },
    { field: "col7", headerName: "Accepted by", width: 150, editable: true, },
    { field: "col8", headerName: "Urgency", width: 150, editable: true, },
    { field: "col9", headerName: "Status", width: 150, editable: true, },
    { field: "col10", headerName: "Outcome", width: 150, editable: true, },
    { field: "col11", headerName: "referTrak", width: 150, editable: true, },
  ];

  export default function Grid() {
    return (
      <div style={{ height: 500, width: '100%' }}>
        <DataGridPremium 
            rows={rows} 
            columns={columns} 
            slots={{
                toolbar: GridToolbar,
              }}
              pagination
              autoPageSize
        />
      </div>
    );
  }