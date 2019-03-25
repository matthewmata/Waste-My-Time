import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTodo: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({changeTodo: e.target.value});
  }

  render() {
    return (
      <div>
        <span>ToDont: {this.props.toDont.name} || Priority: {this.props.toDont.priority}</span>
        <input type='text' onChange={this.handleChange}></input>
        <button onClick={() => this.props.updateToDont(this.props.toDont._id, this.state.changeTodo)}>Update</button>
        <button onClick={() => this.props.deleteToDont(this.props.toDont._id)}>Delete</button>
      </div>
    )
  }
}

export default ListEntry;