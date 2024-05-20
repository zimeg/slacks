import os
import time
import logging
from typing import Optional, Dict, Any

from slack_bolt import App, Ack, BoltContext
from slack_sdk import WebClient
from slack_bolt.adapter.socket_mode import SocketModeHandler
from slack_sdk.errors import SlackApiError

app = App(token=os.environ.get("SLACK_BOT_TOKEN"))
logging.basicConfig(level=logging.DEBUG)


@app.command("/open-modal")
def open_modal(ack: Ack, body: Dict[str, Any], client: WebClient, logger: logging.Logger):
    ack()
    try:
        client.views_open(
            trigger_id=body["trigger_id"],
            view={
                "type": "modal",
                "callback_id": "some_callback_id",
                "title": {
                    "type": "plain_text",
                    "text": "Select an Option"
                },
                "blocks": [
                    {
                        "type": "input",
                        "element": {
                            "type": "external_select",
                            "action_id": "this_action_option",
                            "placeholder": {
                                "type": "plain_text",
                                "text": "Select an option"
                            },
                            "min_query_length": 0
                        },
                        "label": {
                            "type": "plain_text",
                            "text": "Options"
                        },
                    }
                ],
                "submit": {
                    "type": "plain_text",
                    "text": "Submit",
                    "emoji": True
                    }
            }
        )
    except SlackApiError as e:
        logger.error(f"Error opening modal: {e.response['error']}")


@app.options("this_action_option")
def send_list_options(ack: Ack, options: Optional[Dict[str, Any]], logger: logging.Logger):
    ack({
        "options": [
            {
                "text": {
                    "type": "plain_text",
                    "text": "Loading options..."
                },
                "value": "loading"
            }
        ]
    })

    print("Loading more results...")
    time.sleep(2)
    print("Done loading results!")

    ack({
        "options": [
            {
                "text": {
                    "type": "plain_text",
                    "text": "Result 1"
                },
                "value": "result1"
            },
            {
                "text": {
                    "type": "plain_text",
                    "text": "Result 2"
                },
                "value": "result2"
            },
        ]
    })

if __name__ == "__main__":
    SocketModeHandler(app, os.environ.get("SLACK_APP_TOKEN")).start()
