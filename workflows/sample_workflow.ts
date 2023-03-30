import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const SampleWorkflow = DefineWorkflow({
  callback_id: "sample_workflow",
  title: "Sample workflow",
  description: "A sample workflow",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel"],
  },
});

SampleWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: SampleWorkflow.inputs.channel,
  message: "Hello channel!",
});

export default SampleWorkflow;
