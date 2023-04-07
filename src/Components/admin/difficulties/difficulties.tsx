import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import { IDifficulties } from '../interfaces/interfaces';

let diffs: IDifficulties[] = [];
diffs.push({name: 'Junior'});
diffs.push({name: 'Middle'});
diffs.push({name: 'Senior'});

const Difficulties = () => {
  return (
    <div>
      <Box id='Box'><TextField id="difficulties_search" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container >
        <Grid item>
          {diffs.map((item) => (
            <CatCard item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Difficulties };