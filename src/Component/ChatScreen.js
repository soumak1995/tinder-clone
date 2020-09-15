import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../css/ChatScreen.css"
function ChatScreen() {
    const [input,setInput]=useState("");
    const [messages,setmessages]=useState([
        {
            name:'Ellen',
            Image:'./img/dinesh.jpg',
            message:'whats up ❤'
        },
        {
            name:'Ellen',
            Image:'./img/dinesh.jpg',
            message:'Hows it going...'
        },
        {

            message:'I m fine!'
        }
    ]);
    const handlesend=(e)=>{
       e.preventDefault();
       setmessages([...messages,{message:input}]);
       setInput(" ");
    }
    return (
        <div className="chatScreen">
          <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {
              messages.map((message)=>(
                  message.name?
                    ( <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.Image}/>
                 <p className="chatScreen__text">{message.message}</p>
                 </div>):(
                        <div className="chatScreen__message">
                          <p className="chatScreen__textUser">{message.message}</p>
                         </div>
                 )
              ))
            }
           
                <form  className="chatScreen__input">
                    <input
                     type="text"
                     value={input}
                     onChange={e=>setInput(e.target.value)}
                     className="chatScreen__inputField"
                     placeholder="Type a message"/>
                    <button type="submit" className="chatScreen__button" onClick={handlesend}>SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
