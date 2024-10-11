import React from 'react'
import { getWorkspaces  } from '../data'
import { Link } from 'react-router-dom'


const WorkspacesListRender = (id,workspaceTitle) =>     {

const workspaces= getWorkspaces()
      
const workspaceList= workspaces.map(({id,workspaceTitle}) => 
<li key={id} className='workspaceList'>
 {workspaceTitle}

<Link className='button enter' to={`/workspace/${id}`}>Entrar</Link>



  </li> )
return workspaceList
    
}

export default WorkspacesListRender
