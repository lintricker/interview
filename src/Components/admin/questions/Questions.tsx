import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CatCard from '../card/catCard';

const quests = ['Что такое HTML?', 'Что такое JavaScrypt?', 'Что такое CSS?', 'Что такое HTTP?', 'В чем разница между null и undefined?', 'Для чего используется оператор "&&"?', 'Для чего используется оператор "||"?','Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?'];

const Questions = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <Grid container>
        <Grid item>
          {quests.map((item) => (
            <CatCard key={item}
                     item={item}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export {Questions};