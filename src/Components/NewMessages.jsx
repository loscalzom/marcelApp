import React, {  useState } from 'react'
import { sendMessage } from '../data'
import '../CSS/workspaceScreen.css'

const NewMessages = ({ channelId,newMessageSent }) => {
    const [text, setText] = useState('')
    const author = "Yo"

    const handleSubmit = (evento) => {
        evento.preventDefault()

        sendMessage(text, author, channelId)
        setText('')

        if (newMessageSent) {
            newMessageSent()
        }}

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
    )
}
export default NewMessages
