import React from "react";
import User from "./Components/User";
import listUser from './Components/listUser';
import listProduits from './Components/listProduits'
import detailUser from './Components/detailUser'
import { BrowserRouter } from "react-router-dom";




import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Acceuil } from './Components/Acceuil';
import detailUser from './Components/detailUser';
import listProduits from './Components/listProduits';
import listUser from './Components/listUser';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Routes>
        <Route path='/' element={<Acceuil />}>
          <Route index element={<listUser />}/>
          <Route path='detailProduits/:id' element={<detailProduits/>}/>
          <Route path='listUser/:id' element={<listUser/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
