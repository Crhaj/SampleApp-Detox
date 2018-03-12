// @flow

import React from "react"
import { AppRegistry, Button, View, Text } from "react-native"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            textVisible: true,
        }
    }

    onButtonTapped = () => {
        if (this.state.textVisible) {
            this.setState({ textVisible: false })
        }
        else {
            this.setState({ textVisible: true })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.textVisible ? <Text testID="App_Text" style={styles.text}>Hello!</Text> : null}
                <Button testID="App_Button" title="Tap me" onPress={this.onButtonTapped} />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
    },
}

AppRegistry.registerComponent("App", () => (App))
