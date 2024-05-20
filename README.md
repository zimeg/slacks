# cli.boltpy.modal

This snippet attempts to update the external values of a modal after sending the
initial response.

## Getting started

From the terminal:

```sh
$ slack create cli.boltpy.modal -t zimeg/slacks -b cli.boltpy.modal
$ cd cli.boltpy.modal
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ slack run
```

From the Slack composer:

```slack
/open-modal
```

## Notes and results

The first "Loading options..." response is returned but the second results are
never acknowledged with an updated modal selection list.

From the docs:

> ### Acknowledgement response
>
> All apps must, as a minimum, acknowledge the receipt of a valid interaction
> payload.
>
> To do that, your app must reply to the HTTP POST request with an HTTP 200 OK
> response. This must be sent within 3 seconds of receiving the payload.

## References

- https://github.com/slackapi/bolt-python/issues/1083
- https://api.slack.com/reference/block-kit/block-elements#external_select
- https://api.slack.com/interactivity/handling#responses
