import React from 'react'
import "../../CSS/homePage.css"
import WorkspacesListRender from '../../Components/WorkspacesListRender'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/createWorkspace')
  }
  return (
    <div className='homePageContainer'>
      <h1>Bienvenido a MarcelApp</h1>
      <div className='workspace '>
        <h2 >Entornos de trabajo</h2>
        <div className='scroll-container'>
          <WorkspacesListRender />
        </div>
        <button onClick={handleButtonClick} className='button create'>Crear entorno</button>

      </div>

      
    </div>
  )
}

export default HomePage
