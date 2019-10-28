import React from 'react'
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationScreenProp } from 'react-navigation'
import logo from '~assets/images/logo.png'
import * as colors from '~src/styles/colors'

import Menu from '../Menu/Menu'

import * as s from './AppContainer.styled'

class AppContainer extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public state = {
    menuBounceValue: new Animated.Value(0),
    showMenu: false
  }

  public menuItems = [
    {
      name: '.design',
      onPress: () => this.props.navigation.navigate('Home')
    },
    {
      name: '.illustration',
      onPress: () => this.props.navigation.navigate('Illustrations')
    },
    {
      name: '.about',
      onPress: () => this.props.navigation.navigate('About')
    },
    {
      name: '.contact',
      onPress: () => this.props.navigation.navigate('Contact')
    }
  ]

  public toggleMenu = () => {
    const toValue = this.state.showMenu ? 0 : Dimensions.get('window').height
    this.setState({ showMenu: !this.state.showMenu })

    Animated.spring(this.state.menuBounceValue, {
      friction: 8,
      tension: 2,
      toValue,
      velocity: 3
    }).start()
  }

  public openURL = (url: string) => () => {
    Linking.openURL(url)
  }

  public render() {
    return (
      <>
        <ScrollView>
          <View style={s.style.navBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image source={logo} style={s.logo({ source: logo }).style} />
            </TouchableOpacity>
            <View style={s.style.hamburgerContainer}>
              <TouchableHighlight onPress={this.toggleMenu}>
                <Icon name="bars" size={25} />
              </TouchableHighlight>
            </View>
            <View style={s.style.icons}>
              <Icon
                name="instagram"
                size={30}
                color={colors.SOCIAL_ICONS}
                onPress={this.openURL(
                  'https://www.instagram.com/inst.ill_creative/'
                )}
              />
              <Icon
                name="facebook"
                size={30}
                color={colors.SOCIAL_ICONS}
                onPress={this.openURL(
                  'https://www.facebook.com/inst.illcreative/'
                )}
              />
              <Icon
                name="linkedin"
                size={30}
                color={colors.SOCIAL_ICONS}
                onPress={this.openURL(
                  'https://www.linkedin.com/in/daniel-goh-b2398341/'
                )}
              />
            </View>
          </View>
          {this.props.children}
          <View style={s.style.footer}>
            <Text style={s.style.footerText}>
              {`© Copyright\nInst.ill Creative ${new Date().getFullYear()}`}
            </Text>
          </View>
        </ScrollView>
        <Menu
          menuBounceValue={this.state.menuBounceValue}
          menuItems={this.menuItems}
          toggleMenu={this.toggleMenu}
        />
      </>
    )
  }
}

export default AppContainer
