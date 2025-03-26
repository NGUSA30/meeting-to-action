import { useState } from 'react';
import SideBar from './SideBar';
import ChatArea from './ChatArea';

const Body = () => {
  const [conversations, setConversations] = useState([
    { id: 1, title: 'New Conversation', messages: [
      { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
    ]}
  ]);
  const [activeConversation, setActiveConversation] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const updatedConversations = [...conversations];
    updatedConversations[activeConversation].messages.push({
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    });
    setConversations(updatedConversations);
    setInputValue('');
    
    setTimeout(() => {
      const updatedWithBot = [...conversations];
      updatedWithBot[activeConversation].messages.push({
        id: Date.now(),
        text: 'Thanks for your message! I\'m a simple Agent.',
        sender: 'bot'
      });
      setConversations(updatedWithBot);
    }, 1000);
  };

  const createNewConversation = () => {
    const newId = conversations.length > 0 ? Math.max(...conversations.map(c => c.id)) + 1 : 1;
    setConversations([
      ...conversations,
      { id: newId, title: `Conversation ${newId}`, messages: [] }
    ]);
    setActiveConversation(conversations.length);
  };
  const [currentUser] = useState({
    name: "Samwel Ngusa",
    email: "ngusa@proton.me",
    avatar: ""
  });
  return (
    <div className="flex h-screen bg-secondary">
      <SideBar
        conversations={conversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        createNewConversation={createNewConversation}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <ChatArea
        activeConversation={activeConversation}
        conversations={conversations}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentUser={currentUser}
      />
    </div>
  );
};

export default Body;