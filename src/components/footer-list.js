import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FooterList extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
  }

  counter = () => {
    const filterArray = this.props.items.filter(item => item.checked === false)
    return filterArray.length
  }

  render () {
    return (
      <div className="footer-list">
        <div className="footer-list__counter">
          {this.counter()} items left
        </div>
        <div className="footer-list__controls">
          <p className="footer-list__controls--all">all</p>
          <p className="footer-list__controls--active">active</p>
          <p className="footer-list__controls--completed">completed</p>
        </div>
        <div className="footer-list__clear" onClick={this.props.onClick}>
          clear completed
        </div>
      </div>
    )
  }
}

export default FooterList
