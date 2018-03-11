import React from 'react'
import PropTypes from 'prop-types'

const FooterList = ({ length }) => {
  return (
    <div className="footer-list">
      <div className="footer-list__counter">
        {length} items left
      </div>
      <div className="footer-list__controls">
        <p className="footer-list__controls--all">all</p>
        <p className="footer-list__controls--active">active</p>
        <p className="footer-list__controls--completed">completed</p>
      </div>
      <div className="footer-list__clear">
        clear completed
      </div>
    </div>
  )
}

FooterList.propTypes = {
  length: PropTypes.num
}

export default FooterList
