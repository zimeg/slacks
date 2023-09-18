import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/create_channel.ts";

const channelTrigger: Trigger<typeof SampleWorkflow.definition> = {
  type: "shortcut",
  name: "Channel trigger",
  description: "Create a new channel with this trigger",
  workflow: "#/workflows/create_channel_workflow",
  inputs: {
    channel: {
      value: "{{data.channel_id}}",
    },
    user: {
      value: "{{data.user_id}}",
    },
  },
};

export default channelTrigger;
