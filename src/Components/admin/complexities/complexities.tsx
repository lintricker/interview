import React from 'react';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import TextField from '@mui/material/TextField';
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
import { IComplexity } from '../interfaces/interfaces';
import '../styles/TableRow.css';

const complexities: IComplexity[] = [{id: 345, name: 'Junior'}, {id: 657, name: 'Middle'}, {id: 921, name: 'Senior'}];


const Complexities = () => {
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
          {complexities.map((item) => (
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

export { Complexities };