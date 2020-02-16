import * as React from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { ItemType, projects, ProjectItem } from '~src/data/projects'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Project.styled'

class Project extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public renderItem(projectID: string, index: number, item: ProjectItem) {
    if (item.type === ItemType.TITLE) {
      return (
        <Text style={s.style.title}>
          {item.value}
        </Text>
      )
    }

    if (item.type === ItemType.SUBHEADING) {
      return (
        <Text style={s.style.subheading}>
          {item.value}
        </Text>
      )
    }

    if (item.type === ItemType.DESCRIPTION) {
      return (
        <Text style={s.style.description}>
          {item.value}
        </Text>
      )
    }

    if (item.type === ItemType.IMAGE) {
      return (
        <Image
          key={`project-${projectID}-${index}`}
          source={item.value}
          style={s.itemImage({ source: item.value, widthPercent: item.widthPercent }).style}
        />
      )
    }

    return null
  }

  public render() {
    const projectID = this.props.navigation.getParam('projectID')

    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          {projects[projectID].items.map((item, index) => this.renderItem(projectID, index, item))}
        </View>
      </AppContainer>
    )
  }
}

export default Project
