import { DefineWorkflow, Manifest, Schema } from "deno-slack-sdk/mod.ts";

export const RequestKudosWorkflow = DefineWorkflow({
  callback_id: "request_kudos_workflow",
  title: "Request Kudos",
  description: "Request kudos for team members",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel"],
  },
});

RequestKudosWorkflow.addStep(
  Schema.slack.functions.SendMessage,
  {
    channel_id: RequestKudosWorkflow.inputs.channel,
    message:
      "Submit kudos here, to recognize any of your teammates who went above and beyond this week :slightly_smiling_face:",
    interactive_blocks: [{
      type: "actions",
      elements: [
        {
          type: "workflow_button",
          workflow: {
            trigger: {
              url:
                "https://slack.com/shortcuts/Ft07PTEFEYG1/cddc5a16ee92fe08b8919b260d01b0b5",
              customizable_input_parameters: [
                {
                  name: "channel",
                  value: RequestKudosWorkflow.inputs.channel,
                },
              ],
            },
          },
          text: { type: "plain_text", text: "Submit" },
          style: "primary",
        },
      ],
    }],
  },
);

export const SubmitKudosWorkflow = DefineWorkflow({
  callback_id: "submit_kudos_workflow",
  title: "Submit Kudos",
  description: "Submit kudos for team members",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
    },
    required: ["channel", "interactivity"],
  },
});

const kudoForm = SubmitKudosWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: "Submit Kudos",
    interactivity: SubmitKudosWorkflow.inputs.interactivity,
    submit_label: "Submit",
    fields: {
      elements: [{
        name: "kudo_recipients",
        title: "Who deserves kudos?",
        type: Schema.types.array,
        items: {
          type: Schema.slack.types.user_id,
        },
      }, {
        name: "kudo_reason",
        title: "What did they do to deserve kudos?",
        type: Schema.types.string,
      }],
      required: ["kudo_recipients", "kudo_reason"],
    },
  },
);

SubmitKudosWorkflow.addStep(
  Schema.slack.functions.SendMessage,
  {
    channel_id: SubmitKudosWorkflow.inputs.channel,
    message: `Kudo incoming!
      > ${kudoForm.outputs.fields.kudo_reason}`,
  },
);

export default Manifest({
  name: "give-kudo-buttons",
  description: "A kudo template with buttons",
  icon: "assets/default_new_app_icon.png",
  workflows: [RequestKudosWorkflow, SubmitKudosWorkflow],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});

export const RequestKudos = RequestKudosWorkflow;
export const SubmitKudos = SubmitKudosWorkflow;
