import * as React from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import debug from "debug";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require("../../package.json");
import { globalStyle } from "../shared/global-style";
import App from "./app";

const log = debug("main");

(async () => {
  log(`${name} v${version}`);
  document.title += ` v${version}`;

  const container = document.getElementById("app-root");
  if (container === null) return;
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Global styles={globalStyle} />
      <App />
    </React.StrictMode>
  );
})().catch((err) => console.error(err));
