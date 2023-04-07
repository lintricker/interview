import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CatCard from '../card/card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import '../styles/Box.css';
import { IQuestions } from '../interfaces/interfaces';

let questions: IQuestions[] = [];
questions.push({id: 1, questionText: 'Что такое HTML?'});
questions.push({id: 2, questionText: 'Что такое JavaScrypt?'});
questions.push({id: 3, questionText: 'Что такое CSS?'});
questions.push({id: 4, questionText: 'Что такое HTTP?'});
questions.push({id: 5, questionText: 'В чем разница между null и undefined?'});
questions.push({id: 6, questionText: 'Для чего используется оператор "&&"?'});
questions.push({id: 7, questionText: 'Для чего используется оператор "||"?'});
questions.push({id: 8, questionText: 'Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?'});

const Questions = () => {
  return (
    <div>
      <Box id='Box'><TextField id="questions_search" label="Поиск" variant="standard" />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab></Box>
      <Grid container>
        <Grid item>
          {questions.map((item) => (
            <CatCard item={item.questionText}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export {Questions};