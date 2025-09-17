import { useState } from 'react';

function Home() {
  // State for messages
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your study assistant.", isUser: false, time: "10:30 AM" }
  ]);
  
  // State for input text - FIXED: setInpusText → setInputText
  const [inputText, setInputText] = useState('');
  
  // Function to handle sending messages
  const handleSendMessage = () => {
    if(inputText.trim() === '') return;

    const newMessage = {
      text: inputText,
      isUser: true,
      // FIXED: toLocateTimeString → toLocaleTimeString
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    }

    // FIXED: setMasages → setMessages
    setMessages([...messages, newMessage]);
    setInputText('');
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