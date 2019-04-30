# Use the latest version of Node.js
#
# You may prefer the full image:
# FROM node
#
# or even an alpine image (a smaller, faster, less-feature-complete image):
# FROM node:alpine
#
# You can specify a version:
# FROM node:10-slim
FROM node:10-slim

# Labels for GitHub to read your action
LABEL "com.github.actions.name"="action-b"
LABEL "com.github.actions.description"="A test node action"
# Here are all of the available icons: https://feathericons.com/
LABEL "com.github.actions.icon"="activity"
# And all of the available colors: https://developer.github.com/actions/creating-github-actions/creating-a-docker-container/#label
LABEL "com.github.actions.color"="white"

# Copy the rest of your action's code
COPY . .

RUN node --version

# Install dependencies
RUN npm ci

# Run `node /index.js`
ENTRYPOINT ["node", "/index.js"]
