import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { SCREEN_HEIGHT } from '../global/globalVariables';

export default Loading = () => {
  return (
    <View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color="#0000ff" size="large" />
      </View>
      <View style={{marginTop: 50}}>
        <Text style={{textAlign: "center", fontSize: 18}}>Hold on a few seconds...</Text>
        <Text style={{textAlign: "center", fontSize: 18}}>We are preparing your personal training regime and diet</Text>
      </View>
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