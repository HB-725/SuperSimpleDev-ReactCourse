import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage.jsx'


// component to display list of chat messages
function ChatMessages({chatMessages}) {

  const chatMessageRef = useRef(null);


  useEffect(() => {
    const containerElm = chatMessageRef.current;
    if (containerElm) {
      containerElm.scrollTop = containerElm.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessageRef}

    >
      {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage 
              message={chatMessage.message} 
              sender={chatMessage.sender} 
              key={chatMessage.id}
            />
          );
      })}
    </div>
  );
  
}

export default ChatMessages;