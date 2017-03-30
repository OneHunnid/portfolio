import React from 'react'
import Header from '../components/Header'
import json from '../data/data.json'
import header from '../utils/header'
import showtime from '../utils/showtime'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    showtime.Intro()
    header.toggleMenu();
    header.closeOnClick();
    header.closeOnResize();
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
