import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/sample_workflow.ts";

const sampleTrigger: Trigger<typeof SampleWorkflow.definition> = {
  type: "event",
  name: "Respond to a rocket reaction",
  description: "responds to a specific reactji",
  workflow: "#/workflows/sample_workflow",
  event: {
    event_type: "slack#/events/reaction_added",
    channel_ids: ["C038M39A2TV"],
    filter: {
      version: 1,
      root: {
        statement: "{{data.reaction}} == sunglasses",
      },
    },
  },
  inputs: {
    channel: {
      value: "C038M39A2TV",
    },
  },
};

export default sampleTrigger;
