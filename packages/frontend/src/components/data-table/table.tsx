import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TableHead } from '@mui/material';
import { TableProps } from '@/entities/table-props';
import EditIcon from '@mui/icons-material/Edit';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}


function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
    
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export function MainTable({label, data, onNewPagechange, totalCount, onUpdateClicked, pageNum}: TableProps) {
  const [page, setPage] = React.useState(pageNum - 1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalCount) : 0;
  const handleChangePage: any = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    const pageToSend = newPage + 1;
    onNewPagechange(pageToSend.toString())
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredLabels = label.filter(item => item.key !== 'actions');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {label.map((item) => (
              <TableCell align="left" sx={{color: 'white'}}>{item.label}</TableCell>
            ))}
            {/* <TableCell align="left" sx={{color: 'white'}}>Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {(data).map((row, index) => (
            <TableRow key={index}>
            {filteredLabels.map((col) => (
              <TableCell key={`${index}-${col.key}`} align="left">
                {Array.isArray(row[col.key]) ? row[col.key].map((item: any) => typeof item === 'object' ? item.name || 'N/A' : item).join(', ') :
                typeof row[col.key] === 'boolean' ? (row[col.key] ? 'Yes' : 'No') : row[col.key] ?? 'N/A'}
              </TableCell>
            ))}
            <TableCell align="left">
              <IconButton aria-label="edit" onClick={(e) => {onUpdateClicked(row.projectId || row.platformId || row.profileId, row)}}>
                <EditIcon color='info'/>
              </IconButton>
            </TableCell>
          </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, { label: 'All', value: -1 }]}
              // rowsPerPageOptions={[5, { label: 'All', value: -1 }]}
              colSpan={3}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={(e) => TablePaginationActions(e)}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
