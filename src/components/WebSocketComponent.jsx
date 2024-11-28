import React, { useState } from 'react'
import useWebSocket from '../hooks/useWebSocket';

const WebSocketComponent = () => {
    const [inputMessage, setInputMessage] = useState("");
    const { isConnected, messages, sendMessage } = useWebSocket("wss://example.com/socket", {
        onOpen: () => console.log("WebSocket connected"),
        onMessage: (data) => console.log("Message received:", data),
        onClose: () => console.log("WebSocket disconnected"),
        onError: (error) => console.error("WebSocket error:", error),
    });

    const handleSendMessage = () => {
        if (inputMessage) {
            sendMessage({ text: inputMessage });
            setInputMessage("");
        }
    };
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold'>WebSocket Example</h1>
        <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>

        <div className='my-4'>
            <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder='Enter a message'
            className='p-2 border rounded-md w-64'
            />
            <button
            onClick={handleSendMessage}
            className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md'
            >
                Send
            </button>
        </div>

        <h2 className='text-lg font-bold'>Messages:</h2>
        <ul className='list-disc pl-5'>
            {messages.map((msg, index) => (
                <li key={index}>{JSON.stringify(msg)}</li>
            ))}
        </ul>
    </div>
  );
};

export default WebSocketComponent;