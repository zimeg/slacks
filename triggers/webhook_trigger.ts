import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/sample_workflow.ts";

const sampleTrigger: Trigger<typeof SampleWorkflow.definition> = {
  type: "webhook",
  name: "Pass along a message from the outside web",
  description: "runs the example workflow",
  workflow: "#/workflows/sample_workflow",
  inputs: {
    channel: {
      value: "C038M39A2TV",
    },
  },
};

export default sampleTrigger;
