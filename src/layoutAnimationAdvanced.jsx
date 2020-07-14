/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Platform,
  UIManager,
} from 'react-native';
import ButtonsBar from './buttonsBar';

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
  item: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 25,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  area: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: 1,
    };
  }

  onPress = (items) => {
    const {
      configureNext,
      Properties,
      Types,
    } = LayoutAnimation;
    const CustomLayoutAnimation = {
      duration: 100,
      create: {
        delay: 100,
        type: Types.spring,
        property: Properties.scaleXY,
        springDamping: 0.2,
        initialVelocity: 1,
      },
      update: {
        type: Types.easeInEaseOut,
        property: Properties.scaleXY,
      },
      delete: {
        type: Types.easeOut,
        property: Properties.opacity,
      },
    };
    configureNext(CustomLayoutAnimation);

    this.setState({
      items,
    });
  };

  get items() {
    return Array(this.state.items)
      .fill(1)
      .map((item, index) => (
        <View style={styles.item} key={index} />
      ));
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonsBar onPress={this.onPress} />
        <View style={styles.area}>{this.items}</View>
      </View>
    );
  }
}
