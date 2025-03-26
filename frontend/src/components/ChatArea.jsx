import { useEffect, useRef } from 'react';
import UserProfile from './UserProfile';

const ChatArea = ({
    activeConversation,
    conversations,
    inputValue,
    setInputValue,
    handleSendMessage,
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversations, activeConversation]);

    return (
        <div className="flex-1 flex flex-col ">
            <header className="bg-secondary border-b border-gray-200 p-4 flex items-center">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="mr-4 text-gray-600 hover:text-gray-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-gray-800">
                    {conversations[activeConversation]?.title || 'Chat'}
                </h1>
                <UserProfile user={{
                    name: "SAmwel Ngusa",
                    email: "ngusa@proton.me",
                    avatar: "" 
                }} />
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {conversations[activeConversation]?.messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${message.sender === 'user'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white text-gray-800 rounded-bl-none shadow'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-300 p-4 bg-secondary">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 border border-primary bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-primary text-white rounded-full p-2  focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatArea;