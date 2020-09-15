import React from 'react'
import "../css/Chat.css"
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom"
function Chat({Name,message,profilePic,timestamp}) {
    return (
        <Link to={`/chat/${Name}`}>
             <div className="chat">
            <Avatar className="chat__image" alt={Name} src={profilePic}/>
            <div className="chat__details" >
                   <h2>{Name}</h2>
                   <p>{message}</p>
            </div>
                <p className="chat__timestamp" >{timestamp}</p>
             </div>
        </Link>
       
    )
}

export default Chat
