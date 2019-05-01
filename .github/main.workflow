workflow "Reporting workflow" {
  on = "pull_request"
  resolves = ["high-priority-prs"]
}

action "high-priority-prs" {
  uses = "./.github/actions/actions/high-priority-prs"
  secrets = ["GITHUB_TOKEN", "SLACK_TOKEN", "SLACK_CHANNEL_ID"]
}
