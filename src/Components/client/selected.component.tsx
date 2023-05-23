import * as React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ICategories, IComplexity, IQuestions, ITypes } from '../admin/interfaces/interfaces';
import Grid from '@mui/joy/Grid';

import './Grid.css'


const questions: IQuestions[] = [
    {id: 1, questionText: 'Что такое HTML?', answerText: 'Язык гипертекстовой разметки текста', categoryID: 20, typeID: 65, complexityID: 345}, 
    {id: 2, questionText: 'Что такое JavaScrypt?', answerText: 'Язык программирования, который используют разработчики для создания интерактивных веб-страниц', categoryID: 10, typeID: 13, complexityID: 657}, 
    {id: 3, questionText: 'Что такое CSS?', answerText: 'Формальный язык описания внешнего вида страницы; каскадные таблицы стилей', categoryID: 10, typeID: 27, complexityID: 345}, 
    {id: 4, questionText: 'Что такое HTTP?', answerText: 'Широко распространённый протокол передачи данных, изначально предназначенный для передачи гипертекстовых документов (то есть документов, которые могут содержать ссылки, позволяющие организовать переход к другим документам)', categoryID: 30, typeID: 65, complexityID: 921}, 
    {id: 5, questionText: 'В чем разница между null и undefined?', answerText: 'null является определенным значением отсутствия объекта или отсутствия значения для которого внутри объекта определен ключ. undefined обозначает неопределенность, а именно то что контейнер был создан, но его значение не определили или свойство не было определено вовсе.', categoryID: 20, typeID: 65, complexityID: 921}, 
    {id: 6, questionText: 'Для чего используется оператор "&&"?', answerText: 'Логический оператор И ( && ) (конъюнкция) для набора операндов со значением типа Boolean будет true только в случае, если все операнды содержат значение true . В противном случае это будет false .', categoryID: 20, typeID: 27, complexityID: 657}, 
    {id: 7, questionText: 'Для чего используется оператор "||"?', answerText: 'Логический оператор ИЛИ ( || ) (дизъюнкция) для набора операндов истинен будет true только в случае, если один или несколько его операндов имеют значение true .', categoryID: 10, typeID: 27, complexityID: 921}];
    
    const types: ITypes[] = [{id: 65, name: 'Теория'}, {id: 13, name: 'Практика'}, {id: 27, name: 'Опыт'}];
    const complexities: IComplexity[] = [{id: 345, name: 'Junior'}, {id: 657, name: 'Middle'}, {id: 921, name: 'Senior'}];
    const categories: ICategories[]= [{id: 10, name: 'HTML'}, {id: 20, name: 'CSS'}, {id: 30, name: 'JavaScript'}];
    
    let selected:IQuestions[] =[]

    function selectedItems(item: IQuestions) {        
        selected.unshift(item)
        console.log(selected)
        return selected
    }

const SelectedComponent = () => {    
  return (  
    <div id='div'>
    <Grid container id="grid">
    {questions.map((item) => (
    <Card variant="outlined" sx={{ width: 320, mt: 2, mr: 2 }} onClick={e => selectedItems(item)}>     
      <CardOverflow>
        <Chip color="info"
              size="lg"
              variant="soft" sx={{mt: 2, mr: 2}}>{types.find(type => type.id === item.typeID)?.name}</Chip>
        <Chip color="warning"
              size="lg"
              variant="soft" sx={{mt: 2, mr: 2}}>{complexities.find(complex => complex.id === item.complexityID)?.name}</Chip>
        <Chip color="success"
              size="lg"
              variant="soft" sx={{mt: 2 }}>{categories.find(category => category.id === item.categoryID)?.name}</Chip>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
      {item.questionText}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
      {item.answerText}
      </Typography>   
    </Card>
    ))}
    <div ></div>
    </Grid>    
    </div>
  );
}

export {SelectedComponent};