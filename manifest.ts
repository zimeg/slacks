import { Manifest } from "deno-slack-sdk/mod.ts";
import Todos from "./datastores/todo_datastore.ts";
import Reminders from "./datastores/reminder_datastore.ts";

export default Manifest({
  name: "Datastored",
  description: "An app for storing things",
  icon: "assets/datastored.png",
  outgoingDomains: [],
  datastores: [Todos, Reminders],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
  ],
});
