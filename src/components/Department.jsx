import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import { urlCityByDepartment, urlDepartment } from '../helpers/URL';
import { useEffect } from 'react';
import { buildData } from '../helpers/data';
import { getData } from '../helpers/getData';
import { Ring } from '@uiball/loaders'

const handleClick = async(event, cellValues) => {
    console.log(cellValues.row);
    const resp = await getData(`${urlCityByDepartment}${cellValues.row.id}`)
    sessionStorage.setItem('data', JSON.stringify(resp))
    sessionStorage.setItem('moreData', JSON.stringify(cellValues.row))

}

const handleCellClick = (param, event) => {
    event.stopPropagation();
}

let DATA = [];
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'ciudades', headerName: '# Ciudades', width: 130 },
    {
        field: 'Buscar',
        width: 100,
        renderCell: (cellValues) => {
            return (
                <IconButton
                    variant='contained'
                    color='primary'
                    onClick={(event) => {
                        handleClick(event, cellValues)
                    }}
                >
                    <SearchIcon/>
                </IconButton>
            )
        }
    }
  ];

const Department = () => {

    const {departments, setDepartments} = useContext(Context)

    useEffect( () => {
        const awaitData = async () => {
            buildData(DATA,urlDepartment, urlCityByDepartment, setDepartments)
        }
        awaitData()
    }, []);

  return (
    <div className='w-full overflow-auto mt-5'>
        <Box style={{ height: 500, width: '100%', margin: '0 auto', display: 'table', tableLayout: 'fixed' }}>
            {
                departments ?
            <DataGrid
                rows={departments}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                onCellClick={handleCellClick}
            />
            :

            <Ring
             size={40}
             lineWeight={5}
             speed={2}
             color="black"
            />
            }
    </Box>
    </div>
  )
}

export default Department