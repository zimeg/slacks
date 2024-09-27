# Kudos button

> Repeated gratitude in multiple workflow runs

```sh
$ slack create kudos -t zimeg/slacks -b deno.sdk.kudos/button
$ cd kudos
$ slack run
$ slack trigger create --trigger-def ./trigger.ts
```

Related:

- https://github.com/slackapi/deno-slack-sdk/issues/363
