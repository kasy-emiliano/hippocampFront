import React from 'react';
import { BrowserRouter as BrowserRouter} from 'react-router-dom';
import '@/App.css';

import PublicRoute from '@/components/PublicRoute';



function App() {
  return (
    <BrowserRouter>
      <PublicRoute/>
    </BrowserRouter>  
  );
}

export default App;
