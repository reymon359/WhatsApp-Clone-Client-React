import * as React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import AnimatedSwitch from '../components/AnimatedSwitch'
import AuthScreen from '../components/AuthScreen'
import ChatScreen from '../components/ChatScreen'
import ChatsListScreen from '../components/ChatsListScreen'
import NewChatGroupScreen from '../components/NewChatGroupScreen'
import NewChatScreen from '../components/NewChatScreen'
import { withAuth } from '../services/auth.service'

const RedirectToChats = () => (
  <Redirect to="/chats" />
)

export default () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/sign-(in|up)" component={AuthScreen} />
      <Route exact path="/chats" component={withAuth(ChatsListScreen)} />
      <Route exact path="/chats/:chatId" component={withAuth(ChatScreen)} />
      <Route exact path="/new-chat" component={withAuth(NewChatScreen)} />
      <Route exact path="/new-chat/group" component={withAuth(NewChatGroupScreen)} />
      <Route path="/" component={RedirectToChats} />
    </AnimatedSwitch>
  </BrowserRouter>
)