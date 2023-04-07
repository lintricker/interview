import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import Card from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../styles/Box.css';
import Box from '@mui/material/Box';
import { ITypes } from '../interfaces/interfaces';

let types: ITypes[] = [];
types.push({id: 65, name: 'Теория'});
types.push({id: 13, name: 'Практика'});
types.push({id: 27, name: 'Опыт'});

const Types = () => {
  return (
    <div>
      <Box id='Box'><TextField id="types_search" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container >
        <Grid item>
          {types.map((item) => (
            <Card 
                key={item.id}
                item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Types };