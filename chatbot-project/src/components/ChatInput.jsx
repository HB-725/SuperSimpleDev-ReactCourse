import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'




// component to input chat message
export function ChatInput({chatMessages, setChatMessages}) {

  const[inputText, setInputText] = useState('');
  const[isLoading, setIsLoading] = useState(false);

    // function to save input text to state

  function saveInputText( event ) {
    setInputText(event.target.value);
  }

  async function sendMessage() {

    if (isLoading) return;
    if (inputText.trim() === '') return;

    const newChatMessages = [
      ...chatMessages, { 
        message: inputText, 
        sender: 'user', 
        id: crypto.randomUUID() 
      }
    ];


    setChatMessages(newChatMessages);
    setInputText('');
    setChatMessages([
      ...newChatMessages, 
      { message: "Loading...", sender: 'robot', id: crypto.randomUUID() },
    ]);
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    
    setChatMessages([
      ...newChatMessages, 
      { message: response, sender: 'robot', id: crypto.randomUUID() },
    ]);
    
    setIsLoading(false);
  }

  function HandleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return ( 
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={HandleKeyDown}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}
