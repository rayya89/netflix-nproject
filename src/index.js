// NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App";
import { UserProvider } from "./state/UserContext";
import { ModalProvider } from "./state/ModalContext";
import { ItemsProvider } from "./state/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ModalProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </ModalProvider>
  </UserProvider>
);
