import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const GoodbyeFunctionDefinition = DefineFunction({
  callback_id: "goodbye_function",
  title: "Generate a farewell",
  description: "Generate a farewell",
  source_file: "functions/goodbye_function.ts",
  input_parameters: {
    properties: {
      recipient: {
        type: Schema.slack.types.user_id,
        description: "Goodbye recipient",
      },
    },
    required: ["recipient"],
  },
  output_parameters: {
    properties: {
      goodbye: {
        type: Schema.types.string,
        description: "Farewell for the recipient",
      },
    },
    required: ["goodbye"],
  },
});

export default SlackFunction(
  GoodbyeFunctionDefinition,
  ({ inputs }) => {
    const salutations = ["Goodbye", "Farewell", "See ya later"];
    const salutation =
      salutations[Math.floor(Math.random() * salutations.length)];
    const goodbye = `${salutation}, <@${inputs.recipient}>!`;
    return { outputs: { goodbye } };
  },
);
