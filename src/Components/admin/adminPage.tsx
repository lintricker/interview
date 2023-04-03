import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Questions } from './questions/Questions';
import { Categories } from './categories/categories';
import { Types } from './types/types';
import { Staff } from './staff/staff';
import { Difficulties } from './difficulties/difficulties'
import { MenuHeader } from './menu';
import './styles/Box.css';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

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
        <Tab label="Вопросы" {...a11yProps(0)} />
        <Tab label="Категории" {...a11yProps(1)} />
        <Tab label="Сложности" {...a11yProps(2)} />
        <Tab label="Типы" {...a11yProps(3)} />
        <Tab label="Сотрудники" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Questions/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Categories />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Difficulties />
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