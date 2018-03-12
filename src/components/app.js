import React, { Component } from 'react'
import uniqid from 'uniqid'
import { bake_cookie as bakeCookie, read_cookie as readCookie } from 'sfcookies'
import Aux from './aux'
import Input from './input'
import List from './list'
import FooterList from './footer-list'

class App extends Component {
  state = {
    value: '',
    items: readCookie('items') || [],
    itemsActive: readCookie('itemsActive') || [],
    itemsCompleted: readCookie('itemsCompleted') || [],
    showAll: true,
    showActive: false,
    showCompleted: false,
    checkedGeneral: false
  }

  // Basic handlers
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

  // update component for controlling the amount of items checked
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

  helperActiveCompleted = () => {
    this.setState({
      itemsActive: this.state.items.filter(item => item.checked === false),
      itemsCompleted: this.state.items.filter(item => item.checked === true)
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
      this.helperActiveCompleted() // to update both arrays
      bakeCookie('items', this.state.items) // to write cookie with items array
      bakeCookie('itemsActive', this.state.itemsActive)
      bakeCookie('itemsCompleted', this.state.itemsCompleted)
    }
  }

  // showing differents lists
  all = () => {
    this.setState({
      showAll: true,
      showActive: false,
      showCompleted: false
    })
  }

  active = () => {
    this.setState({
      showAll: false,
      showActive: true,
      showCompleted: false
    })
  }

  completed = () => {
    this.setState({
      showAll: false,
      showActive: false,
      showCompleted: true
    })
  }

  render () {
    const { value, items, itemsActive, itemsCompleted, checkedGeneral, showAll, showActive, showCompleted } = this.state
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
            {showAll && <List items={items} onClick={this.handleDelete} onChange={this.handleIndividualCheck} />}
            {showActive && <List items={itemsActive} onClick={this.handleDelete} onChange={this.handleIndividualCheck} />}
            {showCompleted && <List items={itemsCompleted} onClick={this.handleDelete} onChange={this.handleIndividualCheck} />}
            {items.length > 0 ? <FooterList
              items={items}
              onClickAll={this.all}
              onClickActive={this.active}
              onClickCompleted={this.completed}
              onClickClearAll={this.clearAll}
              showAll={this.state.showAll}
              showActive={this.state.showActive}
              showCompleted={this.state.showCompleted} /> : null}
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
