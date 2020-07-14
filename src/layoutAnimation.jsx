import React, { Component } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: 'rgba(1,1,1,.1)',
    height: 90,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '20%',
    flexWrap: 'wrap',
  },
  area: {
    flex: 1,
  },
  collapsed: {
    flex: 0,
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
});

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  // componentDidMount = () => {
  //   const {
  //     configureNext, create, Properties, Types,
  //   } = LayoutAnimation;
  //   configureNext(
  //     create(500, Types.linear, Properties.scaleXY),
  //   );
  // };

  onPress = (activeIndex) => {
    // LayoutAnimation.linear();
    // LayoutAnimation.configureNext(
    //   LayoutAnimation.Presets.linear,
    // );

    // LayoutAnimation.easeInEaseOut();
    // LayoutAnimation.configureNext(
    //   LayoutAnimation.Presets.easeInEaseOut,
    // );

    // LayoutAnimation.configureNext(
    //   LayoutAnimation.Presets.spring,
    // );
    LayoutAnimation.spring();

    const {
      configureNext,
      Properties,
      Types,
    } = LayoutAnimation;
    configureNext({
      duration: 700,
      create: {
        type: Types.linear,
        property: Properties.opacity,
      },
      update: {
        type: Types.spring,
        springDamping: 0.4,
      },
      delete: {
        type: Types.linear,
        property: Properties.opacity,
      },
    });

    this.setState({ activeIndex });
  };

  getStyleByCollapsingIndex = (index) => ({
    redStyle: index === 1 && styles.collapsed,
    greenStyle: index === 2 && styles.collapsed,
    blueStyle: index === 3 && styles.collapsed,
  });

  render() {
    const {
      redStyle,
      greenStyle,
      blueStyle,
    } = this.getStyleByCollapsingIndex(
      this.state.activeIndex,
    );

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress(1)}
          >
            <Text style={styles.buttonText}>
              Collapse Red
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress(2)}
          >
            <Text style={styles.buttonText}>
              Collapse Green
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress(3)}
          >
            <Text style={styles.buttonText}>
              Collapse Blue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.red, styles.area, redStyle]} />
        <View
          style={[styles.green, styles.area, greenStyle]}
        />
        <View
          style={[styles.blue, styles.area, blueStyle]}
        />
      </View>
    );
  }
}

export default App;
