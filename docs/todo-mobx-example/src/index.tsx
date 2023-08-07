import React from "react";
import { App } from "./app";
import { StoreModel } from "./store";
import { jam } from "@jam.dev/sdk";
import { createRoot } from "react-dom/client";
import { cast, getSnapshot } from "mobx-state-tree";

const store = StoreModel.create({
  user: {
    id: "USER_ID_" + String(Math.random()),
    createdAt: Date.now(),
  },
  todoItems: [],
});

jam.metadata(() => {
  const lastTodoItem = store.todoItems[store.todoItems.length - 1];
  return {
    isJqueryLoaded: Boolean("jQuery" in window),
    userId: store.user?.id,
    todoItemCount: store.todoItems.length,
    lastTodoItem: lastTodoItem && {
      snapshot: cast(getSnapshot(lastTodoItem)),
      msAgoCreated: Date.now() - lastTodoItem.createdAt.valueOf(),
    },
  };
});

const container = document.querySelector("#root");
if (!container) {
  throw new Error("Root element does not exist in html file.");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
);
