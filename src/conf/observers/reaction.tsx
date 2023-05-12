import * as React from "react";
import { useContext, useMemo } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import { IconButton } from "../components/icon";
import ReactionLayout from "../components/reaction-layout";
import { toggleReaction, sendReaction } from "../effects/reaction";

export const ReactionOpener: FunctionComponent<{ key: string }> = () => {
  const store = useContext(StoreContext);

  const onClickToggleReaction = useMemo(() => toggleReaction(store), [store]);
  const onClickSendReaction = useMemo(() => sendReaction(store), [store]);
  const { ui } = store;

  return (
    <Observer>
      {() => (
        <>
          <IconButton name="insert_emoticon" onClick={onClickToggleReaction} />
          {ui.isReactionOpen ? (
            <ReactionLayout onClickSend={onClickSendReaction} />
          ) : null}
        </>
      )}
    </Observer>
  );
};
