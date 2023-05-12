import { observable, action, makeObservable } from "mobx";

class UiStore {
  error: Error | null;
  isSettingsOpen: boolean;
  isChatOpen: boolean;
  isReactionOpen: boolean;
  isStatsOpen: boolean;
  isReEntering: boolean;

  constructor() {
    makeObservable<UiStore>(this, {
      error: observable.ref,
      isSettingsOpen: observable,
      isChatOpen: observable,
      isReactionOpen: observable,
      isStatsOpen: observable,
      isReEntering: observable,
      showError: action,
    });

    this.error = null;
    this.isSettingsOpen = true;
    this.isChatOpen = false;
    this.isReactionOpen = false;
    this.isStatsOpen = false;
    this.isReEntering = false;
  }

  showError(err: Error): Error {
    this.error = err;
    return err;
  }
}

export default UiStore;
