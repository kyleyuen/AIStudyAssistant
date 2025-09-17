export const getAIResponse = async (message) => {
  try {
    // 1. Make the HTTP request
    const response = await fetch('https://api.cohere.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'command-a-03-2025', 
        message: message,
      }),
    });

    // 2. Check if the request was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    // 3. Parse the response
    const data = await response.json();
    return data.text; // Adjust this based on Cohere's response format
  } catch (error) {
    // 4. Handle any errors
    console.error('Error calling Cohere API:', error);
    throw error;
  }
};