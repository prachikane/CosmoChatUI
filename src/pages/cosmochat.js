import '../App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, Message, MessageList, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const CosmoChat = () =>{
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am CosmoChat! \nHow can I help you today?",
            sender: "ChatGPT",
            direction: "incoming"
        }
    ])

    const handlesend = async(message) =>{
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        //update message list
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

        setTyping(true);
        //process message by sending it to chatgpt
        await sendMessagesToChatGPT(newMessages);
    }

    async function sendMessagesToChatGPT(chatmessages){
        let apiMessages = chatmessages.map((chatmessage) =>{
            let role="user";
            if(chatmessage.sender === "ChatGPT"){
                role="assistant";
            }
            return {role: role, content:chatmessage.message}
        })


        //diff types of roles like user-> message from user and chatgpt-> message from chatgpt
        //system-> message is something like a initial message telling chatgpt how to talk. 
        //e.g. we can say "talk like a pirate", "explain like I am a 10 year old". 

        let systemMessage={
            role: "system",
            content: "Explain like I am a 10 years old" //like giving context to chatgpt
        }

        let apirequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ],
        }
        await fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers:{
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apirequestBody)
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log(data.choices[0].message.content);
            setMessages([
                ...chatmessages,{
                    message: data.choices[0].message.content,
                    sender: "ChatGPT",
                    direction: "incoming"
                }
            ]);
            setTyping(false);
        })
    }


    return (
        <div className="App">
          <header className="App-header">
            <div style={{height:"700px", width:"600px"}}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList 
                        scrollBehavior='smooth'
                        typingIndicator={typing? <TypingIndicator content="CosmoChat is typing"/> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message}/>
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type here' onSend={handlesend}></MessageInput>
                    </ChatContainer>
                </MainContainer>
            </div>
          </header>
        </div>
      );

}

export default CosmoChat;