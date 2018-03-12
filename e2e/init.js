
const detox = require("detox")// eslint-disable-line
const config = require("../package.json").detox// eslint-disable-line

// Set the default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000// eslint-disable-line

beforeAll(async () => {
    await detox.init(config)
})

afterAll(async () => {
    await detox.cleanup()
    // process.exit(0)
})
