function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className = "max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className = "text-2xl font-bold mb-4">
          AI Study Assistant
        </h1>
        
        <div className = "h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg">
          <div className = "mb-4">
            <div className = "flex justify-start mr-50 bg-blue-100 p-3 rounded-lg">
              <p>Hello! I'm your study assistant. How can I help you today?</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App