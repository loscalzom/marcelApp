import React from 'react';

const RenderChats = ({ channel }) => {

 
  return (
    <div>
      <h4># {channel.channelName}</h4>
      {channel.messages && channel.messages.length > 0 ? (
        <ul>
          {channel.messages.map((message) => (
            <li key={message.id}>
              <strong>{message.author}: </strong> {message.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay mensajes en este canal.</p>
      )}
    </div>
  );
};

export default RenderChats;