import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Store } from "./store";

export const App = observer((props: { store: Store }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Todo List:</h1>
      <NewTodoItemCreator store={props.store} />
      <TodoItems store={props.store} />

      <p>Capture a Jam on this page, and see the metadata!</p>
    </div>
  );
});

const NewTodoItemCreator = observer((props: { store: Store }) => {
  const [currentTodoItemValue, setCurrentTodoItemValue] = useState("");

  const createTodo = () => {
    props.store.addTodoItem(currentTodoItemValue);
    setCurrentTodoItemValue("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <span>Add a new todo item:</span>

      <input
        autoFocus
        onChange={(ev) => {
          setCurrentTodoItemValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key !== "Enter") {
            return;
          }
          createTodo();
        }}
        value={currentTodoItemValue}
      />

      <button onClick={createTodo}>Create</button>
    </div>
  );
});

const TodoItems = observer((props: { store: Store }) => {
  return (
    <ul>
      {props.store.todoItems.map((item) => {
        return (
          <li key={item.id}>
            {item.value}{" "}
            <button
              onClick={() => {
                props.store.removeTodoItem(item.id);
              }}
            >
              (Remove)
            </button>
          </li>
        );
      })}
    </ul>
  );
});
