import React from 'react'
import { Outlet } from 'react-router-dom'


const Acceuil = () => {
  return (
    <div className='home'>
        <h1>Gestion des Taches</h1>
        <Outlet />
    </div>
  )
}
export default Acceuil;