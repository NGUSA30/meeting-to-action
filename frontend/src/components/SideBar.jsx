const SideBar = ({
    conversations,
    activeConversation,
    setActiveConversation,
    createNewConversation,
    isSidebarOpen }) => {
    return (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-primary text-white transition-all duration-300 overflow-hidden`}>
            <div className="p-4 border-b border-gray-700">
                <button
                    onClick={createNewConversation}
                    className="w-full hover:bg-secondary cursor-pointer bg-gray-700 text-white hover:text-gray-600 py-2 px-4 rounded flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    New Chat
                </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-60px)]">
                {conversations.map((conversation, index) => (
                    <div
                        key={conversation.id}
                        onClick={() => setActiveConversation(index)}
                        className={`p-4 cursor-pointer hover:bg-gray-700 ${activeConversation === index ? 'bg-gray-700' : ''}`}
                    >
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="truncate">{conversation.title}</span>
                        </div>
                        {conversation.messages.length > 0 && (
                            <div className="text-xs text-gray-400 mt-1 truncate">
                                {conversation.messages[conversation.messages.length - 1].text}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;