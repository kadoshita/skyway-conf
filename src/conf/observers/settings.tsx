import * as React from "react";
import { useContext, useMemo } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import SettingsLayout from "../components/settings-layout";
import {
  changeDispName,
  enableUserVideo,
  disableUserVideo,
  enableDisplayVideo,
  disableDisplayVideo,
  changeVideoDeviceId,
  changeAudioDeviceId,
  closeSettings,
  joinConference,
  toggleVideoMuted,
  toggleAudioMuted,
} from "../effects/settings";

const Settings: FunctionComponent<Record<string, never>> = () => {
  const store = useContext(StoreContext);

  const onChangeDispName = useMemo(() => changeDispName(store), [store]);
  const onClickEnableUserVideo = useMemo(() => enableUserVideo(store), [store]);
  const onClickDisableUserVideo = useMemo(
    () => disableUserVideo(store),
    [store]
  );
  const onClickEnableDisplayVideo = useMemo(
    () => enableDisplayVideo(store),
    [store]
  );
  const onClickDisableDisplayVideo = useMemo(
    () => disableDisplayVideo(store),
    [store]
  );
  const onChangeVideoDeviceId = useMemo(
    () => changeVideoDeviceId(store),
    [store]
  );
  const onChangeAudioDeviceId = useMemo(
    () => changeAudioDeviceId(store),
    [store]
  );
  const onClickJoinConference = useMemo(() => joinConference(store), [store]);
  const onClickCloseSettings = useMemo(() => closeSettings(store), [store]);
  const onClickToggleAudioMuted = useMemo(
    () => toggleAudioMuted(store),
    [store]
  );
  const onClickToggleVideoMuted = useMemo(
    () => toggleVideoMuted(store),
    [store]
  );

  const { ui, media, room, client } = store;
  return (
    <Observer>
      {() => {
        if (!ui.isSettingsOpen) {
          return <></>;
        }

        return (
          <SettingsLayout
            stream={media.stream}
            defaultDispName={client.displayName}
            browser={client.browser}
            hasGetDisplayMedia={client.hasGetDisplayMedia}
            hasUserVideoDevice={client.hasUserVideoDevice}
            onChangeDispName={onChangeDispName}
            videoType={media.videoType}
            onClickEnableUserVideo={onClickEnableUserVideo}
            onClickDisableUserVideo={onClickDisableUserVideo}
            onClickEnableDisplayVideo={onClickEnableDisplayVideo}
            onClickDisableDisplayVideo={onClickDisableDisplayVideo}
            videoDeviceId={media.videoDeviceId || ""}
            audioDeviceId={media.audioDeviceId || ""}
            videoInDevices={media.videoInDevices.slice()}
            audioInDevices={media.audioInDevices.slice()}
            onChangeVideoDeviceId={onChangeVideoDeviceId}
            onChangeAudioDeviceId={onChangeAudioDeviceId}
            isVideoTrackMuted={media.isVideoTrackMuted}
            isAudioTrackMuted={media.isAudioTrackMuted}
            onClickToggleVideoMuted={onClickToggleVideoMuted}
            onClickToggleAudioMuted={onClickToggleAudioMuted}
            isReEntering={ui.isReEntering}
            isJoined={room.isJoined}
            isDisplayNameValid={client.isDisplayNameValid}
            onClickCloseSettings={onClickCloseSettings}
            onClickJoinConference={onClickJoinConference}
          />
        );
      }}
    </Observer>
  );
};

export default Settings;
