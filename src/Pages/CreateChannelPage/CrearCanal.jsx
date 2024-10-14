import { useNavigate, useParams } from "react-router-dom";
import { createChannel } from "../../data";
import { useState } from "react";

const CreateChannel = () => {
    const { workspace_id } = useParams()
    const [error, setError] = useState({ text: "", isError: false })
    const navigate = useNavigate()

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const formulario = new FormData(evento.target)
        const channelName = formulario.get('channel')

        if (channelName.length < 4 || channelName.length > 20) {
            setError({ text: "El nombre del canal debe tener entre 4 y 20 caracteres", isError: true })
        } else {
            setError({ text: "", isError: false })

            const newChannel = { channelName }

            createChannel(newChannel, workspace_id)
            navigate(`/workspace/${workspace_id}`)
        }
    }

    const handleCancel = (evento) => {
        evento.preventDefault()
        navigate(`/workspace/${workspace_id}`)
    }

    return (
        <div className='container createWorspaceContainer'>
            <h2>Crear canal</h2>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="channelName">Ingrese el nombre del canal</label> <br />
                {error.isError && <p>{error.text}</p>}
                <input type="text" placeholder='Entre 4 y 20 caracteres' name="channel" id='channelName' /><br />
                <button className='button'>Crear</button>
                <button type='button' className='button' onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    )
}

export default CreateChannel