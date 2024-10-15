import React, { useEffect, useState } from 'react'
import { sendMessage } from '../data'
import '../CSS/workspaceScreen.css'
import RenderChats from './RenderChats'






const NewMessages = ({ channelId }) => {
    const [text, setText] = useState('')
    const author = "Yo"

    const handleSubmit = (evento) => {
        evento.preventDefault()

        if (typeof channelId !== 'string' && typeof channelId !== 'number') {
            console.error("El channelId no es válido:", channelId)
            return
        }

        sendMessage(text, author, channelId)
        setText('')
       
    }

    return (
        <div className='newMessages'>
            <form className='formChat' onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Escribe tu mensaje"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className='sendMessage' type="submit">Enviar</button>

            </form>
            </div >
            );
}
            export default NewMessages
