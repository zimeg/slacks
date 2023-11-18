const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');

config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
});

app.function('create_issue', async ({ inputs, client, complete, fail }) => {
  try {
    const token = await client.apiCall('apps.auth.external.get', {
      external_token_id: inputs.githubAccessTokenId,
    });
    if (!token.ok) throw new Error('Failed to access authentication token');

    const { hostname, pathname } = new URL(inputs.repositoryURL);
    const [, owner, repo] = pathname.split('/');

    // https://docs.github.com/en/enterprise-server@3.3/rest/guides/getting-started-with-the-rest-api
    const apiURL = hostname === 'github.com'
      ? 'api.github.com'
      : `${hostname}/api/v3`;

    // https://docs.github.com/en/rest/issues/issues#create-an-issue
    const issueEndpoint = `https://${apiURL}/repos/${owner}/${repo}/issues`;
    const headers = {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token.external_token}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const body = JSON.stringify({
      title: inputs.issueTitle,
      body: inputs.issueDescription,
    });
    const opts = { method: 'POST', headers, body };
    const issue = await fetch(issueEndpoint, opts).then((res) => {
      if (res.status === 201) return res.json();
      throw new Error(`${res.status}: ${res.statusText}`);
    });
    complete({
      outputs: {
        issueNumber: issue.number,
        issueLink: issue.html_url,
      },
    });
  } catch (error) {
    console.error(error);
    fail({ error });
  }
});

(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running! ⚡️');
  } catch (error) {
    console.error('Failed to start App', error);
  }
})();
