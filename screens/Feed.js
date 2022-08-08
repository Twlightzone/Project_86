import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import PostCard from './PostCard';

export default class FeedScreen extends Component {

  renderItem = ({item : post}) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeAreaView} />
        <View style={styles.appTitle}>
          <View style={styles.appIcons}>
            <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={PostCard}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
