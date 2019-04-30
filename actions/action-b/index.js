// index.js
const { Toolkit } = require(`actions-toolkit`)
const tools = new Toolkit({ event: `pull_request.closed` })
const { payload, repo } = tools.context

if (payload.pull_request.merged) {
  // An authenticated instance of `@octokit/rest`, a GitHub API SDK
  tools.github.git
    .deleteRef(
      repo({
        ref: `heads/${payload.pull_request.head.ref}`,
      })
    )
    .then(() => {
      tools.log.success(`Branch ${payload.pull_request.head.ref} deleted!`)
    })
}
