import { Manifest } from "deno-slack-sdk/mod.ts";

export default Manifest({
  name: "cli.denosdk.deps",
  description: "instaleld",
  icon: "assets/default_new_app_icon.png",
  botScopes: [
    "commands",
  ],
});
