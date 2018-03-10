import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  // state = {  }

  listItems = () => {
    const { items, onClick } = this.props
    return items.map(item => {
      return (
        <li key={item.id} className="list__item">
          <div className="list__checkbox-container">
            <input type="checkbox" className="list__checkbox" />
          </div>
          <div className="list__text">
            {item.value}
          </div>
          <div className="list__close">
            <p onClick={() => onClick(item.id)}>&#10005;</p>
          </div>
        </li>
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
  onClick: PropTypes.func
}

export default List
