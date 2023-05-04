import React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Modal from '@mui/joy/Modal';
import Stack from '@mui/joy/Stack';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { ICategories, IComplexity, ITypes } from '../../interfaces/interfaces';
import MenuItem from '@mui/material/MenuItem';
import { ModalDialog } from '@mui/joy';

const categories: ICategories[]= [{id: 10, name: 'HTML'}, {id: 20, name: 'CSS'}, {id: 30, name: 'JavaScript'}];
const diffs: IComplexity[] = [{id: 345, name: 'Junior'}, {id: 657, name: 'Middle'}, {id: 921, name: 'Senior'}];
const types: ITypes[] = [{id: 65, name: 'Теория'}, {id: 13, name: 'Практика'}, {id: 27, name: 'Опыт'}];

function AddQuestionModal(){
    const [open, setOpen] = React.useState(false);
    return (
      <>
      <Fab  onClick={() => setOpen(true)} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <Typography component="h2">
            Добавление
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Вопрос</FormLabel>
                <TextField
                multiline
                maxRows={4}/>
              </FormControl>
              <FormControl>
                <FormLabel>Ответ</FormLabel>
                <TextField
                multiline
                maxRows={4}/>
              </FormControl>
              <FormControl>
                <TextField
                id="outlined-select-currency"
                select
                label="Категория"
                >
                {categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                {option.name}
                </MenuItem>))}
                </TextField>                
              </FormControl>
              <FormControl>
                <TextField
                id="outlined-select-currency"
                select
                label="Тип вопроса"
                >
                {types.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                {option.name}
                </MenuItem>))}
                </TextField>                
              </FormControl>
              <FormControl>
                <TextField
                id="outlined-select-currency"
                select
                label="Сложность"
                >
                {diffs.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                {option.name}
                </MenuItem>))}
                </TextField>                
              </FormControl>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                Отменить
                </Button>
                <Button type="submit">Сохранить</Button>
              </Box>              
            </Stack>
          </form>
        </ModalDialog>
      </Modal></>
    )
}

export { AddQuestionModal };