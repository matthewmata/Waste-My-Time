import React from 'react';
import axios from 'axios';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDont: '',
      priority: '',
      toDonts: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getToDonts = this.getToDonts.bind(this);
    this.deleteToDont = this.deleteToDont.bind(this);
    this.updateToDont = this.updateToDont.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  componentDidMount() {
    this.getToDonts();
  }

  handleChange(e) {
    let key = e.target.name;
    let value = e.target.value
    this.setState({[key]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.priority)
    axios
    .post('/api/toDont', {
      name: this.state.toDont,
      priority: this.state.priority
    })
    .then(() => {console.log('submitted')})
    .then(() => {this.getToDonts()})
    .catch((err) => console.log(err))
  }

  getToDonts() {
    axios
    .get('/api/toDont')
    .then(data => this.setState({toDonts: data.data}, ()=> console.log(this.state.toDonts)))
    .catch((err) => console.log(err))
  }

  deleteToDont(_id) {
    axios
    .delete('/api/toDont', {params: {_id}})
    .then(() => {console.log('deleted')})
    .then(() => {this.getToDonts()})
    .catch((err) => console.log(err))
  }

  updateToDont(_id, newToDont) {
    axios
    .put(`/api/toDont`, {name: newToDont, _id})
    .then(() => {console.log('updated')})
    .then(() => {this.getToDonts()})
    .catch((err) => console.log(err))
  }

  deleteAll() {
    axios
    .delete('/api/toDont/deleteAll')
    .then(() => {console.log('deleted all')})
    .then(() => {this.getToDonts()})
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          <form id="toDontForm" onSubmit={this.handleSubmit}>
            <label>
              Add ToDon't :
              <input type="text" name="toDont" required onChange={this.handleChange}/>
            </label>
            <label>
              Priority :
              <input type="text" name="priority" required onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          {this.state.toDonts.map((toDont, index) => <ListEntry toDont={toDont} key={index} deleteToDont={this.deleteToDont} updateToDont={this.updateToDont}/>)}
        </div>
        <div>
          <button onClick={this.deleteAll}>Delete All</button>
        </div>
      </div>
    )
  }
}

export default List