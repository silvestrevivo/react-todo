import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class ListItem extends Component {
  static propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  state = { checked: false }

  // componentWillReceiveProps() {
  //   ///
  // }

  render () {
    const { value, onClick, id, checked, onChange } = this.props
    return (
      <li className="list__item">
        <div className="list__checkbox-container">
          <input
            type="checkbox"
            className="list__checkbox"
            checked={checked}
            onChange={() => onChange(id)}
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

export default ListItem
