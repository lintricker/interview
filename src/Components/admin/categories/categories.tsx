import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from './categoryCard/catCard';


const cats = ['HTML', 'JavaScrypt', 'CSS', 'HTTP'];


const Categories = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <Grid container>
        <Grid item>
          {cats.map((item) => (
            <CatCard item={item}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Categories };