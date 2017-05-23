import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="about js-showtime">
        <div className="about__title about__title--current-job">I built and launched impactful products at <a href="http://www.codeandcraft.nyc" target="_blank">Code and Craft</a> through user research, wireframing, and rapid development.
        </div>
        <div className="about__title about__title--previous-job">Previously, I was working at <a href="https://squarespace.com" target="_blank"> Squarespace</a> building the <a href="https://circle.squarespace.com" target="_blank">Circle</a> microsite and providing support for the <a href="https://developers.squarespace.com" target="_blank">Developer Platform</a>.</div>
        <div className="about__title about__title--hobbies">My hobbies include shooting film photography, DJing on turntables and occasionally jumping out of an airplane from 15,000 feet.</div>
      </div>
    )
  }
}
