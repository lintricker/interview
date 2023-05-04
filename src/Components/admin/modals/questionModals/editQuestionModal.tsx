import React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ICategories, IComplexity, ITypes } from '../../interfaces/interfaces';
import MenuItem from '@mui/material/MenuItem';

const categories: ICategories[]= [{id: 10, name: 'HTML'}, {id: 20, name: 'CSS'}, {id: 30, name: 'JavaScript'}];
const diffs: IComplexity[] = [{id: 345, name: 'Junior'}, {id: 657, name: 'Middle'}, {id: 921, name: 'Senior'}];
const types: ITypes[] = [{id: 65, name: 'Теория'}, {id: 13, name: 'Практика'}, {id: 27, name: 'Опыт'}];


function EditQuestionModal(){
    const [open, setOpen] = React.useState(false);
    return (      
      <><IconButton onClick={() => setOpen(true)}><ModeEditIcon /></IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography component="h2">
            Редактирование
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
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}/>
              </FormControl>
              <FormControl>
                <FormLabel>Ответ</FormLabel>
                <TextField
                id="outlined-multiline-flexible"
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

export { EditQuestionModal };