import React, { Component } from 'react'
import uniqid from 'uniqid'
import Input from './input'
import List from './list'

class App extends Component {
  state = {
    value: '',
    items: []
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      let id = uniqid()
      const item = { id: id, value: this.state.value }
      this.setState({
        value: '',
        items: [...this.state.items, item]
      })
    }
  }

  handleDelete = (i) => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== i)
      }
    })
  }

  render () {
    const { value, items } = this.state
    return (
      <div className="container">
        <h1 className="header">todos</h1>
        <div className="todos-container">
          <Input
            value={value}
            onChange={event => this.setState({ value: event.target.value })}
            onKeyPress={this.handleKeyPress} />
          <List items={items} onClick={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default App
