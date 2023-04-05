import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../styles/Box.css';
import Box from '@mui/material/Box';
import { ITypes } from '../interfaces/interfaces';

let types: ITypes[] = [];
types.push({name: 'Теория'});
types.push({name: 'Практика'});
types.push({name: 'Опыт'});

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
            <CatCard item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Types };