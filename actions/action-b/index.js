// index.js
const { Toolkit } = require("actions-toolkit")
const tools = new Toolkit({ event: "pull_request.closed" })

if (tools.context.payload.pull_request.merged) {
  // An authenticated instance of `@octokit/rest`, a GitHub API SDK
  tools.github.git
    .deleteRef(
      tools.context.repo({
        ref: `heads/${payload.pull_request.head.ref}`,
      })
    )
    .then(() => {
      tools.log.success(`Branch ${payload.pull_request.head.ref} deleted!`)
    })
}
