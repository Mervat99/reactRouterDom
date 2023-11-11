import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'

import index from './components/users/index.jsx'
import create from './components/users/create.jsx'

export default function App()
{
  return
  (
    
     <Routes>
     <Route path='/' />
      <Route path='/users/index'  element={<index/>} />
      <Route path='/users/create' element={<create/>}/>
     </Routes>

  
  )
   
 
}