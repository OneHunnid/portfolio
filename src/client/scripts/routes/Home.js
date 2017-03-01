import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Accolades from '../components/Accolades'
import json from '../data/data.json'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page-home">
        <Banner data={json.website}/>
        <Accolades />
        <About />
      </div>
    )
  }
}
