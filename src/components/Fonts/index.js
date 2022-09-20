import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = ({ children, style }) => {
  return (
    <Text style={style}>
      {children}
    </Text>
  )
}

export default MyText

const styles = StyleSheet.create({

})