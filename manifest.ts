import { Manifest } from "deno-slack-sdk/mod.ts";

export default Manifest({
  name: "feat-doctor-hook",
  description: "A sample for checkups",
  icon: "assets/default_new_app_icon.png",
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
