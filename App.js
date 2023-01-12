import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppState } from 'react-native';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';

export default function App() {
  var [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
 }, []);

var handleAppStateChange = (nextAppState) => {
  if (nextAppState !== 'active') {
    const analysisData = J$.analysis.endExecution();
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'DCG.json', JSON.stringify(analysisData)).then(()=>{
      alert('DCG written to '+ FileSystem.documentDirectory + 'DCG.json')
    }).catch((e)=>{
        alert(e)
    }); 
  }
}
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
