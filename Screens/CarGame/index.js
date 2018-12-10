import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Constants, Accelerometer } from "expo";

export default class CarGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: 50
    };
  }

  componentDidMount() {
    Accelerometer.addListener(items => {
      let move = items.x * -500;
      this.setState({ movement: move });
    });
  }

  render() {
    const { movement } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require("./road.gif")}
          style={{ width: 360, height: 500 }}
        />
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 300,
            left: movement
          }}
        >
          <Image
            source={require("./car.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>

        <Text>{movement}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
