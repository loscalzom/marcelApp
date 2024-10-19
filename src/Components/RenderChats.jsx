import '../CSS/renderChats.css';

const RenderChats = ({ channel }) => {

  return (

<div className='renderChatsContainer'>
<h4># {channel.channelName}</h4>
    <div className='renderChats'>
      
      {channel.messages && channel.messages.length > 0 ? (
        <ul className='messages_list'>
          {channel.messages.map((message) => (
            <li key={message.id}>
              <strong>{message.author}: </strong> {message.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay mensajes en este canal.</p>
      )}
    </div></div>
  )
}

export default RenderChats