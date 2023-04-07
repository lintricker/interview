import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/Box.css';
import { ICategories, IComplexity, IQuestions, ITypes } from '../interfaces/interfaces';
import { DiscardModal } from '../modals/discardModal';
import { EditQuestionModal } from '../modals/questionModals/editQuestionModal';
import { AddQuestionModal } from '../modals/questionModals/addQuestionModal';

let questions: IQuestions[] = [];
questions.push({id: 1, questionText: 'Что такое HTML?', answerText: 'Ответ1', categoryID: 20, typeID: 65, complexityID: 345});
questions.push({id: 2, questionText: 'Что такое JavaScrypt?', answerText: 'Ответ2', categoryID: 10, typeID: 13, complexityID: 657});
questions.push({id: 3, questionText: 'Что такое CSS?', answerText: 'Ответ3', categoryID: 10, typeID: 27, complexityID: 345});
questions.push({id: 4, questionText: 'Что такое HTTP?', answerText: 'Ответ4', categoryID: 30, typeID: 65, complexityID: 921});
questions.push({id: 5, questionText: 'В чем разница между null и undefined?', answerText: 'Ответ5', categoryID: 20, typeID: 65, complexityID: 921});
questions.push({id: 6, questionText: 'Для чего используется оператор "&&"?', answerText: 'Ответ6', categoryID: 20, typeID: 27, complexityID: 657});
questions.push({id: 7, questionText: 'Для чего используется оператор "||"?', answerText: 'Ответ7', categoryID: 10, typeID: 27, complexityID: 921});
questions.push({id: 8, questionText: 'Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?', answerText: 'Ответ8', categoryID: 30, typeID: 13, complexityID: 345});

let types: ITypes[] = [];
types.push({id: 65, name: 'Теория'});
types.push({id: 13, name: 'Практика'});
types.push({id: 27, name: 'Опыт'});

let complexities: IComplexity[] = [];
complexities.push({id: 345, name: 'Junior'});
complexities.push({id: 657, name: 'Middle'});
complexities.push({id: 921, name: 'Senior'});

let categories: ICategories[] = [];
categories.push({id: 10, name: 'HTML'});
categories.push({id: 20, name: 'CSS'});
categories.push({id: 30, name: 'JavaScript'});

const Questions = () => {
  return (
    <div>
      <Box id='Box'><TextField id="questions_search" label="Поиск" variant="standard" />
      <AddQuestionModal />
      </Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Вопрос</TableCell>
            <TableCell align="right">Ответ</TableCell>
            <TableCell align="right">Тип</TableCell>
            <TableCell align="right">Сложность</TableCell>
            <TableCell align="right">Категория</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.questionText}
              </TableCell>
              <TableCell align="right">{item.answerText}</TableCell>
              <TableCell align="right">{types.find(type => type.id === item.typeID)?.name}</TableCell>
              <TableCell align="right">{complexities.find(complex => complex.id === item.complexityID)?.name}</TableCell>
              <TableCell align="right">{categories.find(category => category.id === item.categoryID)?.name}</TableCell>
              <EditQuestionModal />
              <DiscardModal />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </div>
  );
}

export {Questions};