import React from 'react'
import { obtenerWorkspaces  } from '../data'
import { Link } from 'react-router-dom'

const WorkspacesListRender = (id,workspaceTitle) =>     {

const workspaces= obtenerWorkspaces()
      
const workspaceList= workspaces.map(({id,workspaceTitle}) => 
<li key={id} className='workspaceList'>
 {workspaceTitle}
<button  className='button enter'>Entrar</button>
  </li> )
return workspaceList
    
}
  
export default WorkspacesListRender
