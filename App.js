import { StatusBar, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {Dimensions} from 'react-native';

import Header from './container/header/header';
import Item from './container/item/item';

const dataDevice = {
  dimensions : {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  }
}

const App = () => {
  return (
    <SafeAreaView  style={{
      display: "flex",
      justifyContent: "center",
      width: dataDevice.dimensions.width,
      backgroundColor: '#0d1323',
    }}>
      <StatusBar backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: dataDevice.dimensions.width * 0.90, marginTop: 15, marginLeft: dataDevice.dimensions.width * 0.05}} contentContainerStyle={{justifyContent: 'center' }}>
        <Header />
        
        <Item name="Work" hours={50} lastWeekHours={152} color="#ff8b64" />
        <Item name="Play" hours={34} lastWeekHours={48} color="#56c2e6" />
        <Item name="Study" hours={21} lastWeekHours={5} color="#ff5f7b" />
        <Item name="Exercise" hours={7} lastWeekHours={8} color="#4bcf83" />
        <Item name="Social" hours={17} lastWeekHours={14} color="#7235d1" />
        <Item name="Self Care" hours={2} lastWeekHours={2} color="#f1c75b" />

        {/* <StatusBar style="auto" /> */}

      </ScrollView >
    </SafeAreaView >
  );
}

export default App;