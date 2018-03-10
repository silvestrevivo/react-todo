import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class ListItem extends Component {
  state = { checked: false }

  // componentWillReceiveProps() {
  //   ///
  // }

  render () {
    const { value, onClick, id } = this.props
    return (
      <li className="list__item">
        <div className="list__checkbox-container">
          <input
            type="checkbox"
            className="list__checkbox"
            onChange={() => this.setState({ checked: !this.state.checked })}
          />
        </div>
        <div className={Classnames('list__text', this.state.checked ? 'list__checked' : null)}>
          {this.state.checked ? <del>{value}</del> : value}
        </div>
        <div className="list__close">
          <p onClick={() => onClick(id)}>&#10005;</p>
        </div>
      </li>
    )
  }
}

ListItem.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
}

export default ListItem
