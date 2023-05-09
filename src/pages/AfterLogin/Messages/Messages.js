import React, { useEffect, useState } from 'react'
import s from './Messages.module.css'
import { instance } from '../../../services/instance';
import Stomp from 'stompjs'
import Tokenchange from '../../../mobx/Tokenchange';
import { Sidebar } from '../../Components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import Repeater from '../../../mobx/Repeater';

var stompClient = null;
var SockJS = require('sockjs-client/dist/sockjs.js');
export const Messages = observer(() => {

  const navigate = useNavigate();
  //animation

  const paragraphVariant = {
    initial: {
      y: 1000
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 20,
        ease: "easeIn",
      },
    },
    exit: {
      y: -1000,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };


  //token
  const token = Tokenchange.access_token
  const config = { headers: { 'Authorization': `Bearer ${token}` } };

  const [myData, setMyData] = useState('')
  const [chatList, setChatList] = useState('')

  const getChatList = () => {
    instance.get('/messages/chat-rooms', config).then(res => {
      setChatList(res.data)
    }).catch(err => console.log(err))
  }





  useEffect(() => {
    getChatList()

    instance.get('user/user-details', config).then(function (response) {
      setMyData(response.data)
    }).catch(function (error) {
      console.log(error);
    });
    connect()
  }, [Repeater.bool]);


  const changeUser = (userData) => {
    navigate('/messages/сhat', { state: { userData, myData, token } })
  }

  const connect = () => {
    var socket = new SockJS("http://192.168.31.156:8080/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected,  console.log("err"));
  }

  const onConnected = () => {
    console.log("connected");
    stompClient.subscribe('/chatroom/private', onMessageReceived);
  };


  const onMessageReceived = (payload) => {
    Repeater.trigger()
  }

  return (
    <div className="cagewall">
      <Sidebar />
      <div className='area'>
        <h2>Chats</h2>
        {
          Array.isArray(chatList) && chatList.sort((a, b) => {
            if (a.status === 'DELIVERED' && b.status !== 'DELIVERED') {
              return -1;
            } else if (a.status !== 'DELIVERED' && b.status === 'DELIVERED') {
              return 1;
            } else {
              return new Date(a.time) - new Date(b.time);
            }
          }).map((list) => {
            const date = new Date(list.timestamp);
            const time = date.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });
            return (
              <button key={list.id}
                className={list.status === 'DELIVERED' && list.senderId != myData.id ? `${s.chatListItemActive}` : `${s.chatListItem}`}
                onClick={() => changeUser({ list })}>
                {
                  list.photo
                    ? <img src={require('../../../images/newimg.png')} />
                    : <img src={require('../../../images/newimg.png')} />
                }
                <div className={s.alltext}>
                  <div className={s.text}>
                    <p className={s.textName}>{list.username}</p>
                    <p className={s.bodyName}>{list.message}</p>
                  </div>

                  <div className={s.textReverse}>
                    <p className={s.timeText}>{time}</p>
                    {
                      list.status === 'DELIVERED'  && list.senderId != myData.id
                      ? <p className={s.circle}>{list.newMessagesCount}</p>
                      : null
                    }
                  </div>
                </div>
              </button>
            )
          })
        }
      </div>



    </div>
  )
})
