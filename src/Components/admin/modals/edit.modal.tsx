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
import { Input } from '@mui/material';
import '../styles/TableRow.css'

function EditModal(){
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

export { EditModal };