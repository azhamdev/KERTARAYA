import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home/home';
import Notification from '../pages/Notification/Notification';
import Splash from '../pages/Splash/Splash';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MyStack;