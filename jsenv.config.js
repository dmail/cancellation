const { launchNode } = require("@jsenv/node-launcher")
const { launchChromium } = require("@jsenv/chromium-launcher")

const projectPath = __dirname
exports.projectPath = projectPath

const testDescription = {
  "/test/**/*.test.js": {
    browser: {
      launch: launchChromium,
    },
    node: {
      launch: launchNode,
    },
  },
  "/test/browser/**/*.test.js": {
    browser: {
      launch: launchChromium,
    },
    node: null,
  },
  "/test/node/**/*.test.js": {
    browser: null,
    node: {
      launch: launchNode,
    },
  },
}
exports.testDescription = testDescription
