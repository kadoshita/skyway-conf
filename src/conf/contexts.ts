import { createContext } from "react";
import RootStore from "./stores";

const rootStore = new RootStore();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: for debug
window.store = rootStore;

export const StoreContext = createContext(rootStore);
