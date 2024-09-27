import { Trigger } from "deno-slack-sdk/types.ts";
import { SubmitKudosWorkflow } from "../manifest.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";

const submitKudosTrigger: Trigger<typeof SubmitKudosWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Submit kudos",
  description: "Share kindness",
  workflow: "#/workflows/submit_kudos_workflow",
  inputs: {
    channel: {
      customizable: true,
    },
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
  },
};

export default submitKudosTrigger;
