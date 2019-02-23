import React from 'react'
// Shortcut: rafc

const Tab = ({label, isActive, handleClick}) => {
  return (
    <div>
      <li 
        className={isActive ? "is-active" : ""} 
        onClick={() => handleClick()}>
        <a>{label}</a>
      </li>
    </div>
  )
}

export default Tab
