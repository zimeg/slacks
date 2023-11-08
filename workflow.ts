import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { Connectors } from "deno-slack-hub/mod.ts";

const GifWorkflow = DefineWorkflow({
  callback_id: "post_random_gif",
  title: "Workflow to post a random gif in a channel",
  description: "A workflow that post a random gif in the channel it is invoked",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel_id"],
  },
});

const getRandomGifStep = GifWorkflow.addStep(
  Connectors.Giphy.functions.GetRandomGif,
  {
    rating: "g",
  },
);

GifWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: GifWorkflow.inputs.channel_id,
  message: getRandomGifStep.outputs.gif_title_url,
});

export { GifWorkflow };
