import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ms } from 'react-native-size-matters'
import MyText from '../../components/Fonts'
import Gap from '../../components/Gap/Index'

// images and icons 
import ICBell from '../../assets/icons/bell.png'
import Colors from '../../utils/colors'

const Home = () => {
  return (
    <LinearGradient colors={['#23049D', '#23049D']} style={styles.headingWrapper}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <MyText style={styles.hello}>
            Hallo, User !
          </MyText>
          <Gap height={ms(10)} />
          <MyText style={styles.subHello}>
            Hari yang indah untuk belajar!
          </MyText>
        </View>
        <View style={styles.iconWrapper}>
          <Image source={ICBell} style={styles.icon} />
        </View>
      </View>
    </LinearGradient>
  )
}

export default Home;

const styles = StyleSheet.create({
  headingWrapper: {
    height: ms(200),
    padding: ms(24),
    borderBottomLeftRadius: ms(30),
    borderBottomRightRadius: ms(30),
  },
  hello: {
    fontWeight: '700',
    color: '#FFF',
    fontSize: ms(30)
  },
  subHello: {
    color: '#FFF'
  },
  icon: {
    height: ms(24),
    width: ms(24),
  },
  iconWrapper: {
    backgroundColor: Colors.whiteText,
    height: ms(30),
    width: ms(30),
    borderRadius: ms(8),
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})