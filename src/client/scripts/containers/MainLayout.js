import React from 'react'
import Header from '../components/Header'
import json from '../data/data.json'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='site-wrapper'>
        <Header data={json}/>
        <main id="main" class="main">
          {this.props.children}
        </main>
      </div>
    )
  }
}
