import React from 'react';
import './App.css';
import { AdminPage } from './Components/admin/adminPage/adminPage';
import { MainClient } from './Components/client/MainClient';
import { Auth } from './Components/admin/auth/Auth';
import { SelectedComponent } from './Components/client/selected.component';

function App() {
  return (
    <div>
      <AdminPage />
    </div>
  );
}

export default App;
