# Datastored

An app with only two datastores, one for reminders and one for todos.

```markdown
## Reminders

* reminder_id: string
* reminder: string
* notes: string
```

```markdown
## Todos

* task_id: string
* task: string
* notes: string
```

## Commands

```bash
# Populate the datastore with a few tasks
$ hermes datastore put '{"datastore": "Todos", "item": {"task_id": "1", "task": "drink water", "notes": "or coffee"}}'
$ hermes datastore put '{"datastore": "Todos", "item": {"task_id": "2", "task": "take a walk", "notes": "somewhere outside"}}'
$ hermes datastore put '{"datastore": "Todos", "item": {"task_id": "3", "task": "write tests", "notes": "for coverage"}}'
```

### Query

```bash
# Collect a next_cursor value
$ hermes datastore query --output json '{"datastore": "Todos", "limit": 1}'

# Use a cursor value to paginate responses
$ hermes datastore query --output json '{"datastore": "Todos", "limit": 1, "cursor": "..."}'
```