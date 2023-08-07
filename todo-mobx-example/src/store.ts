import { Instance, SnapshotIn, cast, types } from "mobx-state-tree";

const UserModel = types.model({
  id: types.string,
  createdAt: types.Date,
});

const TodoItemModel = types.model({
  id: types.string,
  value: types.string,
  createdAt: types.Date,
});

export const StoreModel = types
  .model({
    user: types.maybe(UserModel),
    todoItems: types.array(TodoItemModel),
  })
  .actions((self) => ({
    setUser(user: SnapshotIn<typeof UserModel>) {
      self.user = UserModel.create(user);
    },
    addTodoItem(text: string) {
      self.todoItems.push(
        TodoItemModel.create({
          id: generateId(),
          value: text,
          createdAt: Date.now(),
        }),
      );
    },
    removeTodoItem(idToRemove: string) {
      self.todoItems = cast(
        self.todoItems.filter((item) => item.id !== idToRemove),
      );
    },
  }));

export type Store = Instance<typeof StoreModel>;

let lastIdPrefix = 0;
function generateId() {
  return `${lastIdPrefix++}${Math.random()}${Date.now()}`;
}
