import React, { useState } from 'react'
import './createWorkspace.css'
import { createWorkspace, getWorkspaces } from '../../data'
import { useNavigate } from 'react-router-dom'


const CreateWorkspacePage = () => {

  const [error, setError] = useState({ text: "", isError: false })
  const navigate = useNavigate()

  const handleSubmit = (evento) => {

    evento.preventDefault()

    const formulario = new FormData(evento.target)
    const workspace = formulario.get('workspace')

    if (workspace.length < 4 || workspace.length > 20) {
      setError({ text: "El nombre del entorno debe tener entre 4 y 20 caracteres", isError: true })
    } else {
      setError({ text: "", isError: false })

      const nuevoWorkspace = { workspaceTitle: workspace }

      createWorkspace(nuevoWorkspace)
      getWorkspaces()
      navigate('/')
    }

  }
  const handleCancel = (evento) => {
    evento.preventDefault()
    navigate('/')
  }

  return (
    <div className='container createWorspaceContainer'>

      <h2>Crear entorno de trabajo</h2>

      <form onSubmit={handleSubmit} className='form'>

        <label htmlFor="workspaceTitle">Ingrese el nombre del entorno</label> <br />
        {error.isError && <p>{error.text}</p>}


        <input type="text" placeholder='Entre 4 y 20 caracteres' name="workspace" id='workspaceTitle' /><br />

        <button className='button'>Crear</button>
        <button type='button' className='button' onClick={handleCancel} ><a  href='/'>Cancelar</a></button>

      </form>

    </div>
  )
}

export default CreateWorkspacePage
