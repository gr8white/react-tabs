import React, { Component } from 'react'
import Tab from './Tab'
// Shortcut: rcc

export default class Tabs extends Component {
  render() {
    let {activeTab, changeTab} = this.props
    return (
      <div className="tabs is-boxed is-medium">
        <ul>
          <Tab 
          isActive={activeTab === 0} 
          label='Hello React' 
          handleClick={() => changeTab(0)}/>
          <Tab 
          isActive={activeTab === 1}
          label='Lorem Ipsum'
          handleClick={() => changeTab(1)}/>
          <Tab 
          isActive={activeTab === 2}
          label='Login Form' 
          handleClick={() => changeTab(2)}/>
        </ul>
      </div>
    )
  }
}

