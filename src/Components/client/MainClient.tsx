import * as React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ICategories } from '../admin/interfaces/interfaces';
import { MenuHeader } from '../admin/menu';
import { QuestionComponent } from './questions.component';
import { SelectedComponent } from './selected.component';

const MainClient = () => {
  return ( 
    <div>  
    <MenuHeader />
    <SelectedComponent /></div> 
  );
}

export {MainClient};