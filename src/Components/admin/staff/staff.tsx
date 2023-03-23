import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';


const staff = ['Алина Ишемгулова', 'Анастасия Федорова', 'Анна Фролова',  'Татьяна Рамзина'];

const Staff = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <Grid container >
        <Grid item>
          {staff.map((item) => (
            <CatCard key={item}
                     item={item}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Staff };