import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import CatCard from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import { ICategories } from '../interfaces/interfaces';

let categories: ICategories[] = [];
categories.push({id: 10, name: 'HTML'});
categories.push({id: 20, name: 'CSS'});
categories.push({id: 30, name: 'JavaScript'});

const Categories = () => {
  return (
    <div>
      <Box id='Box'><TextField id="categories_search" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container >
        <Grid item>
          {categories.map((item) => (
            <CatCard item={item.name}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { Categories };