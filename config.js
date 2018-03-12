// @flow

import { NativeModules } from "react-native"
import { getBuildNumber } from "react-native-device-info"
import pck from "./package.json"
import EnvConfigDefault from "./env.json"

export type ENVType = "development" | "staging" | "production" | "testing"

export type EnvironmentConfiguration = {
    VERSION: string,
    BUILD_NUMBER: string,
    ENV: ENVType,
    SERVER_URL: string,
    WEB_APP_URL: string,
    CODE_PUSH_KEY: ?string,
    SENTRY_DSN: ?string,
    BUDDYBUILD: ?{ SCHEME: string, APP_ID: string, TOKEN: string, BRANCH: string },
    INTERCOM: ?{ API_KEY: string, APP_ID: string },
}

const environment: ENVType = NativeModules.RNConfig.Environment

const config: EnvironmentConfiguration = {
    VERSION: pck.version,
    BUILD_NUMBER: getBuildNumber(),
    ENV: environment,
    SERVER_URL: EnvConfigDefault[environment].SERVER_URL,
    WEB_APP_URL: EnvConfigDefault[environment].WEB_APP_URL,
    CODE_PUSH_KEY: EnvConfigDefault[environment].CODE_PUSH_KEY,
    SENTRY_DSN: EnvConfigDefault[environment].SENTRY_DSN,
    BUDDYBUILD: EnvConfigDefault[environment].BUDDYBUILD,
    INTERCOM: EnvConfigDefault[environment].INTERCOM,
}

export default config
