import React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Box from '@mui/material/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function AddQuestionModal(){
    const [open, setOpen] = React.useState(false);
    return (
      <>
      <Fab  onClick={() => setOpen(true)} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
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
                <Input id='add_question' autoFocus />
              </FormControl>
              <FormControl>
                <FormLabel>Ответ</FormLabel>
                <Input id='add_answer'/>
              </FormControl>
              <FormControl>
                <FormLabel>Категория</FormLabel>
                <Select placeholder="Выберите...">
                  <Option value="HTML">HTML</Option>
                  <Option value="CSS">CSS</Option>
                  <Option value="JavaScript">JavaScript</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Тип</FormLabel>
                <Select placeholder="Выберите...">
                  <Option value="Теория">Теория</Option>
                  <Option value="Практика">Практика</Option>
                  <Option value="Опыт">Опыт</Option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Сложность</FormLabel>
                <Select placeholder="Выберите...">
                  <Option value="Junior">Junior</Option>
                  <Option value="Middle">Middle</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
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