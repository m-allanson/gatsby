workflow "Reporting workflow" {
  on = "pull_request"
  resolves = [ "high-priority-prs" ]
}

action "high-priority-prs" {
  uses = "./.github/actions/gatsby-pr-bot"
  secrets = [ "GITHUB_TOKEN", "SLACK_TOKEN", "SLACK_CHANNEL_ID" ]
}
