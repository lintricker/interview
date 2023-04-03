import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../styles/Box.css';
import Box from '@mui/material/Box';


const staff = ['Алина Ишемгулова', 'Анастасия Федорова', 'Анна Фролова',  'Татьяна Рамзина'];

const Staff = () => {
  return (
    <div>
      <Box id='Box'><TextField id="standard-basic" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
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