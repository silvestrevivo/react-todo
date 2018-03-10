import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="input">
      <div className="input__checkbox-container">
        <input type="checkbox" className="input__checkbox" />
      </div>
      <input
        type="text"
        value={value}
        placeholder="what do you want to do?"
        className="input__text"
        onChange={onChange}
        onKeyPress={onKeyPress} />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
}

export default Input
