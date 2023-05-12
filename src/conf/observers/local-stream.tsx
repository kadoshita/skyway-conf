import * as React from "react";
import { useContext, useMemo } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import LocalStreamLayout from "../components/local-stream-layout";
import {
  openSettings,
  castVideo,
  toggleAudioMuted,
  toggleVideoMuted,
} from "../effects/local-stream";

const LocalStream: FunctionComponent<Record<string, never>> = () => {
  const store = useContext(StoreContext);

  const onClickCastVideo = useMemo(() => castVideo(store), [store]);
  const onClickOpenSettings = useMemo(() => openSettings(store), [store]);
  const onClickToggleAudioMuted = useMemo(
    () => toggleAudioMuted(store),
    [store]
  );
  const onClickToggleVideoMuted = useMemo(
    () => toggleVideoMuted(store),
    [store]
  );

  const { media, client, ui } = store;
  return (
    <Observer>
      {() => {
        if (ui.isSettingsOpen) {
          return <></>;
        }

        return (
          <LocalStreamLayout
            stream={media.stream}
            displayName={client.displayName}
            browser={client.browser}
            videoType={media.videoType}
            isVideoTrackMuted={media.isVideoTrackMuted}
            isAudioTrackMuted={media.isAudioTrackMuted}
            onClickToggleAudioMuted={onClickToggleAudioMuted}
            onClickToggleVideoMuted={onClickToggleVideoMuted}
            onClickCastVideo={onClickCastVideo}
            onClickOpenSettings={onClickOpenSettings}
          />
        );
      }}
    </Observer>
  );
};

export default LocalStream;
