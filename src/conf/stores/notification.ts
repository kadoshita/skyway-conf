import { observable, action, makeObservable } from "mobx";
import { IObservableArray } from "mobx";
import { NotificationItem, NotificationType } from "../utils/types";

class NotificationStore {
  items: IObservableArray<NotificationItem>;

  constructor() {
    makeObservable<NotificationStore, "show">(this, {
      items: observable.shallow,
      showInfo: action,
      showChat: action,
      showReaction: action,
      showJoin: action,
      showLeave: action,
      show: action,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: to type IObservableArray
    this.items = [];
  }

  showInfo(text: string) {
    this.show("info", text, 1000);
  }

  showChat(from: string, text: string) {
    this.show("chat", `${from}: ${text}`, 6000);
  }

  showReaction(from: string, reaction: string) {
    this.show("insert_emoticon", `${from}: ${reaction}`, 3000);
  }

  showJoin(name: string) {
    this.show("person", `${name} joined`, 2000);
  }

  showLeave(name: string) {
    this.show("person", `${name} left`, 2000);
  }

  private show(type: NotificationType, text: string, duration: number) {
    const item: NotificationItem = { id: Math.random(), type, text };
    this.items.push(item);
    setTimeout(() => this.items.remove(item), duration);
  }
}

export default NotificationStore;
