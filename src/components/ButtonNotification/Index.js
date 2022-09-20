import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ms } from 'react-native-size-matters'
import ICBell from '../../assets/icons/bell.png'
import Colors from '../../utils/colors'


const ButtonNotification = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
      <Image source={ICBell} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default ButtonNotification

const styles = StyleSheet.create({
  icon: {
    height: ms(24),
    width: ms(24),
  },
  iconWrapper: {
    backgroundColor: Colors.whiteText,
    height: ms(30),
    width: ms(30),
    borderRadius: ms(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
})