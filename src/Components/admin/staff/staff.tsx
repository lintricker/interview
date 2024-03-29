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
import { IStaff } from '../interfaces/interfaces';
import '../styles/TableRow.css';

const staff: IStaff[] = [
  {id: 1, name: 'Алина Ишемгулова'}, 
  {id: 2, name: 'Анастасия Федорова'}, 
  {id: 3, name: 'Иван Бушуев'}, 
  {id: 4, name: 'Никита Востряков'}, 
  {id: 5, name: 'Виктория Волкова'},
  {id: 6, name: 'Данил Звягинцев'},
  {id: 7, name: 'Алексей Воскресенский'},
  {id: 8, name: 'Виктор Громов'},
];


const Staff = () => {
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
          {staff.map((item) => (
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

export { Staff };