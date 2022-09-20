import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ms } from 'react-native-size-matters'
import MyText from '../../components/Fonts'
import Gap from '../../components/Gap/Index'

// images and icons 
import ButtonNotification from '../../components/ButtonNotification/Index'
import Search from '../../components/Search/Search'



const Home = ({ navigation }) => {

  const search = () => {
    console.log("Search Button Press")
  }
  return (
    <View>
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
          <ButtonNotification onPress={() => navigation.navigate('Notification')} />
        </View>
        <Search onPress={() => search()} />
      </LinearGradient>
    </View>
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

})