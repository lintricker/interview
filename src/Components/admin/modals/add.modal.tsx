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
import { ModalDialog } from '@mui/joy';
import { Input } from '@mui/material';

function AddModal(){
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
              <FormLabel>Название</FormLabel>
                <Input id='name' autoFocus />
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

export { AddModal };