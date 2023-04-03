import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/catCard';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../styles/Box.css';
import Box from '@mui/material/Box';


const type = ['Теория', 'Практика', 'Опыт'];

const Types = () => {
  return (
    <div>
      <Box id='Box'><TextField id="standard-basic" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
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