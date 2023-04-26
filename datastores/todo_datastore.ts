import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

const TodoDatastore = DefineDatastore({
  name: "Todos",
  primary_key: "task_id",
  attributes: {
    task_id: {
      type: Schema.types.string,
    },
    task: {
      type: Schema.types.string,
    },
    notes: {
      type: Schema.types.string,
    },
  },
});

export default TodoDatastore;
