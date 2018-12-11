import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import * as moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import { useGetChats } from '../../graphql-hooks/chats-hooks'

const name = 'ChatsList'

const Style = styled.div `
  .${name}-chats-list {
    padding: 0;
  }

  .${name}-chat-item {
    padding: 0 15px;
    display: flex;
  }

  .${name}-profile-pic {
    height: 50px;
    width: auto;
    border-radius: 50%;
  }

  .${name}-info {
    width: calc(100% - 60px);
    height: 100%;
    padding: 15px 0;
    margin-left: 10px;
    border-bottom: .5px solid silver;
    position: relative;
  }

  .${name}-name {
    margin-top: 5px;
  }

  .${name}-last-message {
    color: gray;
    font-size: 15px;
    margin-top: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .${name}-timestamp {
    position: absolute;
    color: gray;
    top: 20px;
    right: 0;
    font-size: 13px;
  }
`

export default () => {
  const { data } = useGetChats()

  return (
    <Style className={name}>
      <List className={`${name}-chats-list`}>
        {data.chats.map(chat => (
          <ListItem key={chat._id} className={`${name}-chat-item`} button>
            <img className={`${name}-profile-pic`} src={chat.picture || '/assets/default-profile-pic.jpg'} />
            <div className={`${name}-info`}>
              <div className={`${name}-name`}>{chat.name}</div>
              <div className={`${name}-last-message`}>{chat.recentMessage.contents}</div>
              <div className={`${name}-timestamp`}>{moment(chat.recentMessage.sentAt).format('HH:mm')}</div>
            </div>
          </ListItem>
        ))}
      </List>
    </Style>
  )
}