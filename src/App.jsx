import React from 'react'
import HomePage from './Pages/HomePage/homePage'
import { Route, Routes } from 'react-router-dom'
import CreateWorkspacePage from './Pages/CreateWorkspacePage/CreateWorkspace'
function App() {
   
return(

<div>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/createWorkspace' element={<CreateWorkspacePage/>}/>

</Routes>




</div>
)

 }









export default App