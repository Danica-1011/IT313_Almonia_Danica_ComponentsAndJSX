import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import StudentRoster from './components/StudentRoster';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      <StudentRoster />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});