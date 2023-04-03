import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import '../styles/Box.css';


const diffs = ['Junior', 'Middle', 'Hard'];

const Difficulties = () => {
  return (
    <div>
      <Box id='Box'><TextField id="standard-basic" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container >
        <Grid item>
          {diffs.map((item) => (
            <CatCard key={item}
                     item={item}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Difficulties };