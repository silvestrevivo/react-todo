import React, { Component } from 'react'
import uniqid from 'uniqid'
import Aux from './aux'
import Input from './input'
import List from './list'
import FooterList from './footer-list'

class App extends Component {
  state = {
    value: '',
    items: [],
    checkedGeneral: false
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      let id = uniqid()
      const item = { id: id, checked: false, value: this.state.value }
      this.setState({
        value: '',
        checkVisible: true,
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

  handleIndividualCheck = (id) => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked
        }
      } else {
        return item
      }
    })
    this.setState({
      items: newItems
    })
  }

  checkedGeneral = () => {
    this.setState({
      checkedGeneral: !this.state.checkedGeneral
    })
  }

  render () {
    const { value, items, checkedGeneral } = this.state
    // console.log(checkedGeneral)
    return (
      <Aux>
        <div className="container">
          <h1 className="header">todos</h1>
          <div className="todos-container">
            <Input
              value={value}
              checkVisible={this.state.items.length === 0}
              onChangeChecked={this.checkedGeneral}
              onChange={event => this.setState({ value: event.target.value })}
              onKeyPress={this.handleKeyPress} />
            <List items={items} onClick={this.handleDelete} checkedGeneral={checkedGeneral} onChange={this.handleIndividualCheck} />
            {items.length > 0 ? <FooterList items={items} /> : null}
          </div>
        </div>
        <footer className="footer">
          <p>developed by <a href="http://www.github.com/silvestrevivo" target="_blank">@silvestrevivo</a></p>
        </footer>
      </Aux>
    )
  }
}

export default App
