#!/bin/sh

grey() {
    echo "\x1b[38:5:242m$1\x1b[0m"
}

echo "📦 Custom Deployment Script"
grey "   Oh nice! This is the script!"
echo ""
sleep 0.4

echo "🔐 Retrieving Credentials"
sleep 0.4
grey "   SLACK_APP_TOKEN=$SLACK_APP_TOKEN"
sleep 0.4
grey "   SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN"
echo ""
sleep 0.4

read -p "📋 Do you want to continue? [y/n] " answer
case $answer in
    [Yy]*) echo "\n🍄 Time for an adventure!";;
    [Nn]*) echo "\n🌵 No deployment this time!"; exit 2;;
    *) exit 4;
esac

sleep 0.6
grey "   Saving credentials to .env.proof as an example"
echo "🔐 SLACK_APP_TOKEN=$SLACK_APP_TOKEN" >> .env.proof
echo "🔐 SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN" >> .env.proof
sleep 1
grey "   Now waiting a few seconds for some reflection"
sleep 4
grey "   Okay now imagine the deployment finished"
sleep 0.8
echo ""
