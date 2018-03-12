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

  clearAll = () => {
    const filterArray = this.state.items.filter(item => item.checked === false)
    this.setState({
      items: filterArray,
      value: '',
      checkedGeneral: false
    })
  }

  onCheckedGeneral = () => {
    this.setState({
      checkedGeneral: !this.state.checkedGeneral,
      items: this.state.items.map(item => {
        return {
          ...item,
          checked: !this.state.checkedGeneral
        }
      })
    })
  }

  helperCheckGeneralTrue = () => {
    this.setState({
      checkedGeneral: true
    })
  }

  helperCheckGeneralFalse = () => {
    this.setState({
      checkedGeneral: false
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const arrayLength = this.state.items.length
    const arrayCheckedLength = this.state.items.filter(item => item.checked === true).length

    // condition to avoid loop
    if (prevState.items !== this.state.items) {
      if ((arrayLength === arrayCheckedLength && prevState.checkedGeneral === false) && arrayLength > 0) {
        this.helperCheckGeneralTrue()
        // helper to avoid loop
      } else if ((arrayLength > arrayCheckedLength && prevState.checkedGeneral === true) && arrayLength > 0) {
        this.helperCheckGeneralFalse()
        // helper to avoid loop
      }
    }
  }

  render () {
    const { value, items, checkedGeneral } = this.state
    return (
      <Aux>
        <div className="container">
          <h1 className="header">todos</h1>
          <div className="todos-container">
            <Input
              value={value}
              checkVisible={this.state.items.length === 0}
              checkedGeneral={checkedGeneral}
              onCheckedGeneral={this.onCheckedGeneral}
              onChange={event => this.setState({ value: event.target.value })}
              onKeyPress={this.handleKeyPress} />
            <List items={items} onClick={this.handleDelete} onChange={this.handleIndividualCheck} />
            {items.length > 0 ? <FooterList items={items} onClick={this.clearAll} /> : null}
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
