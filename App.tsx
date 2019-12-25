import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import About from '~src/containers/About/About'
import Contact from '~src/containers/Contact/Contact'
import Gallery from '~src/containers/Gallery/Gallery'
import Home from '~src/containers/Home/Home'
import Illustrations from '~src/containers/Illustrations/Illustrations'
import Project from '~src/containers/Project/Project'

console.disableYellowBox = true

const AppNavigator = createStackNavigator(
  {
    About,
    Contact,
    Gallery,
    Home,
    Illustrations,
    Project
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
)

export default createAppContainer(AppNavigator)
