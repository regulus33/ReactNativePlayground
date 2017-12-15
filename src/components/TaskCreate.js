import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux';
import { taskUpdate } from '../actions';

class TaskCreate extends Component {

  render() {

    return (
      <Card>

        <CardSection>
          <Input
            label="name"
            placeholder="Get the groceries"
            value={this.props.name}
            onChangeText={text => this.props.taskUpdate({ prop: 'name', value: text})}
            />
        </CardSection>

        <CardSection>
           <Input
            label="Insights"
            placeholder="I learned that..."
            value={this.props.insights}

            />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, insights, dueDate } = state.taskForm;
  return { name, insights, dueDate }
};

export default connect(null, { taskUpdate })(TaskCreate);
