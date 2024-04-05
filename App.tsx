import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{color: 'white'}}>Hi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
