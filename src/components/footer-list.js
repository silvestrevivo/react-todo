import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FooterList extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClickAll: PropTypes.func,
    onClickActive: PropTypes.func,
    onClickCompleted: PropTypes.func,
    onClickClearAll: PropTypes.func
  }

  counter = () => {
    const filterArray = this.props.items.filter(item => item.checked === false)
    return filterArray.length
  }

  render () {
    const { onClickAll, onClickActive, onClickCompleted, onClickClearAll } = this.props
    return (
      <div className="footer-list">
        <div className="footer-list__counter">
          {this.counter()} items left
        </div>
        <div className="footer-list__controls">
          <p className="footer-list__controls--all" onClick={onClickAll}>all</p>
          <p className="footer-list__controls--active" onClick={onClickActive}>active</p>
          <p className="footer-list__controls--completed" onClick={onClickCompleted}>completed</p>
        </div>
        <div className="footer-list__clear" onClick={onClickClearAll}>
          clear completed
        </div>
      </div>
    )
  }
}

export default FooterList
