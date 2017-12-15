import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';

class TaskCreate extends Component {

  onButtonPress() {
    const { name, insights, dueDate} = this.props;

    this.props.taskCreate({ name, insights, dueDate})
  }

  render() {

    return (
      <Card>

        <CardSection>
          <Input
            label="name"
            placeholder="Get the groceries"
            value={this.props.name}
            onChangeText={text => this.props.taskUpdate({ prop: 'name', value: text })}
            />
        </CardSection>

        <CardSection>
           <Input
            label="Insights"
            placeholder="I learned that..."
            value={this.props.insights}
            onChangeText={text => this.props.taskUpdate({ prop: 'insights', value: text })}
            />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }} >
          <Text style={styles.pickerTextStyle}>Due Date</Text>
          <Picker
            selectedValue={this.props.dueDate}
            onValueChange={day => this.props.taskUpdate({ prop: 'dueDate', value: day })}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, insights, dueDate } = state.taskForm;
  return { name, insights, dueDate }
};

export default connect(mapStateToProps, { taskUpdate, taskCreate })(TaskCreate);
