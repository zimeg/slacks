import { Trigger } from "deno-slack-sdk/types.ts";
import { Kudos } from "./manifest.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";

const sampleTrigger: Trigger<typeof Kudos.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Sample trigger",
  description: "A sample trigger",
  workflow: "#/workflows/submit_kudos_workflow",
  inputs: {
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
  },
};

export default sampleTrigger;
