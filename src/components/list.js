import React, { Component } from 'react'
import ListItem from './list-item'
import PropTypes from 'prop-types'

class List extends Component {
  // state = { checked: false }

  listItems = () => {
    const { items, onClick, checkedGeneral } = this.props
    return items.map(item => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          value={item.value}
          onClick={onClick}
          checkedGeneral={checkedGeneral} />
      )
    })
  }

  render () {
    return (
      <ul className="list">{this.listItems()}</ul>
    )
  }
}

List.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  checkedGeneral: PropTypes.bool
}

export default List
