import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/future/datastores
 */
const SampleObjectDatastore = DefineDatastore({
  name: "Reminders",
  primary_key: "reminder_id",
  attributes: {
    reminder_id: {
      type: Schema.types.string,
    },
    reminder: {
      type: Schema.types.string,
    },
    notes: {
      type: Schema.types.string,
    },
  },
});

export default SampleObjectDatastore;
