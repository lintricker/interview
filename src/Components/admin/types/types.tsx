import TextField from '@mui/material/TextField';
import React from 'react';
import '../styles/Box.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ITypes } from '../interfaces/interfaces';
import { DiscardModal } from '../modals/discardModal';
import { EditModal } from '../modals/edit.modal';
import { AddModal } from '../modals/add.modal';
import '../styles/TableRow.css';

const types: ITypes[] = [{id: 65, name: 'Теория'}, {id: 13, name: 'Практика'}, {id: 27, name: 'Опыт'}];

const Types = () => {
  return (
    <div>
      <Box id='Box'><TextField id="questions_search" label="Поиск" variant="standard" />
      <AddModal />
      </Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {types.map((item) => (
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

export { Types };