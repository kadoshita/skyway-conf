import * as React from "react";
import { useContext, useCallback } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import LocalStreamLayout from "../components/local-stream-layout";
import {
  openSettings,
  toggleAudioMuted,
  toggleVideoMuted
} from "../effects/local-stream";

const LocalStream: FunctionComponent<{}> = () => {
  const store = useContext(StoreContext);

  const onClickOpenSettings = useCallback(openSettings(store), [store]);
  const onClickToggleAudioMuted = useCallback(toggleAudioMuted(store), [store]);
  const onClickToggleVideoMuted = useCallback(toggleVideoMuted(store), [store]);

  const { media, client } = store;
  return (
    <Observer>
      {() => (
        <LocalStreamLayout
          stream={media.stream}
          displayName={client.displayName}
          isVideoDisabled={!media.isUserVideoEnabled}
          isVideoTrackMuted={media.isVideoTrackMuted}
          isAudioTrackMuted={media.isAudioTrackMuted}
          onClickToggleAudioMuted={onClickToggleAudioMuted}
          onClickToggleVideoMuted={onClickToggleVideoMuted}
          onClickOpenSettings={onClickOpenSettings}
        />
      )}
    </Observer>
  );
};

export default LocalStream;