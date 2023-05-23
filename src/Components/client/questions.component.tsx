import * as React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ICategories, IComplexity, IQuestions, ITypes } from '../admin/interfaces/interfaces';
import Grid from '@mui/joy/Grid';
import './Grid.css'
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { SelectedComponent } from './selected.component';


const questions: IQuestions[] = [
    {id: 1, questionText: 'Что такое HTML?', answerText: 'Язык гипертекстовой разметки текста', categoryID: 20, typeID: 65, complexityID: 345}, 
    {id: 2, questionText: 'Что такое JavaScrypt?', answerText: 'Язык программирования, который используют разработчики для создания интерактивных веб-страниц', categoryID: 10, typeID: 13, complexityID: 657}, 
    {id: 3, questionText: 'Что такое CSS?', answerText: 'Формальный язык описания внешнего вида страницы; каскадные таблицы стилей', categoryID: 10, typeID: 27, complexityID: 345}, 
    {id: 4, questionText: 'Что такое HTTP?', answerText: 'Широко распространённый протокол передачи данных, изначально предназначенный для передачи гипертекстовых документов (то есть документов, которые могут содержать ссылки, позволяющие организовать переход к другим документам)', categoryID: 30, typeID: 65, complexityID: 921}, 
    {id: 5, questionText: 'В чем разница между null и undefined?', answerText: 'null является определенным значением отсутствия объекта или отсутствия значения для которого внутри объекта определен ключ. undefined обозначает неопределенность, а именно то что контейнер был создан, но его значение не определили или свойство не было определено вовсе.', categoryID: 20, typeID: 65, complexityID: 921}, 
    {id: 6, questionText: 'Для чего используется оператор "&&"?', answerText: 'Логический оператор И ( && ) (конъюнкция) для набора операндов со значением типа Boolean будет true только в случае, если все операнды содержат значение true . В противном случае это будет false .', categoryID: 20, typeID: 27, complexityID: 657}, 
    {id: 7, questionText: 'Для чего используется оператор "||"?', answerText: 'Логический оператор ИЛИ ( || ) (дизъюнкция) для набора операндов истинен будет true только в случае, если один или несколько его операндов имеют значение true .', categoryID: 10, typeID: 27, complexityID: 921}, 
    {id: 8, questionText: 'Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?', answerText: 'Согласно MDN оператор "+" действительно является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, которое является числом.', categoryID: 30, typeID: 13, complexityID: 345},
    {id: 9, questionText: 'Что такое DOM?', answerText: 'DOM или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML и XML документами. Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, действительно большой объект, основанный на документе — DOM. DOM представляет собой древовидную структуру (дерево документа). DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов.', categoryID: 20, typeID: 65, complexityID: 345}, 
    {id: 10, questionText: 'Что такое распространение события (Event Propagation)?', answerText: 'Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие «распространяется» от объекта Window до вызвавшего его элемента (event.target). При этом событие последовательно пронизывает (затрагивает) всех предков целевого элемента.', categoryID: 10, typeID: 13, complexityID: 657}, 
    {id: 11, questionText: 'Что такое всплытие события?', answerText: 'Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается еще выше, к родителю родителя элемента, пока не достигает объекта Window.', categoryID: 10, typeID: 27, complexityID: 345}, 
    {id: 12, questionText: 'В чем разница между методами event.preventDefault() и event.stopPropagation()?', answerText: 'Метод event.preventDefault() отключает поведение элемента по умолчанию. Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit). Если использовать его в contextmenu, то контекстное меню будет отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании музыкального/видео плеера или текстового редактора — прим. пер.). Метод event.stopPropagation() отключает распространение события (его всплытие или погружение).', categoryID: 30, typeID: 65, complexityID: 921}, 
    {id: 13, questionText: 'В чем разница между операторами "==" и "==="?', answerText: 'Разница между оператором "==" (абстрактное или нестрогое равенство) и оператором "===" (строгое равенство) состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coersion), а второй — без такого преобразования.', categoryID: 20, typeID: 65, complexityID: 921}, 
    {id: 14, questionText: 'Почему результатом сравнения двух похожих объектов является false?', answerText: 'В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению. Объекты — по ссылке или адресу в памяти, где хранится переменная. Вот почему первый console.log возвращает false, а второй — true. Переменные «a» и «c» ссылаются на один объект, а переменные «a» и «b» — на разные объекты с одинаковыми свойствами и значениями.', categoryID: 20, typeID: 27, complexityID: 657}, 
    {id: 15, questionText: 'Что такое область видимости (Scope)?', answerText: 'Область видимости — это место, где (или откуда) мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости: глобальная, функциональная и блочная (ES6). Глобальная область видимости — переменные и функции, объявленные в глобальном пространстве имен, имеют глобальную область видимости и доступны из любого места в коде.', categoryID: 10, typeID: 27, complexityID: 921}, 
    {id: 16, questionText: 'Что такое замыкание (Closures)?', answerText: 'Согласно MDN оператор "+" действительно является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, которое является числом.', categoryID: 30, typeID: 13, complexityID: 345}];
    
    const types: ITypes[] = [{id: 65, name: 'Теория'}, {id: 13, name: 'Практика'}, {id: 27, name: 'Опыт'}];
    const complexities: IComplexity[] = [{id: 345, name: 'Junior'}, {id: 657, name: 'Middle'}, {id: 921, name: 'Senior'}];
    const categories: ICategories[]= [{id: 10, name: 'HTML'}, {id: 20, name: 'CSS'}, {id: 30, name: 'JavaScript'}];
    
    let selected:IQuestions[] =[]

    function selectedItems(item: IQuestions) {        
        selected.unshift(item)
        console.log(selected)
        return selected
    }

const QuestionComponent = () => {    
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

export {QuestionComponent};