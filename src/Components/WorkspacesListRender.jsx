import React from 'react'
import { getWorkspaces  } from '../data'
import { Link } from 'react-router-dom'


const WorkspacesListRender = () => {
  const workspaces = getWorkspaces()
  
  return (
      <ul>
          {workspaces.map(({ id, workspaceTitle }) => (
              <li key={id} className='workspaceList'>
                  {workspaceTitle}
                  <Link className='button enter' to={`/workspace/${id}`}>Entrar</Link>
              </li>
          ))}
      </ul>
  )
}

export default WorkspacesListRender
