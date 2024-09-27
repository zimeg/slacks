import { Trigger } from "deno-slack-sdk/types.ts";
import { RequestKudosWorkflow } from "../manifest.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";

const requestKudosTrigger: Trigger<typeof RequestKudosWorkflow.definition> = {
  type: TriggerTypes.Scheduled,
  name: "Scheduled requests",
  description: "Request kindness",
  workflow: "#/workflows/request_kudos_workflow",
  inputs: {
    channel: {
      value: "C07EP2S04KH",
    },
  },
  schedule: {
    start_time: new Date(new Date().getTime() + 60000).toISOString(),
    frequency: {
      type: "weekly",
      on_days: ["Friday"],
      repeats_every: 1,
    },
  },
};

export default requestKudosTrigger;
