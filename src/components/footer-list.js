import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class FooterList extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClickAll: PropTypes.func,
    onClickActive: PropTypes.func,
    onClickCompleted: PropTypes.func,
    onClickClearAll: PropTypes.func,
    showAll: PropTypes.bool,
    showActive: PropTypes.bool,
    showCompleted: PropTypes.bool
  }

  counter = () => {
    const filterArray = this.props.items.filter(item => item.checked === false)
    return filterArray.length
  }

  render () {
    const { onClickAll, onClickActive, onClickCompleted, onClickClearAll, showAll, showActive, showCompleted } = this.props
    return (
      <div className="footer-list">
        <div className="footer-list__counter">
          {this.counter()} items left
        </div>
        <div className="footer-list__controls">
          <p className={Classnames('footer-list__controls--all', showAll ? 'selected' : null)}
            onClick={onClickAll}>all</p>
          <p className={Classnames('footer-list__controls--active', showActive ? 'selected' : null)}
            onClick={onClickActive}>active</p>
          <p className={Classnames('footer-list__controls--completed', showCompleted ? 'selected' : null)}
            onClick={onClickCompleted}>completed</p>
        </div>
        <div className="footer-list__clear" onClick={onClickClearAll}>
          clear completed
        </div>
      </div>
    )
  }
}

export default FooterList
