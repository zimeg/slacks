import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import { GifWorkflow } from "./workflow.ts";
/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const sampleTrigger: Trigger<typeof GifWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Sample trigger",
  description: "A sample trigger",
  workflow: `#/workflows/${GifWorkflow.definition.callback_id}`,
  inputs: {
    channel_id: {
      value: TriggerContextData.Shortcut.channel_id,
    },
  },
};

export default sampleTrigger;
