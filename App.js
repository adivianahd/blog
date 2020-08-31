import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Users, Posts, Detail } from './myScreens';


const AppNavigator = createStackNavigator({
  Users: {
    screen: Users,
  },
  Posts: {
    screen: Posts,
  },
  Detail: {
    screen: Detail,
  },
}, {
  initialRouterName: 'Users',
})

export default createAppContainer(AppNavigator)

