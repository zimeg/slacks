import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const SampleFunctionDefinition = DefineFunction({
  callback_id: "sample_function",
  title: "Sample function",
  description: "A sample function",
  source_file: "functions/sample_function.ts",
  input_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
        description: "Message to be posted",
      },
      user: {
        type: Schema.slack.types.user_id,
        description: "The user invoking the workflow",
      },
    },
    required: ["message", "user"],
  },
  output_parameters: {
    properties: {
      updatedMsg: {
        type: Schema.types.string,
        description: "Updated message to be posted",
      },
    },
    required: ["updatedMsg"],
  },
});

export default SlackFunction(SampleFunctionDefinition, ({ inputs }) => {
  if (inputs.user == "USLACKBOT") {
    return { error: "No saying hi to slackbot" };
  }
  const updatedMsg = `:wave: ` + `<@${inputs.user}>` +
    ` has a new message: \n\n>${inputs.message}`;
  return { outputs: { updatedMsg } };
});
