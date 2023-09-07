import { Manifest } from "deno-slack-sdk/mod.ts";
import { AlphabetFunctionDefinition } from "./functions/alphabet_function.ts";
import { GoodbyeFunctionDefinition } from "./functions/goodbye_function.ts";
import { GreetingFunctionDefinition } from "./functions/greeting_function.ts";

export default Manifest({
  name: "Functioneer",
  description: "A collection of random functionality",
  icon: "assets/icon.png",
  functions: [
      GoodbyeFunctionDefinition,
      GreetingFunctionDefinition,
      AlphabetFunctionDefinition,
  ],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
