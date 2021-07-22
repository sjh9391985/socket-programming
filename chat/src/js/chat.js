"use strict"
/* chat.js에서 socket IO를 불러와야함. */
const socket = io();

// socket에 chatting을 보내는 기능. => 보내면 server에서 받아주는것이 있어야한다.
socket.emit("chatting", "from front");
socket.on("chatting", (data)=>{
    console.log(data);
})

console.log(socket);