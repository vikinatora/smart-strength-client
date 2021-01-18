import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { SCREEN_HEIGHT } from '../global/globalVariables';

export default Loading = (props) => {
  return (
    <View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color="#0000ff" size="large" />
      </View>
      { props.texts && props.texts.length 
        ? <View style={{marginTop: 50}}>
            {props.texts.map(text => (
              <Text style={{textAlign: "center", fontSize: 18}}>{text}</Text>
            ))}
          </View>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HEIGHT / 3,
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
});