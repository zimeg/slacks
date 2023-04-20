import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/future/datastores
 */
const SampleObjectDatastore = DefineDatastore({
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

export default SampleObjectDatastore;
