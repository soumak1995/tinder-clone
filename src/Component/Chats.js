import React from 'react'
import "../css/Chats.css"
import Chat from './Chat'

function Chats() {
    return (
        <div>
            <Chat
            Name="Mark"
            message="you whats up"
            timestamp="40 minutes ago"
            profilePic="./img/erlich.jpg'"
            />
            
            <Chat
            Name="Mark"
            message="you whats up"
            timestamp="40 minutes ago"
            profilePic="./img/erlich.jpg"
            />
        
            <Chat
            Name="Mark"
            message="you whats up 😍"
            timestamp="40 minutes ago"
            profilePic="./img/monica.jpg"
            />
      
            <Chat
            Name="Mark"
            message="you whats up"
            timestamp="40 minutes ago"
            profilePic="./img/monica.jpg"
            />
            
            <Chat
            Name="Mark"
            message="you whats up how are you😘"
            timestamp="40 minutes ago"
            profilePic="./img/dinesh.jpg"
            />
        </div>
    )
}

export default Chats
