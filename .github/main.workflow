workflow "Node workflow" {
  on = "pull_request"
  resolves = ["Node Action"]
}

action "Node Action" {
  uses = "./action-b"
  secrets = ["GITHUB_TOKEN"]
}
