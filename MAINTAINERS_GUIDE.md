# Maintainers guide

> rules for thee and also me

Common practice in this codebase maintains some of the following commandments.

## Creating new branches

After a seedling of code has sprouted a separate branch can grow:

```sh
$ git init
$ git remote add origin git@github.com:zimeg/slacks.git
$ git checkout --orphan cli.example.app
```

Codes can then be committed in conventional formats or forced if needed.
