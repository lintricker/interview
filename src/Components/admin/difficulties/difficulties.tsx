import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';


const diffs = ['Junior', 'Middle', 'Hard'];

const Difficulties = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
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