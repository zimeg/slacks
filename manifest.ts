import { Manifest } from "deno-slack-sdk/mod.ts";
import CreateChannelWorkflow from "./workflows/create_channel.ts";

export default Manifest({
  name: "Channeler",
  description: "An easy way to create new channels",
  icon: "assets/icon.png",
  functions: [],
  workflows: [CreateChannelWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:manage",
    "groups:write",
    "channels:write.invites",
    "groups:write.invites",
  ],
});
