import * as React from "react";
import { useContext, useMemo } from "react";
import { FunctionComponent } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import { IconButton } from "../components/icon";
import { exitRoom } from "../effects/exit";

export const ExitOpener: FunctionComponent<{ key: string }> = () => {
  const store = useContext(StoreContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickExitRoom = useMemo(() => exitRoom(), [store]);

  return (
    <Observer>
      {() => <IconButton name="exit_to_app" onClick={onClickExitRoom} />}
    </Observer>
  );
};
