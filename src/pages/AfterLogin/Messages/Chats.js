import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../Components/sidebar/Sidebar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import s from './Messages.module.css'
import { instance } from '../../../services/instance';
import Stomp, { over } from 'stompjs'
import moment from 'moment';

var stompClient = null;
var SockJS = require('sockjs-client/dist/sockjs.js');
export const Chats = (props) => {


  const location = useLocation();
  const navigate = useNavigate();

  const config = { headers: { 'Authorization': 'Bearer ' + location.state.token } }

  const [messagesArray, setMessagesArray] = useState();
  const currentTimestamp = moment().format('yyyy-MM-DD[T]HH:mm:ss.SSS');

  const [userrData, setUserrData] = useState({
    message: ''
  });

  useEffect(() => {
    connect()
    console.log('gd',location.state.myData.id)
  }, []);


  const connect = () => {
    var socket = new SockJS("http://192.168.31.156:8080/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    console.log("connected");
    getMessages()
    changeStatus(location.state.userData.list.id)
    stompClient.subscribe('/chatroom/private', onMessageReceived);
    stompClient.subscribe('/user/' + 'admin' + '/private', onPrivateMessage);
  };

  const onError = (err) => {
    console.log("err", err);
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    setMessagesArray(messagesArray => {
      if (messagesArray.some(msg => msg.id === payloadData.id)) {
        return messagesArray; 
      } else {
        return [...messagesArray, payloadData]; 
      }
    });
    console.log(messagesArray)
  }

  const onPrivateMessage = (payload) => {
    const payloadData = JSON.parse(payload.body);
    console.log('private ', payloadData)
  }

  const sendPrivateValue = () => {

    if (stompClient) {
      var chatMessage = {
        senderId: 1,
        senderName: 'admin',
        recipientId: location.state.userData.list.id,
        recipientName: location.state.userData.list.username,
        content: userrData.message,
        timestamp: currentTimestamp,
      };
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserrData({ ...userrData, "message": "" });

    }
  }


const getMessages = () => {
  instance.get(`/messages/${location.state.userData.list.id}`, config).then(res => {
      console.log('getMessages -', res.data)
      setMessagesArray(res.data)
  }).catch(err => console.log(err))
}

const changeStatus = (senderId) => {
  instance.put(`/messages/change-status/${senderId}`, null, config).then(res=>{
    console.log('CHANGED! - ', res.data )
  }).catch(err=>console.log(err))
}


  return (
    <div className={s.chats}>

      <div className={s.messagesContainer}>
        {

          <div className={s.messagesWholeBox}>
            <div className={s.msgHeader}>
              <button className='btn primary_btn' onClick={()=>navigate('/messages')}>Back</button>
              <div className={s.info}>
              <h6>{location.state.userData.list.username}</h6>
              <img src={require('../../../images/newimg.png')} />
              </div>
            </div>

            <div className={s.msgBody}>
              {
                Array.isArray(messagesArray) &&
                messagesArray.sort((a, b) => a.id - b.id).map((msg, index) => {

                  const date = new Date(msg.timestamp);
                  const time = date.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' },);
                  
                    if(msg.recipientId === location.state.userData.list.id || msg.recipientId === location.state.myData.id){
                      return (
                        <div key={msg.id}
                          className={msg.senderId === location.state.myData.id ? `${s.displayleft}` : `${s.display}`}>
                          <div
                            className={msg.senderId === location.state.myData.id ? `${s.chatBubbleMine}` : `${s.chatBubble}`}>
                            <p className={s.textName}>{msg.content}</p>
                            <p className={s.timestamp}>{time}</p>
                          </div>
                        </div>
                      )
                    }
                    
                  })
                
                  }
            </div>

            <div className={s.msgInput}>
              <input
                placeholder='Type your message...'
                onChange={(e) => setUserrData({ message: e.target.value })}
                // onChange={handleMessage}
                value={userrData.message}
              />
              <button onClick={sendPrivateValue}>
                <img src={require('../../../images/icons/ic_round-send.png')} />
              </button>
            </div>
          </div>

        }
      </div>
    </div>
  )
}


