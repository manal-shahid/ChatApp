import React from 'react'
import SearchInput from './SearchInput.jsx';
import Conversations from './Conversations.jsx';
import LogoutButton from './LogoutButton.jsx';
import ThemeToggle from './ThemeToggle.jsx'; 

const Sidebar = () => {
    return (
        <div className="relative h-full border-r border-slate-400 p-6 flex flex-col">

            <SearchInput />
            {/*<div className="divider px-4"></div>*/}
            <Conversations />
            <LogoutButton />
            <ThemeToggle />
        </div>
    );
}

export default Sidebar