import React from 'react'
import HomePage from './Pages/HomePage/homePage'
import { Route, Routes } from 'react-router-dom'
import CreateWorkspacePage from './Pages/CreateWorkspacePage/CreateWorkspace'
import WorkspaceScreen from './Pages/WorkspaceScreen/WorkspaceScreen'
import CreateChannel from './Pages/CreateChannelPage/createChannel.jsx'


function App() {
   
return(

<div>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/createWorkspace' element={<CreateWorkspacePage/>}/>
<Route path="/workspace/:workspace_id" element={<WorkspaceScreen />} />
<Route path="/workspace/:workspace_id/createChannel" element={<CreateChannel />} />
</Routes>
</div>
)
 }

export default App