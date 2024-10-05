import React from 'react'
import { data } from '../data'

const WorkspacesListRender = (id,workspaceTitle) => 
    
    {
const workspaceList= data.map(({id,workspaceTitle}) => 
<li key={id} className='workspaceList'>
 {workspaceTitle}
<button className='button enter'>Entrar</button>
  </li> )
return workspaceList
    
}

export default WorkspacesListRender
