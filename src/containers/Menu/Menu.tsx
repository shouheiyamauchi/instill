import React from 'react'
import { Animated, Text } from 'react-native'

import * as s from './Menu.styled'

class Menu extends React.Component<{
  menuItems: Array<{
    name: string
    onPress: () => void
  }>
  menuBounceValue: Animated.Value
  toggleMenu: () => void
}> {
  public closeMenu = (onClick: () => void) => () => {
    onClick()
    this.props.toggleMenu()
  }

  public render() {
    const { menuBounceValue, menuItems, toggleMenu } = this.props

    return (
      <Animated.View style={{ ...s.style.overlay, height: menuBounceValue }}>
        <Text style={s.style.closeButton} onPress={toggleMenu}>
          ×
        </Text>
        {menuItems.map((item) => (
          <Text
            key={`menu-${item.name}`}
            onPress={this.closeMenu(item.onPress)}
            style={s.style.menuItem}
          >
            {item.name}
          </Text>
        ))}
      </Animated.View>
    )
  }
}

export default Menu
