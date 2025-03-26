import { useState, useRef } from 'react';
import UseClickOutside from './../hooks/UseClickOutside';

const UserProfile = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  UseClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div className="relative ml-auto" ref={dropdownRef}>
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="relative ">
          <img 
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`} 
            alt="User avatar"
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <span className="hidden md:inline-block font-medium text-gray-700">{user.name}</span>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-700">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <a 
            href="#" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile Settings
          </a>
          <a 
            href="#" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;