import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ICSearch from '../../assets/icons/search.png'
import Colors from '../../utils/colors'
import { ms } from 'react-native-size-matters'

const Search = ({ onPress }) => {
  return (
    <View style={styles.textInput}>
      <TextInput placeholder='Mau belajar apa hari ini?' />
      <TouchableOpacity onPress={onPress}>
        <Image source={ICSearch} style={styles.icSearch} />
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.whiteText,
    borderRadius: ms(5),
    paddingLeft: ms(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icSearch: {
    height: ms(27),
    resizeMode: 'contain'
  }
})