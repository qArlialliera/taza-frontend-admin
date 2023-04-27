import React, { useEffect } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient =null;
export const Messages = () => {

    useEffect(() => {
      connect()
    
    }, [])


    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected(), console.log('error'));
    }

    const onConnected = () => {
      console.log('connecteddd')
      // stompClient.subscribe('/chatroom/public', onMessageReceived);
      // stompClient.subscribe("/chatroom/public", function (message) {
        // showDeviceConnection(deviceIds[i], message.body);
    //  });

      // stompClient.subscribe('/user/'+5+'/private', onPrivateMessage);
    }

    const onMessageReceived = (payload)=>{
      var payloadData = JSON.parse(payload.body);
      switch(payloadData.status){
          case "JOIN":
              // if(!privateChats.get(payloadData.senderName)){
              //     privateChats.set(payloadData.senderName,[]);
              //     setPrivateChats(new Map(privateChats));
              // }
              console.log('join')
              break;
          case "MESSAGE":
              // publicChats.push(payloadData);
              // setPublicChats([...publicChats]);
              console.log('message')
              break;
      }
  }

  return (
    <div className="cagewall">
    <Sidebar />
    </div>
  )
}
