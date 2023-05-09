import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'
import { instance } from '../../../services/instance';
import Stomp, { over } from 'stompjs'
import moment from 'moment';
import Tokenchange from '../../../mobx/Tokenchange';
import { AnimatePresence, motion } from 'framer-motion';


var stompClient = null;
var SockJS = require('sockjs-client/dist/sockjs.js');
export const Chats = (props) => {

  // const [messagesArray, setMessagesArray] = useState();

  // const currentTimestamp = moment().format('yyyy-MM-DD[T]HH:mm:ss.SSS');
  // const [userrData, setUserrData] = useState({
  //   message: ''
  // });
  // useEffect(() => {
  //   connect()
  // }, []);

  // const connect = () => {
  //   var socket = new SockJS("http://192.168.31.156:8080/ws");
  //   stompClient = Stomp.over(socket);
  //   stompClient.connect({}, onConnected, onError);


  // }

  // const onConnected = () => {
  //   console.log("connected");
  //   // getMessages()
  //   setMessagesArray(props.messages)

  //   stompClient.subscribe('/chatroom/private', onMessageReceived);
  //   stompClient.subscribe('/user/' + 'admin' + '/private', onPrivateMessage);
  // };

  // const onError = (err) => {
  //   console.log("err", err);
  // };

  // const onMessageReceived = (payload) => {
  //   var payloadData = JSON.parse(payload.body);
  //   setMessagesArray(messagesArray => [...messagesArray, payloadData]);
    

  //   console.log(messagesArray)
  // }
  // const onPrivateMessage = (payload) => {
  //   const payloadData = JSON.parse(payload.body);
  // }

  // const sendPrivateValue = () => {

  //   if (stompClient) {
  //     var chatMessage = {
  //       senderId: 6,
  //       senderName: 'admin',
  //       recipientId: props.currentUser.recipientId,
  //       recipientName: props.currentUser.receivername,
  //       content: userrData.message,
  //       timestamp: currentTimestamp,
  //     };
  //     stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
  //     setUserrData({ ...userrData, "message": "" });

  //   }
  // }


  return (
    <div className={s.chats}>

      {/* <div className={s.messagesContainer}>
        {

          <div className={s.messagesWholeBox}>
            <div className={s.msgHeader}>
              <h6>{props.currentUser.receivername}</h6>
              <img src={require('../../../images/newimg.png')} />
            </div>

            <div className={s.msgBody}>
              {
                Array.isArray(messagesArray) && messagesArray.map((msg, index) => {

                  const date = new Date(msg.timestamp);
                  const time = date.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' },);
                  // console.log(msg.timestamp, '--', time)
                  return (
                    <div key={msg.id}
                      className={msg.senderId === 6 ? `${s.displayleft}` : `${s.display}`}>
                      <div
                        className={msg.senderId === 6 ? `${s.chatBubbleMine}` : `${s.chatBubble}`}>
                        <p className={s.textName}>{msg.content}</p>
                        <p className={s.timestamp}>{time}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div className={s.msgInput}>
              <input
                placeholder='Type your message...'
                onChange={(e) => setUserrData({ message: e.target.value })}
                value={userrData.message}
              />
              <button onClick={sendPrivateValue}>
                <img src={require('../../../images/icons/ic_round-send.png')} />
              </button>
            </div>
          </div>

        }
      </div> */}
    </div>
  )
}


