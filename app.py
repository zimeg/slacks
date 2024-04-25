import logging
import os

from slack_bolt import Ack, App, BoltContext, Complete, Fail, Say
from slack_bolt.adapter.socket_mode import SocketModeHandler
from slack_sdk import WebClient

app = App(token=os.environ.get("SLACK_BOT_TOKEN"))
logging.basicConfig(level=logging.DEBUG)


@app.function("sample_function")
def handle_sample_function_event(complete: Complete, fail: Fail, inputs: dict, logger: logging.Logger, say: Say):
    user_id = inputs["user_id"]
    try:
        say(channel=user_id, text="hello")
        complete({"user_id": user_id})
    except Exception as e:
        logger.exception(e)
        fail(f"Failed to handle a function request (error: {e})")


if __name__ == "__main__":
    SocketModeHandler(app, os.environ.get("SLACK_APP_TOKEN")).start()
