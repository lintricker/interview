import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import Card from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import { IComplexity } from '../interfaces/interfaces';

let diffs: IComplexity[] = [];
diffs.push({id: 345, name: 'Junior'});
diffs.push({id: 657, name: 'Middle'});
diffs.push({id: 921, name: 'Senior'});

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
            <Card key={item.id}
                  item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Difficulties };