import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  VoiceCallButton,
  InfoButton,
  MessageSeparator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { sendMessage } from "@/graphql/actions/chat";
import SendMessage from "./SendMessage";
import { gql, useSubscription } from "@apollo/client";
import { useGetUser } from "@/graphql/actions";
import { Card } from "antd";
import UserAvatar from "../avatar/Avatar";

const Chat = ({ id, data }) => {
  const [message, setMesaage] = useState(data);
  const CHECK_MESSAGES = gql`
    subscription Subscription($messageId: ID!) {
      message(id: $messageId) {
        content
        id
        sender {
          id
          avatar
          firstName
          lastName
        }
      }
    }
  `;
  const result = useSubscription(CHECK_MESSAGES, {
    variables: { messageId: id },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      setMesaage([...message, data.message]);
    },
  });

  const {
    data: { getUser },
  } = useGetUser();

  return (
    <Card>
      <ChatContainer
        style={{
          height: "500px",
        }}
      >
        <ConversationHeader>
          {/* <Avatar
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        /> */}
          <ConversationHeader.Content info="Active Now" userName="User" />
          <ConversationHeader.Actions>
            <VoiceCallButton />
            {/* <VideoCallButton /> */}
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList
        // typingIndicator={<TypingIndicator content="Emily is typing" />}
        >
          {message.map((set) => (
            <>
              <Message
                model={{
                  direction:
                    getUser.id === set.sender.id ? "outgoing" : "incoming",
                  message: set.content,
                  position: "single",
                  sender: set.sender.firstName,
                  sentTime: "15 mins ago",
                }}
              >
                <UserAvatar
                  name={set.sender.firstName}
                  src={set.sender.avatar}
                />
              </Message>
            </>
          ))}
          {/* <MessageSeparator content="Saturday, 30 November 2019" /> */}
          {/* <Message
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "single",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        >
          <Avatar
            name="Emily"
            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
          />
        </Message> */}

          {/* <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            position: "single",
            sender: "Oliver",
            sentTime: "15 mins ago",
          }}
        /> */}
          {/* <Message
          avatarSpacer
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "first",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          avatarSpacer
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "normal",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        /> */}
          {/* <Message
          avatarSpacer
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "normal",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "last",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        >
          <Avatar
            name="Emily"
            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
          />
        </Message>
        <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            position: "first",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            position: "normal",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            position: "normal",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          model={{
            direction: "outgoing",
            message: "Hello my friend",
            position: "last",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          avatarSpacer
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "first",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        />
        <Message
          model={{
            direction: "incoming",
            message: "Hello my friend",
            position: "last",
            sender: "Emily",
            sentTime: "15 mins ago",
          }}
        >
          <Avatar
            name="Emily"
            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
          />
        </Message> */}
        </MessageList>
        {/* <MessageInput
        onChange={(e) =>
          send({
            variables: {
              input: {
                content: e,
                chatId: id,
              },
            },
          })
        }
        placeholder="Type message here"
      /> */}
      </ChatContainer>

      <SendMessage id={id} />
    </Card>
  );
};

export default Chat;
