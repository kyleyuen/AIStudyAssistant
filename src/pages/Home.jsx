import { useState } from 'react';
import { getAIResponse } from '../services/api';

function Home() {
  // State for messages
  const [messages, setMessages] = useState([
    { 
        text: "Hello! I'm your study assistant.", 
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
  ]);
  
  const [inputText, setInputText] = useState('');
  const [typing, setTyping] = useState(false);
  
  // Function to handle sending messages
  const handleSendMessage = async () => {
  if (inputText.trim() === '') return;

  // Add user message
  const newMessage = {
    text: inputText,
    isUser: true,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  setMessages([...messages, newMessage]);
  setInputText('');
  setTyping(true);

  try {
    // Get AI response
    const aiText = await getAIResponse(inputText);
    
    // Add AI message
    const aiMessage = {
      text: aiText,
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prevMessages => [...prevMessages, aiMessage]);
  } 
  catch (error) {
    // Handle error
    const errorMessage = {
      text: "Sorry, I'm having trouble connecting right now.",
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prevMessages => [...prevMessages, errorMessage]);
  } 
  finally {
    setTyping(false);
  }
};
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">AI Study Assistant</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : ''}`}>
          <div className={`p-3 rounded-lg inline-block ${
            message.isUser ? 'bg-green-100' : 'bg-purple-100'
          }`}>
            <p>{message.text}</p>
          </div>
        <p className="text-xs text-gray-500 mt-1">{message.time}</p>
      </div>
    ))}

        {typing && (
            <div className="mb-4 text-left">
            <div className="p-3 rounded-lg inline-block bg-purple-100">
            <p>AI is typing...</p>
            </div>
            </div>
        )}
        
        {/* Input area */}
        <div className="flex mt-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home