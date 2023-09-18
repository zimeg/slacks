import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const CreateChannelWorkflow = DefineWorkflow({
  callback_id: "create_channel_workflow",
  title: "Create a channel",
  description: "A workflow for creating channels",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
      user: {
        type: Schema.slack.types.user_id,
      },
    },
    required: ["user"],
  },
});

const channelCreatedStep = CreateChannelWorkflow.addStep(
  Schema.slack.functions.CreateChannel,
  {
    channel_name: "cool_channel_name",
    is_private: false,
  },
);

CreateChannelWorkflow.addStep(Schema.slack.functions.InviteUserToChannel, {
  channel_ids: [channelCreatedStep.outputs.channel_id],
  user_ids: [CreateChannelWorkflow.inputs.user],
});

CreateChannelWorkflow.addStep(Schema.slack.functions.SendEphemeralMessage, {
  user_id: CreateChannelWorkflow.inputs.user,
  channel_id: CreateChannelWorkflow.inputs.channel,
  message:
    `A new channel appeared! <#${channelCreatedStep.outputs.channel_id}>`,
});

export default CreateChannelWorkflow;
