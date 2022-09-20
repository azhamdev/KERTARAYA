import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MyStack from './src/routes/MyStack'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})