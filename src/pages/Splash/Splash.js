import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.png'
import LinearGradient from 'react-native-linear-gradient'
import { ms } from 'react-native-size-matters'

const Splash = () => {
  return (
    <LinearGradient colors={['#23049D', '#1C0478']} style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
    </LinearGradient>
  )
}

export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: ms(200),
    height: ms(200),
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})