import React, { useEffect, useState } from 'react'
import s from './Messages.module.css'
import instance from '../../../services/instance';
import Stomp from 'stompjs'
import Tokenchange from '../../../mobx/Tokenchange';
import { Sidebar } from '../../Components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import Repeater from '../../../mobx/Repeater';
import { motion } from 'framer-motion'


var stompClient = null;
var SockJS = require('sockjs-client/dist/sockjs.js');
export const Messages = observer(() => {

  const navigate = useNavigate();
  //animation




  const [myData, setMyData] = useState('')
  const [chatList, setChatList] = useState('')

  const getChatList = () => {
    instance.get('/messages/chat-rooms').then(res => {
      setChatList(res.data)
    }).catch(err => console.log(err))
  }





  useEffect(() => {
    getChatList()

    instance.get('user/user-details').then(function (response) {
      setMyData(response.data)
    }).catch(function (error) {
      console.log(error);
    });
    connect()
  }, [Repeater.bool]);


  const changeUser = (userData) => {
    navigate('/messages/сhat', { state: { userData, myData } })
  }

  const connect = () => {
    var socket = new SockJS("http://45.148.31.152:8081/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, console.log("err"));
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
      <motion.div className='sidebar'>
        <Sidebar />
      </motion.div>
      {/* <Sidebar /> */}
      <motion.div className='area'
        initial={{ y: 250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: -750 }}
      >
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
                      list.status === 'DELIVERED' && list.senderId != myData.id
                        ? <p className={s.circle}>{list.newMessagesCount}</p>
                        : null
                    }
                  </div>
                </div>
              </button>
            )
          })
        }
      </motion.div>



    </div>
  )
})
