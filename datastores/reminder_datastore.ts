import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

const ReminderDatastore = DefineDatastore({
  name: "Reminders",
  primary_key: "reminder_id",
  attributes: {
    reminder_id: {
      type: Schema.types.number,
    },
    reminder: {
      type: Schema.types.string,
    },
    priority: {
      type: Schema.types.number,
    },
    complete: {
      type: Schema.types.boolean,
    },
    notes: {
      type: Schema.types.array,
      items: {
        type: Schema.types.string,
      },
    },
  },
});

export default ReminderDatastore;
