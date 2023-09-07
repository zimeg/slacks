import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const AlphabetFunctionDefinition = DefineFunction({
  callback_id: "alphabet_function",
  title: "Write a letter",
  description: "Use the letters of the alphabet for something",
  source_file: "functions/alphabet_function.ts",
  input_parameters: {
    properties: {
      recipient: {
        type: Schema.slack.types.user_id,
        description: "Greeting recipient",
      },
    },
    required: ["recipient"],
  },
  output_parameters: {
    properties: {
      letter: {
        type: Schema.types.string,
        description: "Letter for the recipient",
      },
    },
    required: ["letter"],
  },
});

export default SlackFunction(
  AlphabetFunctionDefinition,
  ({ inputs }) => {
    const salutations = ["A", "B", "C"];
    const salutation =
      salutations[Math.floor(Math.random() * salutations.length)];
    const letter = `${salutation}, <@${inputs.recipient}>!`;
    return { outputs: { letter } };
  },
);
