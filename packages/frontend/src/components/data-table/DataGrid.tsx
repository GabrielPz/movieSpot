import React, { useEffect, useRef } from "react";
import {
  GridOverlay,
  DataGrid as MuiDataGrid,
  DataGridProps,
} from "@mui/x-data-grid";
import { CircularProgress, Stack, Typography } from "@mui/material";

const DataGrid: React.FC<
  DataGridProps & {
    ErrorOverlay?: React.ReactNode;
    title?: string;
    ActionButton?: React.ReactNode;
  }
> = ({ sx, autoHeight = true, ErrorOverlay, title, ActionButton, ...rest }) => {
  const dataGridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (dataGridRef.current) {
        dataGridRef.current.style.width = "100%";
        dataGridRef.current.style.height = "100%";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      ref={dataGridRef}
    >
      {title && (
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            {title}
          </Typography>
          {ActionButton}
        </Stack>
      )}
      <div style={{ flexGrow: 1 }}>
        <MuiDataGrid
          disableColumnMenu
          disableVirtualization
          autoHeight={autoHeight}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          {...rest}
          sx={{
            border: "none",
            "& .MuiDataGrid-withBorder": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderTop: "2px solid",
              borderBottom: "none",
              borderColor: "#e50813",
              backgroundColor: "white",
              color: "#212121",
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "&.MuiDataGrid-cell": {
              borderBottom: "none",
              padding: "16px",
              "&:focus": {
                outline: "none",
              },
            },
            "& .MuiDataGrid-row": {
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
              cursor: "pointer",
              color: "#7a7a7a",
              "&:nth-of-type(odd)": {
                backgroundColor: "#F6F6F7",
              },
              "&:nth-of-type(even)": {
                backgroundColor: "#FFF",
              },
            },
            "& .MuiDataGrid-row:hover": {
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
              color: "#7a7a7a",
              "&:nth-of-type(odd)": {
                backgroundColor: "rgb(228 240 246)",
              },
              "&:nth-of-type(even)": {
                backgroundColor: "rgb(228 240 246)",
              },
            },
            "&.MuiDataGrid-virtualScroller": {
              overflowX: "scroll",
              "&::-webkit-scrollbar": {
                WebkitAppearance: "none",
                width: "12px",
                height: "12px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "8px",
                border: "3px solid white",
                backgroundColor: "rgba(0, 0, 0, .5)",
                boxShadow: "0 0 1px rgba(255, 255, 255, .5)",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(0, 0, 0, .1)",
                borderRadius: "8px",
              },
            },
            '& .MuiDataGrid-row .MuiDataGrid-cell[data-field="actions"]': {
              position: "sticky",
              right: 0,
              backgroundColor: "inherit",
              zIndex: 1,
              borderLeft: "1px solid #ddd", // Borda para separar visualmente
            },
            '& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader[data-field="actions"]':
              {
                position: "sticky",
                right: 0,
                backgroundColor: "inherit",
                zIndex: 2,
                borderLeft: "1px solid #ddd",
              },
            ...sx,
          }}
        />
      </div>
    </div>
  );
};

export default DataGrid;
