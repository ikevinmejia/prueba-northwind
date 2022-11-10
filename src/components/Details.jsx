import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import { Ring } from '@uiball/loaders'

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 130 },
];

const cities = JSON.parse(sessionStorage.getItem("data"));
const id = JSON.parse(sessionStorage.getItem("moreData"));

const Details = () => {
    //  const [details, setDetails] = useState('')

  const { departments } = useContext(Context);
  console.log(departments);


  return (
    <div>

        {
            cities ?
        <div className="mt-4">
          <h2 className="font-semibold text-2xl mb-4">{id.name}</h2>
          <p className="font-medium mb-4">{id.description.description}</p>
          <h3 className="font-semibold text-2xl mb-4">Ciudad</h3>
          <Box
            style={{
                height: 400,
                width: "100%",
                margin: "0 auto",
                display: "table",
                tableLayout: "fixed",
            }}
            >
            <DataGrid
              rows={cities}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
        </div>
        : <Ring
            size={40}
            lineWeight={5}
            speed={2}
            color="black"
           />
        }
    </div>
  );
};

export default Details;
