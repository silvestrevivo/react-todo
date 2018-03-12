import React, { Component } from 'react'
import ListItem from './list-item'
import PropTypes from 'prop-types'

class List extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    checkedGeneral: PropTypes.bool
  }

  listItems = () => {
    const { items, onClick, checkedGeneral, onChange } = this.props
    return items.map(item => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          value={item.value}
          checked={item.checked}
          onClick={onClick}
          onChange={onChange}
          checkedGeneral={checkedGeneral} />
      )
    })
  }

  render () {
    // console.log(this.props.items)
    return (
      <ul className="list">{this.listItems()}</ul>
    )
  }
}

export default List
