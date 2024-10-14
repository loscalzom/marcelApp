import React, { useState } from 'react'
import { getWorkspaces, } from '../../data'
import { useNavigate, useParams } from 'react-router-dom'
import '../../CSS/workspaceScreen.css'
import RenderChats from '../../Components/RenderChats'
import NewMessages from '../../Components/NewMessages'




const WorkspaceScreen = () => {
    const { workspace_id } = useParams()
    const navigator = useNavigate()
    const workspaces = getWorkspaces()


    const [selectedChannel, setSelectedChannel] = useState(null)
    const workspace = workspaces.find(ws => ws.id == workspace_id)



    const handleChannelClick = (channel) => {

        setSelectedChannel(channel)
        console.log("canal seleccionado", channel)
    }


    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('../createWorkspace')
    }




    return (
        <div className=' container workspaceContainer'>
            <header>
                <h1 className='title'>{"Entorno de Trabajo: "
                    + workspace.workspaceTitle}</h1>
                <button className='button exit' onClick={() => navigator('/')}>Salir</button>
            </header>
            <div className='containerWorkspace'>
                <aside key={workspace.id}>
                    <h3>Canales</h3>
                    <div className='channels_container'>

                        <div className='channels'>
                            {workspace.channels && workspace.channels.length > 0 ? (
                                workspace.channels.map(channel => (
                                    <button className='channel' key={channel.id} onClick={() => handleChannelClick(channel)}>
                                        # {channel.channelName}
                                    </button>
                                ))
                            ) : (
                                <p>No hay canales disponibles en este workspace.</p>
                            )}
                        </div>
                        <button className='button create_channel' onClick={() => navigate(`/workspace/${workspace.id}/createChannel`)}>Crear canal</button>
                    </div>
                </aside>

                <div className='messages_zone'>
                    <div className='messages'>
                        {selectedChannel ? (
                            <RenderChats channel={selectedChannel} />
                        ) : (
                            <p>Selecciona un canal para ver los mensajes</p>
                        )}
                    </div>

                    <NewMessages channelId={selectedChannel?.id} />
              
                         
                </div>
            </div>
        </div>
    )
}

export default WorkspaceScreen;