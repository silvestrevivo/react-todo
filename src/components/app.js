import React, { Component } from 'react'
import Input from './input'
import List from './list'

class App extends Component {
  state = {
    value: '',
    items: []
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      this.setState({
        value: '',
        items: [...this.state.items, this.state.value]
      })
    }
  }

  handleDelete = (i) => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item !== i)
      }
    })
  }

  render () {
    // console.log(this.state)
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
