import React, { useEffect, useRef, useState } from 'react'

const useWebSocket = (url, options = {}) => {
    const { reconnectInterval = 5000, onOpen, onMessage, onClose, onError } = options;

    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const wsRef = useRef(null);
    const reconnectTimeout = useRef(null);

    const connect = () => {
        if (wsRef.current) return;

        const ws = new WebSocket(url);

        ws.onopen = (event) => {
            setIsConnected(true);
            if (onOpen) onOpen(event);
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data]);
            if (onMessage) onMessage(data);
        };

        ws.onclose = (event) => {
            setIsConnected(false);
            wsRef.current = null;
            if (onClose) onClose(event);
            // Attempt to reconnect
            if (reconnectInterval) {
                reconnectTimeout.current = setTimeout(() => connect(), reconnectInterval);
            }
        };

        ws.onerror = (event) => {
            if (onError) onError(event);
        };

        wsRef.current = ws;
    };

    const disconnect = () => {
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }
        clearTimeout(reconnectTimeout.current);
    };

    const sendMessage = (message) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify(message));
        } else {
            console.error("WebSocket is not open. Unable to send message.");
        }
    };

    useEffect(() => {
        connect();
        return () => {
            disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
  
    return { isConnected, messages, sendMessage, disconnect };
};

export default useWebSocket;