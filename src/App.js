import React from 'react';
import './App.css';

//componentes
import Links from './components/Links';

//notificaiones
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="container  p-4">
      <div className="row">
      
      <Links/>
      
      </div>
      <ToastContainer/>
    </div>

  );
}

export default App;
