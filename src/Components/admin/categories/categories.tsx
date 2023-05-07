import React from 'react';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import TextField from '@mui/material/TextField';
import '../styles/Box.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DiscardModal } from '../modals/discardModal';
import { EditModal } from '../modals/edit.modal';
import { AddModal } from '../modals/add.modal';
import { ICategories } from '../interfaces/interfaces';
import '../styles/TableRow.css';

const categories: ICategories[]= [{id: 10, name: 'HTML'}, {id: 20, name: 'CSS'}, {id: 30, name: 'JavaScript'}];


const Categories = () => {
  return (
    <div>
      <Box id='Box'><TextField id="questions_search" label="Поиск" variant="standard" />
      <AddModal />
      </Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontFamily: 'Roboto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((item) => (
            <TableRow
              id='tableRow'
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <div>
                <EditModal />
                <DiscardModal />
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  );
}

export { Categories };