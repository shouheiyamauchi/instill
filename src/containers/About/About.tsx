import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './About.styled'

class About extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <Text style={s.style.title}>About Me</Text>
          <Text style={s.style.description}>
            {
              "I'm Daniel Goh, a graphic designer and illustrator based in Sydney, Australia. Inst.ill Creative is my freelance moniker with which I currently conduct out of hours freelance work, as I am currently working for a media company as an in-house designer.\n\nBefore becoming a graphic designer, I studied a Bachelors and Masters degree in Medical Science and worked for 5 years in clinical histopathology. I have always had a passion for hip hop, street art, graffiti writing and an appreciation of art and culture, so the transition from science to graphic design just made sense for me.\n\nI believe that design is a balance of science and art, and that good design grows from understanding the problem on hand and undertaking the necessary research to develop a unique solution to solve the problem.\n\nWhen I'm not sitting behind a computer, I can be found bboying (breakdancing). This is a physical artform that I have been practicing for the last 10 years, and one which I believe shares similar principles to visual design and creativity in general."
            }
          </Text>
        </View>
      </AppContainer>
    )
  }
}

export default About
