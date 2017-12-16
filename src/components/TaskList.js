import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { taskFetch } from '../actions';

class TaskList extends Component {
  componentWillMount() {
    this.props.taskFetch();
  }
  render() {
    return (
      <View>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
        <Text>Task List</Text>
      </View>
    );
  }
}

export default connect(null, {taskFetch})(TaskList);
