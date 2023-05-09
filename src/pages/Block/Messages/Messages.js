import React, { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'
import { instance } from '../../../services/instance';
import Stomp, { over } from 'stompjs'
import moment from 'moment';
import Tokenchange from '../../../mobx/Tokenchange';
// import { Chat } from './Chat';
import { AnimatePresence, motion } from 'framer-motion';
import { Chats } from './Chats';
// import { message } from 'antd';


var stompClient = null;
var SockJS = require('sockjs-client/dist/sockjs.js');
export const Messages = () => {

  const [isGetMessages, setGetMessages] = useState(false)
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

  //keyPress
  // const keyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     sendPrivateValue()
  //   }
  // };

  //token
  const token = Tokenchange.access_token
  const config = { headers: { 'Authorization': `Bearer ${token}` } };

  const [chatList, setChatList] = useState('')

  const getChatList = () => {
    instance.get('/messages/chat-rooms', config).then(res=>{
      setChatList(res.data)
    }).catch(err=>console.log(err))
  }
  //example data. Change in the future
  // const chatList = [
  //   {
  //     "id": 11,
  //     "username": "companyrep",
  //     "password": "$2a$10$3krrfo/SVwpg/wOrDGruh./X0mKJU.635Qr15ysIuuPSrVaa7FTli",
  //     "fullName": "Company Rep",
  //     "email": "companyrep@gmil.com",
  //     "city": "Astana",
  //     "address": "Mangilik El 67",
  //     "phoneNumber": "87777777777",
  //     "photo": null,
  //     "reviews": [],
  //     "orders": []
  //   },
  //   {
  //     "id": 10,
  //     "username": "amina",
  //     "password": "$2a$10$7kCOT3Frn1gG2iBqAdbgG.4gijgxPzMOhltVarkcOoCVTYqN6.nn6",
  //     "fullName": "Amina Kanat",
  //     "email": "amina@mail.ru",
  //     "city": "Astana",
  //     "address": "Kaldayakova 11",
  //     "phoneNumber": "87019210757",
  //     "photo": "2eaae74d-a167-4539-9c0f-b6f1774df319",
  //     "reviews": [],
  //     "orders": []
  //   },
  // ]

  //messages
  const [messagesArray, setMessagesArray] = useState([]);
  const [currenUser, setCurrentUser] = useState({
    recipientId: 0,
    receivername: '',
  });
  const currentTimestamp = moment().format('yyyy-MM-DD[T]HH:mm:ss.SSS');


  const [userrData, setUserrData] = useState({
    message: ''
  });




  useEffect(() => {
    connect()
    getChatList()
    // getMessages()
  }, []);

  const getMessages = () => {
    instance.get(`/messages/${currenUser.recipientId}`, config).then(res => {
      console.log('m', res.data)
      setMessagesArray(res.data)
    }).catch(err => console.log(err))
  }

  const changeUser = (recipientId, receivername) => {
    setCurrentUser({ recipientId: recipientId, receivername: receivername })
    getMessages()
  }

  const connect = () => {
    var socket = new SockJS("http://192.168.31.156:8080/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);


  }

  const onConnected = () => {
    console.log("connected");
    if(!isGetMessages) {
      console.log('false')
      getMessages()
      setGetMessages(true)
    }
    stompClient.subscribe('/chatroom/private', onMessageReceived);
    stompClient.subscribe('/user/' + 'admin' + '/private', onPrivateMessage);
  };

  const onError = (err) => {
    console.log("err", err);
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    setMessagesArray(messagesArray => [...messagesArray, payloadData]);
    // console.log(messagesArray)
  }
  const onPrivateMessage = (payload) => {
    const payloadData = JSON.parse(payload.body);
  }

  const sendPrivateValue = () => {

    if (stompClient) {
      var chatMessage = {
        senderId: 6,
        senderName: 'admin',
        recipientId: currenUser.recipientId,
        recipientName: currenUser.receivername,
        content: userrData.message,
        timestamp: currentTimestamp,
      };


      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserrData({ ...userrData, "message": "" });

    }
  }


  return (
    <div className="cagewall">
      <Sidebar />

      <AnimatePresence>
        <motion.div className='area'
          key="modal"
          variants={paragraphVariant}
          initial='initial'
          animate='visible'
          exit='exit'>

          <div className={s.chatContainer}>
            <div className={s.chatList}>
              <h4>Chats</h4>
              {
                Array.isArray(chatList) && chatList.map((list) => {
                  const date = new Date(list.timestamp);
                  const time = date.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });
                  return (
                    <button key={list.id}
                      className={currenUser.recipientId === list.id ? `${s.chatListItemActive}` : `${s.chatListItem}`}
                      onClick={() => changeUser(list.id, list.username)}>
                      {/* <img src={require('../../../images/newimg.png')} /> */}
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

                        <p className={s.timeText}>{time}</p>
                      </div>
                    </button>
                  )
                })
              }
            </div>

            {/* <Chats currentUser={currenUser} token={token} messages={messagesArray}/> */}

            <div className={s.messagesContainer}>
              {

                <div className={s.messagesWholeBox}>
                  <div className={s.msgHeader}>
                    <h6>{currenUser.receivername}</h6>
                    <img src={require('../../../images/newimg.png')} />
                  </div>

                  <div className={s.msgBody}>
                    {/* {
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
                    } */}

                    {
                      Array.isArray(messagesArray) &&
                      messagesArray.sort((a, b) => a.id - b.id).map((msg, index) => {
                        const date = new Date(msg.timestamp);
                        const time = date.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });
                        return (
                          <div key={msg.id} className={msg.senderId === 6 ? `${s.displayleft}` : `${s.display}`}>
                            <div className={msg.senderId === 6 ? `${s.chatBubbleMine}` : `${s.chatBubble}`}>
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
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
