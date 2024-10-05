import React from 'react'
import "./homePage.css"
import WorkspacesListRender from '../../Components/WorkspacesListRender'

const HomePage = () => {
  return (

    <div className='container homePageContainer'>
      <h1>Bienvenido a MarcelApp</h1>
      <div className='workspace '>
        <h2>ENTORNOS DE TRABAJO</h2>
<div className='scroll-container'>
        <h3><WorkspacesListRender /></h3>
        
</div>
<button className='button create'>Crear entorno</button>
      </div>
    </div>

  )
}

export default HomePage
