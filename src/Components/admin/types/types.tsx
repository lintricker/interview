import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';


const type = ['Теория', 'Практика', 'Опыт'];

const Types = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <Grid container >
        <Grid item>
          {type.map((item) => (
            <CatCard key={item}
                     item={item}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Types };