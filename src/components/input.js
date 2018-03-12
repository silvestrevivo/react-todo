import React from 'react'
import Classnames from 'classnames'
import PropTypes from 'prop-types'

const Input = ({ value, onChange, onKeyPress, onCheckedGeneral, checkedGeneral, checkVisible }) => {
  return (
    <div className="input">
      <div className="input__checkbox-container">
        <input
          type="checkbox"
          checked={checkedGeneral}
          className={Classnames('input__checkbox', checkVisible ? 'hidden' : null)}
          onChange={onCheckedGeneral} />
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
  onKeyPress: PropTypes.func,
  onCheckedGeneral: PropTypes.func,
  checkVisible: PropTypes.bool,
  checkedGeneral: PropTypes.bool
}

export default Input
