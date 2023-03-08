import React from 'react';
import { MainAdmin } from './admin/MainAdmin';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
const Auth = () => {
    return (
      <div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button onClick={MainAdmin} sx={{ mt: 1 /* margin top */ }}>Log in</Button>
      </div>
    );
  };
  
  export {Auth};