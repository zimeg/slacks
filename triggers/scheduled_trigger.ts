import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/sample_workflow.ts";

const sampleTrigger: Trigger<typeof SampleWorkflow.definition> = {
  name: "Timidly tripped on a timer",
  type: "scheduled",
  workflow: "#/workflows/sample_workflow",
  inputs: {
    channel: { value: "C038M39A2TV" },
  },
  schedule: {
    start_time: "2023-04-01T14:00:00Z",
    timezone: "UTC",
    frequency: {
      type: "monthly",
      on_days: ["Monday"],
      on_week_num: 1,
    },
  },
};

export default sampleTrigger;
