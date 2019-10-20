import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Contact.styled'

class Project extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <Text style={s.style.title}>About Me</Text>
          <Text style={s.style.description}>
            {
              "Currently only available for out of office hours work.\n\nDon't hesitate to reach out for a quote or to have a chat about your design needs."
            }
          </Text>
          <Text style={s.style.contact}>{'info@instillcreative.com.au'}</Text>
        </View>
      </AppContainer>
    )
  }
}

export default Project
