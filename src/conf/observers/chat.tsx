import * as React from "react";
import { useContext, useMemo } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import { IconButton } from "../components/icon";
import ChatLayout from "../components/chat-layout";
import { openChat, closeChat, sendChat } from "../effects/chat";

export const ChatOpener: FunctionComponent<{ key: string }> = () => {
  const store = useContext(StoreContext);

  const onClickOpenChat = useMemo(() => openChat(store), [store]);

  return (
    <Observer>
      {() => <IconButton name="chat" onClick={onClickOpenChat} />}
    </Observer>
  );
};

export const Chat: FunctionComponent<Record<string, never>> = () => {
  const store = useContext(StoreContext);

  const onClickCloseChat = useMemo(() => closeChat(store), [store]);
  const onClickSendChat = useMemo(() => sendChat(store), [store]);

  const { ui, room } = store;
  return (
    <Observer>
      {() => {
        if (!ui.isChatOpen) {
          return <></>;
        }

        return (
          <ChatLayout
            chats={[...room.chats]}
            onClickCloser={onClickCloseChat}
            onClickSend={onClickSendChat}
          />
        );
      }}
    </Observer>
  );
};
