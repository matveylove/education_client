
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStudents } from '../features/student/studentSlice';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'grade', headerName: 'Grade', width: 100 },
    { field: 'rank', headerName: 'Rank', width: 150 },
    { field: 'bonusPoints', headerName: 'Bonus Points', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
];


export default function Students() {

    const dispatch = useDispatch();
    const rows = useSelector((state) => state.students.students);
    let filteredData;
    if(rows !== null) {
        filteredData = rows.map(({ coursesNames, coursesCompleted, password, role, schoolId, ...rest }) => rest);
    }

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch])

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h1>Студенты</h1>
      {
        filteredData ? 
        <DataGrid
        rows={filteredData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /> :
      <CircularProgress />

      }
    </div>
  );
}
