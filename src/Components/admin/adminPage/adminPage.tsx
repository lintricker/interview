import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Questions } from '../questions/Questions';
import { Categories } from '../categories/categories';
import { Types } from '../types/types';
import { Staff } from '../staff/staff';
import { Complexities } from '../complexities/complexities'
import { MenuHeader } from '../menu';
import '../styles/Box.css';
import { AllProps } from './utils/allProps.utils';
import { TabPanel } from './utils/tabPanel.utils';

const AdminPage = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (   
  <div><MenuHeader /><Box id='Box_AdminPage' sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}>
      <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Вопросы" {...AllProps(0)} />
        <Tab label="Категории" {...AllProps(1)} />
        <Tab label="Сложности" {...AllProps(2)} />
        <Tab label="Типы" {...AllProps(3)} />
        <Tab label="Сотрудники" {...AllProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Questions/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Categories />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Complexities />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Types />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Staff />
      </TabPanel>
    </Box></div>    
  );
}

export {AdminPage};