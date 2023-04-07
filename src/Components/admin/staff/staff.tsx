import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import Card from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../styles/Box.css';
import Box from '@mui/material/Box';
import { IStaff } from '../interfaces/interfaces';


let staff: IStaff[] = [];
staff.push({id: 1, name: 'Алина Ишемгулова'});
staff.push({id: 2, name: 'Анастасия Федорова'});
staff.push({id: 3, name: 'Иван Бушуев'});
staff.push({id: 4, name: 'Никита Востряков'});
staff.push({id: 5, name: 'Виктория Волкова'});
staff.push({id: 6, name: 'Данил Звягинцев'});
staff.push({id: 7, name: 'Алексей Воскресенский'});
staff.push({id: 8, name: 'Виктор Громов'});

const Staff = () => {
  return (
    <div>
      <Box id='Box'><TextField id="staff_search" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container >
        <Grid item>
          {staff.map((item) => (
            <Card item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Staff };